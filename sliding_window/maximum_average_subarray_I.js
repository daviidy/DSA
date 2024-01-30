var findMaxAverage = function(nums, k) {
    let answer = Number.NEGATIVE_INFINITY;
    let curr = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        curr += nums[right]
        // get the k elements of the subarray
        while(right - left + 1 > k) {
            curr -= nums[left];
            left++
        }
        if(right - left + 1 === k) {
            const avg = (curr / k).toFixed(5);
            answer = Math.max(answer, avg)
        }
    }

    return answer;

};