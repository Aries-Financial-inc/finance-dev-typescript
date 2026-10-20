// Hand-maintained runner for the Speakeasy-generated contract tests.
import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer } from 'node:net';
import { setTimeout as delay } from 'node:timers/promises';

export default async function setup() {
  if (process.env.TEST_SERVER_URL) return;
  const directory = mkdtempSync(join(tmpdir(), 'finance-sdk-contract-'));
  let server;
  try {
    execFileSync('go', ['build', '-o', join(directory, 'mockserver'), '.'], {
      cwd: new URL('../../src/__tests__/mockserver/', import.meta.url), stdio: 'pipe',
    });
    const listener = createServer();
    await new Promise((resolve, reject) => { listener.once('error', reject); listener.listen(0, '127.0.0.1', resolve); });
    const { port } = listener.address();
    await new Promise(resolve => listener.close(resolve));
    process.env.TEST_SERVER_URL = `http://127.0.0.1:${port}`;
    server = spawn(join(directory, 'mockserver'), ['-address', `127.0.0.1:${port}`, '-log-level', 'ERROR'], { stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    server.stdout.on('data', chunk => { output = (output + chunk).slice(-4000); });
    server.stderr.on('data', chunk => { output = (output + chunk).slice(-4000); });
    for (let attempt = 0; ; attempt++) {
      if (server.exitCode !== null || attempt > 100) throw new Error(`Contract mock server failed to start: ${output}`);
      try {
        const response = await fetch(`${process.env.TEST_SERVER_URL}/_mockserver/health`);
        if (response.ok) break;
      } catch { /* Wait for listener. */ }
      await delay(50);
    }
  } catch (error) {
    server?.kill('SIGINT'); rmSync(directory, { recursive: true, force: true }); throw error;
  }
  return async () => {
    if (server.exitCode === null) {
      const exited = new Promise(resolve => server.once('exit', resolve));
      server.kill('SIGINT');
      const timer = setTimeout(() => server.kill('SIGKILL'), 5000);
      await exited; clearTimeout(timer);
    }
    rmSync(directory, { recursive: true, force: true });
    delete process.env.TEST_SERVER_URL;
  };
}
