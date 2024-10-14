import { createReadStream } from 'fs';
import { createHash } from 'crypto';


const calculateHash = async (file) => {
    const hash = createHash('sha256');
    const input = createReadStream(file);

    console.log(hash.digest('hex'))
};

const filePath = 'src/hash/files/fileToCalculateHashFor.txt';

try {
    await calculateHash(filePath)
} catch (err) {
    console.error(err)
}