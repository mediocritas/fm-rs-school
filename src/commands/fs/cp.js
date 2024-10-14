import { createReadStream, createWriteStream, promises as fs } from 'fs'
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';

export default class CpCommand extends Command {

    file = process.cwd() + '/' +  this.args[0]
    destination = process.cwd() + '/' +  this.args[1]

    async validate() {
        if (this.args.length === 0) {
            throw new Error('args are required');
        }
        if (this.args.length !== 2) {
            throw new Error(`two args expected`);
        }

        const sourceExists = await checkIfExists(this.file)
        if (!sourceExists) {
            throw new Error(`no such file in ${this.file}`)
        }
        const destinationExists = await checkIfExists(this.destination)
        if (!destinationExists) {
            throw new Error(`no such path ${this.destination}`)
        } 
        const fileExists = await checkIfExists(this.destination + '/' + this.args[0])
        if (fileExists) {
            throw new Error('such file already exists')
        } 
    }

    async execute() {
        await this.validate()

        const readStream = createReadStream(this.file)
        const writeStream = createWriteStream(this.destination + '/' + this.args[0]);
        readStream.pipe(writeStream)
    }
}