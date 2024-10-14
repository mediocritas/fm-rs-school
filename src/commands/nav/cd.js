import Command from '../command.js';
import { checkIfExists } from '../common-functions.js';

export default class CdCommand extends Command{

    path = this.args[0]

    async validate() {
        if (this.args.length === 0) {
            throw new Error('arg is required');
        }
        if (this.args.length !== 1) {
            throw new Error('one arg expected.');
        }

        const sourceExists = await checkIfExists(this.path)
        if (!sourceExists) {
            throw new Error('no such path')
        }
    }

    async execute () {
        this.validate()
        return process.chdir(this.path.toString())
    }
}