import os from 'os'
import Command from '../command.js';

export default class ArchCommand extends Command {

    validate() {
        if (this.args.length !== 0) {
            throw new Error('args are not requested');
        }
    }

    execute () {
        return console.log(os.arch());
    }
}