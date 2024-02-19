var largestUniqueNumber = function(nums) {
    let map = new Map()
    let ans = 0
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    
    for(const[key, val] of map) {
        if(key > ans && val === 1) {
            ans = key
        }
    }
    if(ans > 0) {
        return ans
    }
    return -1
};