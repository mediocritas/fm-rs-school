
export default class Command {

    constructor(...args) {
        this.args = args.map((arg) => arg.toString());
    }

    validate() { }

    execute() { }

}