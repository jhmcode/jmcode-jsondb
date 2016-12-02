import fs from 'fs';
import path from 'path';

fs.existsSync = function existsSync(filePath) {
    try{
        fs.statSync(filePath);
    } catch(err) {
        if(err.code == 'ENOENT') return false;
    }
    return true;
};

path.existsSync = function existsSync(dirPath) {
    try {
        let stats = fs.lstatSync(dirPath);
        return stats.isDirectory();
    } catch (e) {
        return false;
    }
};
