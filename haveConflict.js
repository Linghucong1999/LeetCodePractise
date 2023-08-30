/**
 * 2446. 判断两个事件是否存在冲突
给你两个字符串数组 event1 和 event2 ，表示发生在同一天的两个闭区间时间段事件，其中：

event1 = [startTime1, endTime1] 且
event2 = [startTime2, endTime2]
事件的时间为有效的 24 小时制且按 HH:MM 格式给出。

当两个事件存在某个非空的交集时（即，某些时刻是两个事件都包含的），则认为出现 冲突 。

如果两个事件之间存在冲突，返回 true ；否则，返回 false 。

 

示例 1：

输入：event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
输出：true
解释：两个事件在 2:00 出现交集。
示例 2：

输入：event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
输出：true
解释：两个事件的交集从 01:20 开始，到 02:00 结束。
示例 3：

输入：event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
输出：false
解释：两个事件不存在交集。
 */

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    let date = new Date().toISOString().slice(0, 10);
    let startdateTime = new Date(`${date} ${event1[0]}`);
    let enddataTime = new Date(`${date} ${event1[1]}`);

    let startdateTime2 = new Date(`${date} ${event2[0]}`);
    let enddataTime2 = new Date(`${date} ${event2[1]}`);


    if (enddataTime < startdateTime2 || enddataTime2 < startdateTime) {
        return false;
    } else {
        return true;
    }
};

let event1 = ["14:13", "22:08"], event2 = ["02:40", "08:08"];
console.log(haveConflict(event1, event2));