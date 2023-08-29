/**
 * 给你一个字符串数组 words 和一个字符串 s ，请你判断 s 是不是 words 的 首字母缩略词 。

如果可以按顺序串联 words 中每个字符串的第一个字符形成字符串 s ，则认为 s 是 words 的首字母缩略词。例如，"ab" 可以由 ["apple", "banana"] 形成，但是无法从 ["bear", "aardvark"] 形成。

如果 s 是 words 的首字母缩略词，返回 true ；否则，返回 false 。

 

示例 1：

输入：words = ["alice","bob","charlie"], s = "abc"
输出：true
解释：words 中 "alice"、"bob" 和 "charlie" 的第一个字符分别是 'a'、'b' 和 'c'。因此，s = "abc" 是首字母缩略词。 
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    let str = "";
    // words.forEach(item => {
    //     str += item[0];
    // })
    for (let i = 0; i < words.length; i++) {
        str += words[i][0];
    }
    if (str === s) {
        return true;
    } else {
        return false;
    }

    // let strArr = [];
    // words.forEach(item => {
    //     strArr.push(item[0]);
    // })

    // let str = strArr.join('');
    // if(str===s){
    //     return true;
    // }else{
    //     return false;
    // }



};

let words = ["an", "apple"], s = "a";
console.log(isAcronym(words, s));