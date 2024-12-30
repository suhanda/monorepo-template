import path from 'node:path';
import fs from 'node:fs';

const dirRoot = path.resolve(process.cwd());

export function getAllApps() {
  const appsDir = path.resolve(dirRoot, './apps');
  const apps = fs.readdirSync(appsDir);
  return {
    appNames: apps.filter((app) => !app.startsWith('_')),
    appsDir,
  };
}

export function getPackagesDir() {
  const packagesDir = path.resolve(dirRoot, './packages');

  const packages = fs.readdirSync(packagesDir);
  return {
    packagesName: packages.filter((pkg) => !pkg.startsWith('_')),
    packagesDir,
  };
}
