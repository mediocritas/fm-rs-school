import { promises as fs } from 'fs'
import { checkFileExists } from '../fs/common-functions.js';

const read = async () => {

    const fileToRead = 'src/fs/files/fileToRead.txt'

    const sourceExists = await checkFileExists(fileToRead)
    if (!sourceExists) {
        throw new Error('FS operation failed')
    }

    const fileData = await fs.readFile(fileToRead, 'utf-8')
    console.log(fileData)

};

try {
    await read()
}
catch (err) {
    console.error(err)
}