/**
 * Created by Jamey McElveen on 12/1/16.
 */

import './extensions';
import path from 'path';
import DBObj from './db-obj';

export default class DBConnection {
    constructor(dbPath) {
        let err = `Connection to database "${dbPath}" failed.`;
        this.dbPath = dbPath;
        if(!path.existsSync(this.dbPath)) { throw new Error(err); }
        this.db = new DBObj(this.dbPath);
        if(!this.db) { throw new Error(err); }
        this.info = this.db.read('system');
        if(!this.info) { throw new Error(err); }
    }
}