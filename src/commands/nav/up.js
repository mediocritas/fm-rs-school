import os from 'os'
import Command from '../command.js';

export default class UpCommand extends Command {

    validate() {
        if (this.args.length !== 0) {
            throw new Error('no args are required');
        }

        if (os.homedir() == process.cwd()) {
            throw new Error('you are in homedir. no turning back!')
        }
    }

    async execute() {
        this.validate()
        return process.chdir('..')
    }

}