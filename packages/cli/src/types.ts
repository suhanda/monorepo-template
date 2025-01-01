import { Command } from 'commander';

/**
 * Interface representing a runner responsible for executing a specific task or command.
 */
export interface Runner {
  /**
   * Runs the task or command.
   * @returns {Promise<void>} A promise that resolves when the task is complete.
   */
  run: () => Promise<void>;

  /**
   * Sets up the runner with the given command program.
   * @param {Command} program - The command program to set up the runner with.
   */
  setup: (program: Command) => void;

  /**
   * Sets the root runner for the runner.
   * @param {RootRunner} rootRunner - The root runner to set.
   */
  setRootRunner: (rootRunner: RootRunner) => void;

  /**
   * Performs any necessary cleanup after the task or command has been executed.
   */
  cleanup: () => void;
}

/**
 * Interface representing a root runner responsible for managing multiple runners.
 */
export interface RootRunner {
  /**
   * Registers a runner with the given name.
   * @param {string} name - The name of the runner.
   * @param {Runner} runner - The runner to register.
   */
  registerRunner: (name: string, runner: Runner) => void;

  /**
   * Retrieves a runner by its name.
   * @param {string} name - The name of the runner to retrieve.
   * @returns {Runner | undefined} The runner if found, otherwise undefined.
   */
  getRunner: (name: string) => Runner | undefined;

  /**
   * Runs the specified runner with the given command program.
   * @param {Command} program - The command program to run the runner with.
   * @param {string} runnerName - The name of the runner to run.
   * @returns {Promise<void>} A promise that resolves when the runner's task is complete.
   */
  run: (program: Command, runnerName: string) => Promise<void>;

  /**
   * Performs any necessary cleanup after all runners have been executed.
   */
  cleanup: () => void;
}
