'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbObj = require('./db-obj.js');

var _dbObj2 = _interopRequireDefault(_dbObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by Jamey McElveen on 12/1/16.
                                                                                                                                                           */

var DBConnection = function DBConnection(dbPath) {
    _classCallCheck(this, DBConnection);

    this.dbPath = dbPath;
    this.db = new _dbObj2.default(this.dbPath);
    this.info = this.db.read('system');
};

exports.default = DBConnection;

//# sourceMappingURL=db-connection.js.map