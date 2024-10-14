import readline from 'readline';
import { handleCommand } from './command-handlers/cl-handler.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const prompt = async () => {

    console.log(`You are currently in ${process.cwd()}`)
    rl.question('> ', (answer) => {
        if (answer.trim() === '.exit') {
            rl.close();
        } 
        handleCommand(answer);
        prompt();
    });
};

const start = async () => {
    const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1] || 'User';

    console.log(`Welcome to the File Manager, ${username}!`)

    await prompt();

    rl.on('close', () => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit(0);
    });

}

start();