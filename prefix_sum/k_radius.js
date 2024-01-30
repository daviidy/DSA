var getAverages = function(nums, k) {
    let n = nums.length
    let windowSize = 2*k + 1
    let averages = new Array(n).fill(-1)
    if(windowSize > n) {
        return averages
    }
    if(nums.length === 1) {
        return nums
    }
    let prefix = new Array(n + 1).fill(0)
    
    for(let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    
    // We iterate only on those indices which have at least 'k' elements in their left and right.
    // i.e. indices from 'k' to 'n - k'
    for (let i = k; i < (n - k); ++i) {
        const leftBound = i - k, rightBound = i + k;
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        const average = Math.floor(subArraySum / windowSize);
        averages[i] = average;
    }
    
    return averages
};