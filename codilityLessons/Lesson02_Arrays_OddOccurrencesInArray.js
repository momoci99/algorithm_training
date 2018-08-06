// Lesson02_Arrays_OddOccurrencesInArray
// https://app.codility.com/demo/results/trainingW2EQBA-NPJ/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var res = 0;
    for(i=0; i<A.length; i++){
        res = res^A[i];
    }
    return res;
}