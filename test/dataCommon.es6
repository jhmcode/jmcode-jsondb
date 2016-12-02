/**
 * Created by Jamey McElveen on 12/1/16.
 */

import fs from 'fs';
import path from 'path';


export default {
    srcPath: path.join( __dirname, 'moc-data'),
    dstPath: path.join( __dirname, 'data'),
    _deleteFolderRecursive(path) {
        if( fs.existsSync(path) ) {
            fs.readdirSync(path).forEach((file,index) => {
                let curPath = path + "/" + file;
                if(fs.lstatSync(curPath).isDirectory()) { // recurse
                    this._deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    },
    _copyRecursiveSync(src, dest) {
        let exists = fs.existsSync(src);
        let stats = exists && fs.statSync(src);
        let isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            fs.mkdirSync(dest);
            fs.readdirSync(src).forEach(childItemName => {
                this._copyRecursiveSync(path.join(src, childItemName),
                    path.join(dest, childItemName));
            });
        } else {
            let contents;
            contents = fs.readFileSync(src, 'utf-8');
            fs.writeFileSync(dest, contents, 'utf-8');
            //fs.linkSync(src, dest);
        }
    },
    empty() {
        this._deleteFolderRecursive(this.dstPath);
    },
    reset() {
        this.empty();
        this._copyRecursiveSync(this.srcPath, this.dstPath);
    }
};
