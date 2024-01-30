var longestOnes = function(nums, k) {

    let left = 0
    let numberOfZeros = 0
    let answer = 0
    for (let right = 0; right < nums.length; right ++){
        if(nums[right] === 0 && numberOfZeros <= k) {
              numberOfZeros += 1
        }
        while(numberOfZeros > k) {
            numberOfZeros = nums[left] == 0 ? numberOfZeros - 1 : numberOfZeros;
            left++
        }
        answer = Math.max(answer, right - left + 1)
    }

    return answer

};