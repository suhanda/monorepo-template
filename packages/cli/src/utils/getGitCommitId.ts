import fs from 'fs-extra';

import path from 'node:path';
import { logger } from './logger.js';

export default async function getGitCommitId() {
  const rootDir = process.cwd();
  const gitFolder = path.resolve(rootDir, '.git');

  const revBuffer = await fs.readFile(path.resolve(gitFolder, 'HEAD'));
  const rev = revBuffer.toString().trim();
  logger.info('commit', rev);

  if (rev.indexOf(':') === -1) {
    return rev;
  } else {
    const commitBuffer = await fs.readFile(
      path.resolve('.git/' + rev.substring(5)),
    );

    const commitId = commitBuffer.toString().trim().substring(0, 7);
    logger.info('commit id: ', commitId);
    return commitId;
  }
}
