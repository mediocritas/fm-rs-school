import fsCommands from './fs/index.js';
import hashCommands from './hash/index.js';
import navCommands from './nav/index.js'
import osCommands from './os/index.js'
import zipCommands from './zip/index.js';

export const commandMap = {
    'cat': fsCommands.CatCommand,
    'add': fsCommands.AddCommand,
    'rn': fsCommands.RnCommand,
    'cp': fsCommands.CpCommand,
    'mv': fsCommands.MvCommand,
    'rm': fsCommands.RmCommand,
    "hash": hashCommands.HashCommand,
    "ls": navCommands.LsCommand,
    "cd": navCommands.CdCommand,
    "up": navCommands.UpCommand,
    "compress": zipCommands.CompressCommand,
    "decompress": zipCommands.DecompressCommand,
    "--eol": osCommands.EolCommand,
    "--cpus": osCommands.CpusCommand,
    "--homedir": osCommands.HomedirCommand,
    "--username": osCommands.UsernameCommand,
    "--architecture": osCommands.ArchCommand
};
