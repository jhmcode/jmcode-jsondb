/**
 * Created by Jamey McElveen on 12/1/16.
 */

module.exports = {
    src: "patients",
    dst: "patient-patientno",
    insert(e) {
        e.insert({
            id: e.newSrc.patientNo,
            ref: e.newSrc.id
        });
    },
    update(e) {
        e.delete(e.oldSrc.patientNo);
        e.insert({
            id: e.newSrc.patientNo,
            ref: e.newSrc.id
        });
    },
    delete(e) {
        e.delete(e.oldSrc.patientNo);
    }
};
