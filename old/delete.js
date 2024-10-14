import { promises as fs } from 'fs'
import { checkFileExists } from '../fs/common-functions.js';

const remove = async () => {
    const fileToRemove = 'src/fs/files/fileToRemove.txt'
    const sourceExists = await checkFileExists(fileToRemove);
    if (!sourceExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.rm(fileToRemove);
    }
};

try {
    await remove()
} catch (err) {
    console.error(err);
}