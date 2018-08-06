function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    var res = v1 - v2 > 0 && (x2 - x1) % (v1 - v2) === 0;
    return res ? "YES" : "NO";
} 