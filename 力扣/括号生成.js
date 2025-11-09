/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    function backTrack(curr, left, right) {
        if (curr.length === 2 * n) {
            result.push(curr);
            return;
        }

        if (left < n) {
            backTrack(curr + '(', left + 1, right);
        }

        if (right < left) {
            backTrack(curr + ')', left, right + 1);
        }
    }

    backTrack('', 0, 0);
    return result;
};

console.log(generateParenthesis(3));