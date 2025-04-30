var findNumbers = function(nums) {
    let total = 0
    for (let numero of nums) {
        let texto = numero.toString()
        if (texto.length % 2 == 0) { total++}
    }
    return total
};

console.log(findNumbers([555,901,482,1771]))