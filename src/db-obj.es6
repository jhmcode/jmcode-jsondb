import fs from 'fs';
import path from 'path';
import './extensions.js';

export default class DBObj {
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    read(objName, tableName) {
        let json,
            fullObjName = tableName ? path.join(tableName, 'data', objName) : objName,
            fileName = fullObjName + '.json',
            filePath = path.join(this.dbPath, fileName);
        if(!fs.existsSync(filePath)) {
            return null;
            // let err = tableName ? `Database object does not exist "${tableName}:${objName}"`
            //     : `Database object does not exist "${objName}"`;
            // throw new Error(err);
        }
        json = fs.readFileSync(filePath, "utf8");
        return JSON.parse(json);
    }

    write(objName, tableName, obj) {
        let json,
            fullObjName = tableName ? path.join(tableName, 'data', objName) : objName,
            fileName = fullObjName + '.json',
            filePath = path.join(this.dbPath, fileName);

        json = JSON.stringify(obj, null, 2);
        fs.writeFileSync(filePath, json, "utf8");
    }

    delete(objName, tableName) {
        let json,
            fullObjName = tableName ? path.join(tableName, 'data', objName) : objName,
            fileName = fullObjName + '.json',
            filePath = path.join(this.dbPath, fileName);
        fs.unlinkSync(filePath);
    }
}