import { promises as fs } from 'fs'
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';

export default class RnCommand extends Command {
    
    oldName = process.cwd() + '/' +  this.args[0]
    newName = process.cwd() + '/' +  this.args[1]
    
    async validate() {
        if (this.args.length === 0) {
            throw new Error('args expected');
        }
        if (this.args.length !== 2) {
            throw new Error('two args expected.');
        }

        const sourceExists = await checkIfExists(this.oldName)
        if (!sourceExists) {
            throw new Error('no such file')
        }
        const destinationExists = await checkIfExists(this.newName)
        if (destinationExists) {
            throw new Error('such file already exists')
        }
    }

    async execute() {
        await this.validate()

        await fs.rename(this.oldName, this.newName)

    }

}