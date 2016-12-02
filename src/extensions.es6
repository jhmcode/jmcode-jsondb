import fs from 'fs';

fs.existsSync = function existsSync(filePath) {
    try{
        fs.statSync(filePath);
    }catch(err){
        if(err.code == 'ENOENT') return false;
    }
    return true;
};