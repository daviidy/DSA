var reverseString = function(s) {
    helper(s);
};

function helper (s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        left ++;
        right --;
    }
    
    return s;
}