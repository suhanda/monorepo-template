import chalk from 'chalk';

export const logger = {
  log: console.log,
  info: async (...msg: string[]) => {
    console.log(chalk.blue(...msg));
  },
  success: async (...msg: string[]) => {
    console.log(chalk.green(...msg));
  },
  warn: async (...msg: string[]) => {
    console.log(chalk.yellow(...msg));
  },
  error: async (...msg: string[]) => {
    console.log(chalk.red(...msg));
  },
} as const;
