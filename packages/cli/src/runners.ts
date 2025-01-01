import { Command } from 'commander';
import { RootRunner, Runner } from './types.js';
import loadingAnimation from './utils/loader.js';

export default class Runners implements RootRunner {
  private runners: Record<string, Runner> = {};

  registerRunner(name: string, runner: Runner) {
    this.runners[name] = runner;
  }

  getRunner(name: string) {
    return this.runners[name];
  }

  async run(program: Command, runnerName: string) {
    const runner = this.getRunner(runnerName);

    if (!runner) {
      throw new Error(`Runner ${runnerName} not found`);
    }

    runner.setRootRunner(this);
    await runner.setup(program);
    const loader = loadingAnimation(`Running ${runner}`);
    await runner.run();

    clearInterval(loader);
  }

  cleanup() {
    for (const runner of Object.values(this.runners)) {
      runner.cleanup();
    }
  }
}
