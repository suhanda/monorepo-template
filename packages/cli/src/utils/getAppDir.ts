import path from 'path';

export function getAppDir(appName: string) {
  return path.resolve(process.cwd(), `./apps/${appName}`);
}
