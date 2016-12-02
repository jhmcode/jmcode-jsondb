/**
 * Created by Jamey McElveen on 12/1/16.
 */

import path from 'path';
import assert from 'assert';
import dataCommon from './dataCommon.js';
import JsonDB from '../src/main.js';

let patients, conn,
    DATA_PATH = path.join( __dirname, 'temp'),
    TEST_PATIENT = {
        "id": "00744d41-fdb0-4071-bddb-f38c75916bb2",
        "patientNo": "1234-5678",
        "firstName": "John",
        "lastName": "Doe"
    };

before(() => {
    dataCommon.reset();
    conn = new JsonDB.Connection(DATA_PATH);
    patients = new JsonDB.List(conn, 'patients');
    return true;
});

after(() => {
    dataCommon.empty();
    return true;
});

describe('JsonDb', () => {

    describe('#new JsonDb()', () => {
        it('should return version if connected', () => {
            let expected = "1.0.0";
            assert.equal(expected, conn.info.version);
        });
    });

    describe('#select()', () => {
        it('should select a record', () => {
            let act,
                exp = {
                    "id": "00744d41-fdb0-4071-bddb-f38c75916bb2",
                    "patientNo": "1234-5678",
                    "firstName": "John",
                    "lastName": "Doe"
                };

            act = patients.select(exp.id);
            assert.equal(exp.firstName, act.firstName);
        });
    });

    describe('#insert()', () => {
        it('should insert a record', () => {
            let act, exp,
                patient = {
                    "id": "00000000-fdb0-4071-bddb-f38c75916bb2",
                    "patientNo": "1234-4321",
                    "firstName": "Jane",
                    "lastName": "Doe"
                };

            exp = patients.insert(patient);
            act = patients.select(exp.id);

            assert.equal(exp.firstName, act.firstName);
        });
    });

    describe('#update()', () => {
        it('should update a record', () => {
            let oldObj, newObj;

            oldObj = patients.select(TEST_PATIENT.id);
            oldObj.firstName = 'Jake';
            patients.update(oldObj);
            newObj = patients.select(TEST_PATIENT.id);

            assert.equal(newObj.firstName, "Jake");
        });
    });

    describe('#delete()', () => {
        it('should delete a record', () => {
            let obj = patients.select(TEST_PATIENT.id);
            assert.equal(true, obj != null);
            patients.delete(TEST_PATIENT.id);
            obj = patients.select(TEST_PATIENT.id);
            assert.equal(null, obj);
        });
    });

});