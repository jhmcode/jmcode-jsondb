/**
 * Created by Jamey McElveen on 12/1/16.
 */

import DBConnection from './db-connection.js';
import DBList from './db-list.js';

export default class JsonDB {
    static get Connection() {
        return DBConnection;
    }

    static get List() {
        return DBList;
    }
}