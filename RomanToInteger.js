var romanToInt = function(s) {
    s = s.split('')
    let romanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let soma = 0
    for (let i = 0; i <= s.length - 1; i++) {
        if (romanos[s[i]] >= romanos[s[i+1]] || i == s.length - 1){
            soma += romanos[s[i]]
        } else {
            soma -= romanos[s[i]]
        }
        
    }
    return soma
};

console.log(romanToInt("MCMXCIV"))