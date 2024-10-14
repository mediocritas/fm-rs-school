import os from 'os'
import Command from '../command.js';

export default class EolCommand extends Command {

    validate() {
        if (this.args.length !== 0) {
            throw new Error('args are not requested');
        }
    }

    execute() {
        return console.log(os.EOL);
    }

}