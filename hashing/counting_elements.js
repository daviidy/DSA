var countElements = function(arr) {
    let result = 0
    const hash = new Map()
    for(let i = 0; i < arr.length; i++) {
        if(hash.has(arr[i])) {
            hash.get(arr[i]).push(i)
        }
        hash.set(arr[i], [i])
    }
    for(let i = 0; i < arr.length; i++) {
        if(hash.has(arr[i] + 1)) {
            result += 1
        }
    }
    
    return result
};