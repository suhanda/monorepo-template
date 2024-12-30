import path from 'path';
import url from 'node:url';
import fs from 'node:fs';
import { Command } from 'commander';

import Runners from './runners.js';
import Prepare from './commands/prepare.js';
import { logger } from './utils/logger.js';
import BuildProductions from './commands/build-production.js';

const runner = new Runners();
runner.registerRunner('prepare', new Prepare());
runner.registerRunner('dev-prepare', new Prepare(true));
runner.registerRunner('build-productions', new BuildProductions());

const packageJson = JSON.parse(
  fs.readFileSync(
    path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      '../package.json',
    ),
    { encoding: 'utf-8' },
  ),
);

export async function main(runnerName: string) {
  const program = new Command()

    .name('cli')
    .description('A simple CLI template')
    .version(packageJson.version || '0.0.0');

  await runner.run(program, runnerName);

  // proper exit code for signals and print the code before exiting
  process.on('SIGINT', (signal) => {
    logger.warn(`\nReceived ${signal}`);
    runner.cleanup();
    process.exit(128);
  });

  process.on('SIGTERM', (signal) => {
    logger.warn(`\nReceived ${signal}`);
    runner.cleanup();
    process.exit(128);
  });
}
