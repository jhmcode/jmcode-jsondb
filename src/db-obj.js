'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('./extensions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DBObj = function () {
    function DBObj(dbPath) {
        _classCallCheck(this, DBObj);

        this.dbPath = dbPath;
    }

    _createClass(DBObj, [{
        key: 'read',
        value: function read(objName, tableName) {
            var json = void 0,
                fullObjName = tableName ? _path2.default.join(tableName, 'data', objName) : objName,
                fileName = fullObjName + '.json',
                filePath = _path2.default.join(this.dbPath, fileName);
            if (!_fs2.default.existsSync(filePath)) {
                return null;
                // let err = tableName ? `Database object does not exist "${tableName}:${objName}"`
                //     : `Database object does not exist "${objName}"`;
                // throw new Error(err);
            }
            json = _fs2.default.readFileSync(filePath, "utf8");
            return JSON.parse(json);
        }
    }, {
        key: 'write',
        value: function write(objName, tableName, obj) {
            var json = void 0,
                fullObjName = tableName ? _path2.default.join(tableName, 'data', objName) : objName,
                fileName = fullObjName + '.json',
                filePath = _path2.default.join(this.dbPath, fileName);

            json = JSON.stringify(obj, null, 2);
            _fs2.default.writeFileSync(filePath, json, "utf8");
        }
    }, {
        key: 'delete',
        value: function _delete(objName, tableName) {
            var json = void 0,
                fullObjName = tableName ? _path2.default.join(tableName, 'data', objName) : objName,
                fileName = fullObjName + '.json',
                filePath = _path2.default.join(this.dbPath, fileName);
            _fs2.default.unlinkSync(filePath);
        }
    }]);

    return DBObj;
}();

exports.default = DBObj;

//# sourceMappingURL=db-obj.js.map