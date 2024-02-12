var checkIfPangram = function(sentence) {
    const array = sentence.split("")
    const letters = new Set(array)
    if(letters.size === 26) {
        return true
    }
    return false
}