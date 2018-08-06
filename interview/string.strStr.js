/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = haystack.length;
    const nLen = needle.length;
    if (nLen === 0) return 0;
    let nIdx = 0;
    for (let i = 0; i < len - nLen + 1; i += 1) {
        if (haystack[i] === needle[0]) {
            let j = 1;
            while (j < nLen) {
                if (haystack[i + j] !== needle[j]) break;
                j += 1
            }
            if (j === nLen) return i;
        }
    }
    return -1;
};


const assert = require('assert');
assert.equal(strStr("abced", "a"), 0);
assert.equal(strStr("abced", "ed"), 3);
assert.equal(strStr("abced", "d"), 4);
assert.equal(strStr("mississippi", "issip"), 4);
assert.equal(strStr("", ""), 0);
assert.equal(strStr("as", ""), 0);
