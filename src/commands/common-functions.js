import {promises as fs } from 'fs'

export async function checkIfExists (path) {
    try {
        await fs.stat(path);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        }
    }
};
