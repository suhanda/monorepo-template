import { Command } from 'commander';
import fs from 'node:fs';
import fsExtra from 'fs-extra';
import path from 'path';
import archiver from 'archiver';
import { RootRunner, Runner } from '../types.js';
import { logger } from '../utils/logger.js';
import loadingAnimation, { stopLoadingAnimation } from '../utils/loader.js';
import { getAllApps, getPackagesDir } from '../utils/getAllApps.js';
import moveFolder, {
  destinationGenerator,
} from '../utils/moveFolderWithCounter.js';
import getGitCommitId from '../utils/getGitCommitId.js';

const defaultOutputPath = path.resolve(process.cwd(), 'dist');

const filesAndDirsToCopyOnAppsAndPackagesDir = [
  '.env',
  'package.json',
  'pnpm-lock.yaml',
  'public',
  'dist',
  '.next',
  'bin',
];

async function* generateFilesAndDirsToCopy(
  appNames: string[],
  appsDir: string,
  filesAndDirsToCopy: string[],
  outputPath: string,
  isPackages?: boolean,
) {
  for (const appName of appNames) {
    const appDir = path.resolve(appsDir, appName);
    for (const fileOrDir of filesAndDirsToCopy) {
      const fileOrDirPath = path.resolve(appDir, fileOrDir);
      if (fs.existsSync(fileOrDirPath)) {
        const fileOrDirOut = path.resolve(
          outputPath,
          isPackages ? 'packages' : 'apps',
          appName,
          fileOrDir,
        );
        yield { fileOrDirPath, fileOrDirOut };
      }
    }
  }
}

export default class BuildProductions implements Runner {
  private program: Command | undefined;
  private outputPath: string | undefined;
  private appNames: string[] = [];
  private appsDir: string | undefined;

  private packagesDir: string | undefined;
  private packagesName: string[] = [];

  private archive: boolean = false;

  processArchiveOts() {
    const options = this.program?.opts();
    if (options?.archive) {
      this.archive = true;
    }
  }

  async processOutputPath() {
    // if default output path not exists, create it the folder
    if (!this.program?.opts().out) {
      logger.error(`Output directory not found, creating ${defaultOutputPath}`);
      fs.mkdirSync(defaultOutputPath, { recursive: true });
      this.outputPath = defaultOutputPath;
      return;
    }

    this.outputPath = path.resolve(process.cwd(), this.program.opts().out);
    if (fs.existsSync(this.outputPath)) {
      await moveFolder(this.outputPath, `${this.outputPath}-old`);
    }
    await fsExtra.mkdir(this.outputPath, { recursive: true });

    return;
  }

  processApps() {
    const { appNames, appsDir } = getAllApps();
    this.appsDir = appsDir;
    const options = this.program?.opts();
    if (options?.apps) {
      this.appNames = String(options.apps).split(',');
      return;
    }
    this.appNames = appNames;
  }

  processPackages() {
    const { packagesDir, packagesName } = getPackagesDir();
    this.packagesDir = packagesDir;
    this.packagesName = packagesName;
  }

  async copyRootPackageJson() {
    if (!this.outputPath) throw new Error('Output path not found');

    const rootPackageJson = path.resolve(process.cwd(), 'package.json');
    const rootPackageJsonDist = path.resolve(this.outputPath, 'package.json');
    if (!fs.existsSync(rootPackageJsonDist)) {
      await fsExtra.copy(rootPackageJson, rootPackageJsonDist);
      logger.success(
        `Copying ${rootPackageJson} to ${rootPackageJsonDist} succeed`,
      );
    }
  }

  async copyPnpmLock() {
    if (!this.outputPath) throw new Error('Output path not found');

    const pnpmLock = path.resolve(process.cwd(), 'pnpm-lock.yaml');
    const pnpmLockDist = path.resolve(this.outputPath, 'pnpm-lock.yaml');
    if (!fs.existsSync(pnpmLockDist)) {
      await fsExtra.copy(pnpmLock, pnpmLockDist);
      logger.success(`Copying ${pnpmLock} to ${pnpmLockDist} succeed`);
    }
  }

