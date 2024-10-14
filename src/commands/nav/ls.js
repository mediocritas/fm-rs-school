import { promises as fs } from 'fs'
import Command from '../command.js';

export default class LsCommand extends Command {

    async validate() {
        if (this.args.length !== 0) {
            throw new Error('args are not required');
        }
    }


    async execute() {
        this.validate()
        const dir = process.cwd()
        const files = await fs.readdir(dir, { withFileTypes: true });
        const items = files.map((file) => ({
            Name: file.name,
            Type: file.isDirectory() ? 'directory' : 'file'
        }));

        console.log()
        return console.table(items);
    }
}