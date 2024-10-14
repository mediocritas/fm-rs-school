import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';
import { pipeline } from 'stream/promises';

export default class HashCommand extends Command {
    
    file = this.args[0]

    async validate() {
        const sourceExists = await checkIfExists(file);
        if (!sourceExists) {
            throw new Error('hash operation failed');
        }
    }

    async execute() {
        const hash = createHash('sha256');
        await pipeline(createReadStream(file), hash);


        console.log(hash.digest('hex'))
        const readStream = createReadStream(hash.digest('hex'))
        readStream.pipe(process.stdout)
    };
}