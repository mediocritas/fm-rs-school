import { promises as fs } from 'fs'
import { checkFileExists } from '../fs/common-functions.js'

const rename = async () => {
    const file = 'src/fs/files/wrongFilename.txt'
    const newName = 'src/fs/files/properFilename.md'
    const sourceExists = await checkFileExists(file)
    const destinationExists = await checkFileExists(newName)
    if (!sourceExists || destinationExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.rename(file, newName)
    }
};

try {
    await rename()
} catch (err) {
    console.error(err)
}