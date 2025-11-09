/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
    const n_array = s.split('');
    function isNumSum(n) {
        let num_array = [];
        n.forEach((item, index) => {
            if (index + 1 < n.length) {
                num_array.push((Number(item) + Number(n[index + 1])) % 10)
            }
        })
        if (num_array.length !== 2) {
            return isNumSum(num_array);
        } else {
            return num_array;
        }
    }
    return isNumSum(n_array)[0] === isNumSum(n_array)[1]
};


console.log(hasSameDigits('3902'))