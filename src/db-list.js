"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Jamey McElveen on 12/1/16.
 */

var DbList = function () {
    function DbList(conn, listName) {
        _classCallCheck(this, DbList);

        this.conn = conn;
        this.db = this.conn.db;
        this.listName = listName;
    }

    _createClass(DbList, [{
        key: "select",
        value: function select(id) {
            return this.db.read(id, this.listName);
        }
    }, {
        key: "insert",
        value: function insert(obj) {
            var id = obj.id;
            this.db.write(id, this.listName, obj);
            return obj;
        }
    }, {
        key: "update",
        value: function update(obj) {
            var id = obj.id;
            this.db.write(id, this.listName, obj);
            return obj;
        }
    }, {
        key: "delete",
        value: function _delete(id) {
            this.db.delete(id, this.listName);
        }
    }]);

    return DbList;
}();

exports.default = DbList;

//# sourceMappingURL=db-list.js.map