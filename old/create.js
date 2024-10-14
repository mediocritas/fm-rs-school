import { promises as fs } from 'fs'
import { checkFileExists } from '../fs/common-functions.js'

const create = async () => {
    const newFile = 'src/fs/files/fresh.txt';
    const text = 'I am fresh and young';

    const sourceExists = await checkFileExists(newFile);
    if (sourceExists) {
        throw new Error('FS operation failed');
    } else {
        await fs.writeFile(newFile, text)
    }
};

try {
    await create()
} catch (err) {
    console.error(err)
};