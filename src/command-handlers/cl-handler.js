import { commandMap } from '../commands/actual-commands.js';


export const handleCommand = async (command) => {
    const [cmd, ...args] = command.trim().split(' ');

    const CommandClass = commandMap[cmd];

    if (!CommandClass) {
        console.error('Invalid input');
        return;
    }

    const currentCommand = new CommandClass(...args);
    try {
        await currentCommand.execute();
    } catch (err) {
        console.error('Operation failed. Error: ' + err.message)
    }

}
