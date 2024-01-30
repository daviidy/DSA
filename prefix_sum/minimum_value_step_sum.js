var minStartValue = function(nums) {
    let value = 1
    while(isItStartValue(value, nums) === false) {
        value ++
    }  
    return value
};

const isItStartValue = (value, arr) => {
    let prefix = []
    let ans = value + arr[0]
    if(ans >= 1) {
        prefix.push(ans)
    }
    for(let i = 1; i < arr.length; i++) {
        let curr = prefix[prefix.length - 1] + arr[i]
        if(curr >= 1) {
            prefix.push(curr)
        } else {
            return false;
        }
    }
    return true
}