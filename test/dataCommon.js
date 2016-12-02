'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jamey McElveen on 12/1/16.
 */

exports.default = {
    srcPath: _path2.default.join(__dirname, 'moc-data'),
    dstPath: _path2.default.join(__dirname, 'data'),
    _deleteFolderRecursive: function _deleteFolderRecursive(path) {
        var _this = this;

        if (_fs2.default.existsSync(path)) {
            _fs2.default.readdirSync(path).forEach(function (file, index) {
                var curPath = path + "/" + file;
                if (_fs2.default.lstatSync(curPath).isDirectory()) {
                    // recurse
                    _this._deleteFolderRecursive(curPath);
                } else {
                    // delete file
                    _fs2.default.unlinkSync(curPath);
                }
            });
            _fs2.default.rmdirSync(path);
        }
    },
    _copyRecursiveSync: function _copyRecursiveSync(src, dest) {
        var _this2 = this;

        var exists = _fs2.default.existsSync(src);
        var stats = exists && _fs2.default.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            _fs2.default.mkdirSync(dest);
            _fs2.default.readdirSync(src).forEach(function (childItemName) {
                _this2._copyRecursiveSync(_path2.default.join(src, childItemName), _path2.default.join(dest, childItemName));
            });
        } else {
            var contents = void 0;
            contents = _fs2.default.readFileSync(src, 'utf-8');
            _fs2.default.writeFileSync(dest, contents, 'utf-8');
            //fs.linkSync(src, dest);
        }
    },
    empty: function empty() {
        this._deleteFolderRecursive(this.dstPath);
    },
    reset: function reset() {
        this.empty();
        this._copyRecursiveSync(this.srcPath, this.dstPath);
    }
};

//# sourceMappingURL=dataCommon.js.map