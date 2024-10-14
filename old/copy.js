import { promises as fs } from 'fs'
import path from 'path'
import { checkFileExists } from '../fs/common-functions.js'

const copy = async () => {
    const sourceFiles = 'src/fs/files';
    const newDestination = 'src/fs/files_copy';

    const sourceExists = await checkFileExists(sourceFiles);
    if (!sourceExists) {
        throw new Error('FS operation failed');
    }

    const destinationExists = await checkFileExists(newDestination);
    if (destinationExists) {
        throw new Error('FS operation failed');
    } else {
        await fs.mkdir(newDestination, { recursive: true });
    }

    const items = await fs.readdir(sourceFiles);

    for (let item of items) {
        const sourcePath = path.join(sourceFiles, item);
        const destinationPath = path.join(newDestination, item);

        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
            await fs.copyFile(sourcePath, destinationPath);
        } else if (stats.isDirectory()) {
            await copyFolderRecursive(sourcePath, destinationPath);
        }
    }
};

try {
    await copy()
} catch (err) {
    console.error(err);
}
