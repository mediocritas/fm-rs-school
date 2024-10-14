import { promises as fs } from 'fs'
import path from 'path'
import { checkFileExists } from '../fs/common-functions.js';

const list = async () => {

    const sourceFiles = 'src/fs/files'
    const sourceExists = await checkFileExists(sourceFiles)
    if (!sourceExists) {
        throw new Error('FS operation failed')
    }

    const items = await fs.readdir(sourceFiles);

    for (let item of items) {
        const sourcePath = path.join(sourceFiles, item);

        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
            console.log(item)
        }
    }
};

try {
    await list()
} catch (err) {
    console.error(err)
}