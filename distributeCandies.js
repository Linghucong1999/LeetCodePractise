/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const len = candyType.length;
    const set = new Set(candyType);
    const setlen = set.size;
    const len2 = len / 2;
    return setlen > len2 ? len2 : setlen;
};