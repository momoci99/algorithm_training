//1.6 이미지를 표현하는 NxN 행렬이 있다. 이미지의 각 픽셀은 4바이트로 표현된다. 이때, 이미지를 90도 회전시키는 메서드를 작성하라. 부가적인 행렬을 사용하지 않고서도 할수있겠는가?
function solution1 (matrix) {
    //matrix
    const n = matrix.length;
    let res = new Array(n).fill().map(v => new Uint16Array(n))
    for (x = 0; x < n; x++) {
        for (y = 0; y < n; y++) {
            res[y][n-1-x] = matrix[x][y]
        }
    }
    return res
}

function solution2 (matrix) {
    const n = matrix.length
    let temp;
    for (x = 0; x < (Math.floor(n/2)); x++) {
        for (y = x; y < n - 1 - x; y++) {
            temp = [matrix[x][y], matrix[y][n-1-x], matrix[n-1-x][n-1-y], matrix[n-1-y][x]]
            //console.log(x, y, temp)
            matrix[x][y] = temp[3]
            matrix[y][n-1-x] = temp[0]
            matrix[n-1-x][n-1-y] = temp[1]
            matrix[n-1-y][x] = temp[2]
        }
    }
    return matrix
}


function test (n) {
    let matrix = new Array(n).fill().map(v => new Uint16Array(n))
    let count = 0
    for (x = 0; x < n; x++) {
        for (y = 0; y < n; y++) {
            matrix[x][y] = ++count
        }
    }
    console.log("before:")
    console.log(matrix)
    //console.log(solution1(matrix))
    console.log("after:")
    console.log(solution2(matrix))
}

function test2 () {
    const assert = require('assert')
    assert.equal([], 1);
}

test(10);

// 0,0 0,n-1
// 0,1 1,n-1
// 1,0 0,n-2

