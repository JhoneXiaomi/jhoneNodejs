"use strick";
var fs = require("fs");
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        // 出错了
        console.log(err);
    } else {
        // 正常
        console.log(data);
    }
});