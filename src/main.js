'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Jamey McElveen on 12/1/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _dbConnection = require('./db-connection.js');

var _dbConnection2 = _interopRequireDefault(_dbConnection);

var _dbList = require('./db-list.js');

var _dbList2 = _interopRequireDefault(_dbList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonDB = function () {
    function JsonDB() {
        _classCallCheck(this, JsonDB);
    }

    _createClass(JsonDB, null, [{
        key: 'Connection',
        get: function get() {
            return _dbConnection2.default;
        }
    }, {
        key: 'List',
        get: function get() {
            return _dbList2.default;
        }
    }]);

    return JsonDB;
}();

exports.default = JsonDB;

//# sourceMappingURL=main.js.map