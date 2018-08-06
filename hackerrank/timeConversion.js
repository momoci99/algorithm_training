/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let isPM = s.slice(-2) === 'PM';
    let hour = parseInt(s.slice(0, 2));
    if (!isPM && hour === 12) hour = 0;
    if (isPM && hour < 12) hour += 12;
    return (hour < 10 ? '0' + hour : hour) + s.slice(2, -2);
}
const assert = require('assert');
assert(timeConversion('07:05:45PM'), '19:05:45');
assert(timeConversion('07:05:45AM'), '07:05:45');
assert(timeConversion('00:05:45AM'), '00:05:45');
assert(timeConversion('00:00:00AM'), '00:00:00');
assert(timeConversion('12:00:00AM'), '00:00:00');
assert(timeConversion('12:00:00PM'), '12:00:00');