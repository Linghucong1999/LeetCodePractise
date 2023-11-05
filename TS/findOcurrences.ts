/**
 * 1078. Bigram 分词
 * 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。

对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。
输入：text = "alice is a good girl she is a good student", first = "a", second = "good"
输出：["girl","student"]
 */

function findOcurrences(text: string, first: string, second: string): string[] {
    const arr = text.split(' ');
    const res: string[] = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === first && arr[i + 1] === second) {
            res.push(arr[i + 2]);
        }
    }
    return res;
};