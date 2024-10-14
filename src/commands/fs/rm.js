import { promises as fs } from 'fs'
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';

export default class RmCommand extends Command {

    file = process.cwd() + '/' + this.args[0]

    async validate() {
        if (this.args.length === 0) {
            throw new Error('args expected');
        }
        if (this.args.length !== 1) {
            throw new Error('one arg expected');
        }
        
        const sourceExists = await checkIfExists(this.file);
        if (!sourceExists) {
            throw new Error('no such file');
        }
    }

    async execute() {
        await this.validate()
        await fs.rm(this.file)
    }

}