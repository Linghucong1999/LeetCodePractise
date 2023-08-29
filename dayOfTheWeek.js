/**
 * 1185. 一周中的第几天

给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

输入为三个整数：day、month 和 year，分别表示日、月、年。

您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。

 

示例 1：

输入：day = 31, month = 8, year = 2019
输出："Saturday"
示例 2：

输入：day = 18, month = 7, year = 1999
输出："Sund
 */

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let str = '';
    str += year;
    let str2 = str.concat('-', month);
    let str3 = str2.concat('-', day);
    let newday = new Date(str3);

    let week=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[newday.getDay()];

};
let day = 18, month = 7, year = 1999;
console.log(dayOfTheWeek(day, month, year));