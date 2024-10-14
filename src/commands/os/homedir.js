import os from 'os'
import Command from '../command.js';

export default class HomedirCommand extends Command {

    validate() {
        if (this.args.length !== 0) {
            throw new Error('args are not requested');
        }
    }

    execute() {
        this.validate()
        return console.log(os.homedir());
    }
}