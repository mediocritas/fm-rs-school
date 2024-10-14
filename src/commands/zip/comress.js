import { createBrotliCompress } from 'zlib';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';


export default class CompressCommand extends Command {

    source = process.cwd() + '/' +  this.args[0]
    destination = process.cwd() + '/' +  this.args[1]

    async validate() {
        if (this.args.length === 0) {
            throw new Error('args are required');
        }
        if (this.args.length < 2) {
            this.destination = process.cwd();
        }
        if (this.args.length > 2) {
            throw new Error('too many args');
        }

        const sourceExists = await checkIfExists(this.source)
        if (!sourceExists) {
            throw new Error(`no such file in ${this.source}`)
        }
        const destinationExists = await checkIfExists(this.destination)
        if (!destinationExists) {
            throw new Error(`no such path ${this.destination}`)
        } 
        const fileExists = await checkIfExists(this.destination + '/' + this.args[1] + '/' + this.args[1] + '.br')
        if (fileExists) {
            throw new Error('such file already exists')
        } 
    }

    async execute() {
        await this.validate();
        const sourceStream = createReadStream(this.source);

        const compressedFileName = path.basename(this.source) + '.br';
        const destinationPath = path.join(this.destination, compressedFileName);

        const destinationStream = createWriteStream(destinationPath);

        const brotli = createBrotliCompress();

        sourceStream.pipe(brotli).pipe(destinationStream);
    };


}