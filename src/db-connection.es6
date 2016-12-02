/**
 * Created by Jamey McElveen on 12/1/16.
 */

import DBObj from './db-obj.js';

export default class DBConnection {
    constructor(dbPath) {
        this.dbPath = dbPath;
        this.db = new DBObj(this.dbPath);
        this.info = this.db.read('system');
    }
}