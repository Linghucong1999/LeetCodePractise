/**
 * 1184. 公交站间的距离
相关企业
环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。

环线上的公交车都可以按顺时针和逆时针的方向行驶。

返回乘客从出发点 start 到目的地 destination 之间的最短距离。
 */

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    if (start === destination) {
        return 0;
    }
    // let n = distance.length;
    // let clockwiseDistance = 0;
    // let countClockwiseDistance = 0;

    // //顺时针距离之和
    // for (let i = start; i !== destination; i = (i + 1) % n) {
    //     clockwiseDistance += distance[i];
    // }

    // //逆时针距离之和
    // for (let i = start; i !== destination; i = (i - 1 + n) % n) {
    //     countClockwiseDistance += distance[(i - 1 + n) % n];
    // }

    // return Math.min(clockwiseDistance, countClockwiseDistance);

    let totalDistance = distance.reduce((ace, val) => ace + val);    //总距离
    let clockwiseDistance = null;
    if (start < destination) {
        clockwiseDistance = distance.slice(start, destination).reduce((ace, val) => ace + val);  //顺时针距离之和
    } else {
        clockwiseDistance = distance.slice(destination, start).reduce((ace, val) => ace + val);
    }

    let countClockwiseDistance = totalDistance - clockwiseDistance;  //逆时针距离之和
    return Math.min(clockwiseDistance, countClockwiseDistance);
};

let distance = [7, 10, 1, 12, 11, 14, 5, 0], start = 7, destination = 2;

console.log(distanceBetweenBusStops(distance, start, destination));