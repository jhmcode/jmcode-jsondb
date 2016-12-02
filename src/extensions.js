'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fs2.default.existsSync = function existsSync(filePath) {
    try {
        _fs2.default.statSync(filePath);
    } catch (err) {
        if (err.code == 'ENOENT') return false;
    }
    return true;
};

//# sourceMappingURL=extensions.js.map