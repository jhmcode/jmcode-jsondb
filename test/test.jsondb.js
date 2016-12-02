'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _dataCommon = require('./dataCommon.js');

var _dataCommon2 = _interopRequireDefault(_dataCommon);

var _main = require('../src/main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Jamey McElveen on 12/1/16.
 */

var patients = void 0,
    conn = void 0,
    DATA_PATH = _path2.default.join(__dirname, 'data'),
    TEST_PATIENT = {
    "id": "00744d41-fdb0-4071-bddb-f38c75916bb2",
    "patientNo": "1234-5678",
    "firstName": "John",
    "lastName": "Doe"
};

before(function () {
    _dataCommon2.default.reset();
    conn = new _main2.default.Connection(DATA_PATH);
    patients = new _main2.default.List(conn, 'patients');
    return true;
});

after(function () {
    _dataCommon2.default.empty();
    return true;
});

describe('JsonDb', function () {

    describe('#new JsonDb()', function () {
        it('should return version if connected', function () {
            var expected = "1.0.0";
            _assert2.default.equal(expected, conn.info.version);
        });
    });

    describe('#select()', function () {
        it('should select a record', function () {
            var act = void 0,
                exp = {
                "id": "00744d41-fdb0-4071-bddb-f38c75916bb2",
                "patientNo": "1234-5678",
                "firstName": "John",
                "lastName": "Doe"
            };

            act = patients.select(exp.id);
            _assert2.default.equal(exp.firstName, act.firstName);
        });
    });

    describe('#insert()', function () {
        it('should insert a record', function () {
            var act = void 0,
                exp = void 0,
                patient = {
                "id": "00000000-fdb0-4071-bddb-f38c75916bb2",
                "patientNo": "1234-4321",
                "firstName": "Jane",
                "lastName": "Doe"
            };

            exp = patients.insert(patient);
            act = patients.select(exp.id);

            _assert2.default.equal(exp.firstName, act.firstName);
        });
    });

    describe('#update()', function () {
        it('should update a record', function () {
            var oldObj = void 0,
                newObj = void 0;

            oldObj = patients.select(TEST_PATIENT.id);
            oldObj.firstName = 'Jake';
            patients.update(oldObj);
            newObj = patients.select(TEST_PATIENT.id);

            _assert2.default.equal(newObj.firstName, "Jake");
        });
    });

    describe('#delete()', function () {
        it('should delete a record', function () {
            var obj = patients.select(TEST_PATIENT.id);
            _assert2.default.equal(true, obj != null);
            patients.delete(TEST_PATIENT.id);
            obj = patients.select(TEST_PATIENT.id);
            _assert2.default.equal(null, obj);
        });
    });
});

//# sourceMappingURL=test.jsondb.js.map