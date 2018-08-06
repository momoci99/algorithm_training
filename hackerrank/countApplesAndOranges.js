function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let d = a + apples[i];
        if (s <= d && d <= t) {
            appleCount += 1;
        }
    }
    console.log(appleCount);

    for (let i = 0; i < oranges.length; i++) {
        let d = b + oranges[i];
        if (s <= d && d <= t) {
            orangeCount += 1;
        }
    }
    console.log(orangeCount);
}


countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])