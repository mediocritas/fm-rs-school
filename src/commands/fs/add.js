import { createReadStream, promises as fs } from 'fs'
import { checkIfExists } from '../common-functions.js';
import Command from '../command.js';

export default class AddCommand extends Command{

    file = this.args[0]

    async validate() {

        if (this.args.length === 0) {
            throw new Error('args are required');
        }
        if (this.args.length !== 1) {
            throw new Error('one arg expected');
        }
        const sourceExists = await checkIfExists(this.file);
        if (sourceExists) {
            throw new Error('such file already exists');
        }
    }

    async execute () {

        await fs.writeFile(this.file, '')
    }

}