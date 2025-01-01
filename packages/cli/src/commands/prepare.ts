import path from 'path';
import fs from 'node:fs';
import chalk from 'chalk';
import { logger } from '../utils/logger.js';
import { RootRunner, Runner } from '../types.js';
import { Command } from 'commander';
import { getAllApps } from '../utils/getAllApps.js';

const envExampleFileName = '.env.example';
const envFilename = '.env';

export default class Prepare implements Runner {
  private program: Command | undefined;
  private isDev?: boolean;

  constructor(isDev?: boolean) {
    this.isDev = isDev;
  }

  setRootRunner(rootRunner: RootRunner) {}

  setup(program: Command) {
    program.option('--apps <name...>', 'The apps to build');
    program.parse(process.argv);
    this.program = program;
  }

  getProgramOptions() {
    return this.program?.opts();
  }

  async run() {
    const finalEnv = this.isDev
      ? `${envFilename}.development.local`
      : envFilename;
    const { appNames, appsDir } = getAllApps();

    for (const appName of appNames) {
      const appDir = path.resolve(appsDir, appName);
      const envExample = path.resolve(appDir, envExampleFileName);
      if (!fs.existsSync(envExample)) {
        logger.error(`.env.example not found in Apps ${appName}`);
        continue;
      }
      // copy .env.example to .env if .env not exists
      if (fs.existsSync(path.resolve(appDir, finalEnv))) {
        logger.warn(
          `The ${finalEnv} file in Apps ${appName} already exists, skipping...`,
        );
        continue;
      }

      fs.copyFileSync(envExample, path.resolve(appDir, finalEnv));

      logger.success(
        `Successfully Copied!.\nPlease make sure value in the ${finalEnv} file in ${appName} is correct!`,
      );
    }
  }
  cleanup() {}
}
