/**
 * Created by Jamey McElveen on 12/1/16.
 */

export default class DbList {
    constructor(conn, listName) {
        this.conn = conn;
        this.db = this.conn.db;
        this.listName = listName;
    }

    select(id) {
        return this.db.read(id, this.listName);
    }

    insert(obj) {
        let id = obj.id;
        this.db.write(id, this.listName, obj);
        return obj;
    }

    update(obj) {
        let id = obj.id;
        this.db.write(id, this.listName, obj);
        return obj;
    }

    delete(id) {
        this.db.delete(id, this.listName);
    }

}