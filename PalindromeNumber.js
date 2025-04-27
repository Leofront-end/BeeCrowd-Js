var isPalindrome = function(x) {
    x = x.toString().split('')
    let inverso = []
    for (let i = x.length-1; i >= 0; i--){
        inverso.push(x[i])
    }
    x = x.join('')
    inverso = inverso.join('')
    return x == inverso
};

console.log(isPalindrome(121));