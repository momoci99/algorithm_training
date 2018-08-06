/*
 * Complete the birthdayCakeCandles function below.
 */
function birthdayCakeCandles(n, ar) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (ar[i] > max) {
            max = ar[i]
            count = 1;
        }
        else if (ar[i] === max) {
            count += 1;
        }
    }
    return count;
}

const assert = require('assert');
assert.equal(birthdayCakeCandles(4, [3,2,1,3]),2);
assert.equal(birthdayCakeCandles(1, [1]),1);
assert.equal(birthdayCakeCandles(0, []),0);
assert.equal(birthdayCakeCandles(3, [9,9,9]),3);
