import fs from 'fs-extra';
import path from 'node:path';
import { logger } from './logger.js';

export async function destinationGenerator(
  dest: string,
  ext?: string,
): Promise<string> {
  let counter = 1;
  let newDest = `${dest}${ext || ''}`;

  // Check if destination folder exists and rename it with counter suffix if necessary
  while (await fs.pathExists(newDest)) {
    newDest = `${dest}_${counter}${ext || ''}`;
    counter++;
  }

  return newDest;
}

export default async function moveFolder(
  src: string,
  dest: string,
): Promise<void> {
  // Move the folder to the new destination
  const newDest = await destinationGenerator(dest);
  try {
    await fs.move(src, newDest);
    logger.warn(`Folder ${src} moved to ${newDest}`);
  } catch (err) {
    if (err instanceof Error) {
      logger.error(`Error moving folder: ${err.message}`);
    } else {
      logger.error('Error moving folder:', String(err));
    }
  }
}
