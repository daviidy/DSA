var maxNumberOfBalloons = function(text) {
    let bCount = 0, aCount = 0, lCount = 0, oCount = 0, nCount = 0
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char === 'b') {
            bCount++;
        } else if (char === 'a') {
            aCount++;
        } else if (char === 'l') {
            lCount++;
        } else if (char === 'o') {
            oCount++;
        } else if (char === 'n') {
            nCount++;
        }
    }

    // Adjust counts for 'l' and 'o' since they appear twice in "balloon"
    lCount = Math.floor(lCount / 2);
    oCount = Math.floor(oCount / 2);
    
    // Find the bottleneck
    return Math.min(bCount, aCount, lCount, oCount, nCount);
    
};