  async copyPnpmWorkspace() {
    if (!this.outputPath) throw new Error('Output path not found');

    const pnpmWorkspace = path.resolve(process.cwd(), 'pnpm-workspace.yaml');
    const pnpmWorkspaceDist = path.resolve(
      this.outputPath,
      'pnpm-workspace.yaml',
    );
    if (!fs.existsSync(pnpmWorkspaceDist)) {
      await fsExtra.copy(pnpmWorkspace, pnpmWorkspaceDist);
      logger.success(
        `Copying ${pnpmWorkspace} to ${pnpmWorkspaceDist} succeed`,
      );
    }
  }

  getProgramOptions() {
    return this.program?.opts();
  }

  async copyFilesAndDirsOnAppsDir() {
    try {
      const { appNames, appsDir, outputPath } = this;

      if (!appNames || !appsDir || !outputPath) {
        throw new Error('appNames, appsDir, or outputPath not found');
      }

      for await (const {
        fileOrDirPath,
        fileOrDirOut,
      } of generateFilesAndDirsToCopy(
        appNames,
        appsDir,
        filesAndDirsToCopyOnAppsAndPackagesDir,
        outputPath,
      )) {
        if (!fs.existsSync(fileOrDirOut)) {
          await fsExtra.copy(fileOrDirPath, fileOrDirOut);
          logger.success(`Copying ${fileOrDirPath} to ${fileOrDirOut} succeed`);
        }
      }
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error));
    }
  }

  async copyFilesAndDirsOnPackageDir() {
    try {
      const { packagesDir, packagesName, outputPath } = this;
      if (!packagesDir || !packagesName || !outputPath) {
        throw new Error('packagesDir, packagesName, or outputPath not found');
      }

      for await (const {
        fileOrDirPath,
        fileOrDirOut,
      } of generateFilesAndDirsToCopy(
        packagesName,
        packagesDir,
        filesAndDirsToCopyOnAppsAndPackagesDir,
        outputPath,
        true,
      )) {
        if (!fs.existsSync(fileOrDirOut)) {
          await fsExtra.copy(fileOrDirPath, fileOrDirOut);
          logger.success(`Copying ${fileOrDirPath} to ${fileOrDirOut} succeed`);
        }
      }
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error));
    }
  }

  async setup(program: Command) {
    program.option('--out <output_dir>', 'output directory', defaultOutputPath);
    program.option('--apps <apps...>', 'output directory');
    program.option('--archive', 'archive the output directory');
    program.parse(process.argv);
    this.program = program;

    await this.processOutputPath();
    this.processApps();
    this.processPackages();
    this.processArchiveOts();
  }

  archiveOutput(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        if (!this.outputPath) throw new Error('Output path not found');
        const archive = archiver('tar');
        const commitId = await getGitCommitId();
        const dest = await destinationGenerator(
          `${this.outputPath}-${commitId}`,
          '.tar.gz',
        );
        const output = fs.createWriteStream(dest);

        archive.pipe(output);
        archive.directory(this.outputPath, false);
        archive.finalize();

        output.on('close', () => {
          logger.success(`Archive ${dest} created`);
          resolve();
        });

        archive.on('error', function (err) {
          logger.error(err.message);
          reject(err);
        });
      } catch (error) {
        logger.error(error instanceof Error ? error.message : String(error));
        reject(error);
      }
    });
  }

  async run() {
    try {
      if (!this.outputPath) throw new Error('Output path not found');
      loadingAnimation('Preparing for production...');
      await Promise.all([
        this.copyFilesAndDirsOnAppsDir(),
        this.copyFilesAndDirsOnPackageDir(),
        this.copyRootPackageJson(),
        this.copyPnpmLock(),
        this.copyPnpmWorkspace(),
      ]);

      if (this.archive) {
        await this.archiveOutput();
        logger.success(`Archiving output directory ${this.outputPath} succeed`);
        await fsExtra.remove(this.outputPath);
        logger.success(`Removing output directory ${this.outputPath} succeed`);
      }

      loadingAnimation('Preparing for production succeed');
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error));
    } finally {
      setTimeout(stopLoadingAnimation, 200);
    }
  }
  setRootRunner(rootRunner: RootRunner) {}
  cleanup() {}
}
