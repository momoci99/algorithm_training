function gradingStudents(grades) {
    let newGrades = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        let diff = 5 - (grade % 5);
        if (grade < 38 || diff >= 3) {
            newGrades.push(grade);
        } else {
            newGrades.push(grade + diff);
        }
    }
    return newGrades;
}

const assert = require('assert');
assert.deepEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
assert.deepEqual(gradingStudents([0, 33, 38, 98]), [0, 33, 40, 100]);
assert.deepEqual(gradingStudents([0, 40, 80, 100]), [0, 40, 80, 100]);