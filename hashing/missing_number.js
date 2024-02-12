var missingNumber = function(nums) {
    const numbers = new Set(nums)
    for(let i = 0; i <= nums.length; i++){
        if(!numbers.has(i)) {
            return i
        }
    }
};