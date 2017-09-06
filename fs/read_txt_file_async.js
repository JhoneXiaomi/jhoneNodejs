'use strict';

// read text from 'sample.txt'

const fs = require('fs');

console.log('>>> BEGIN >>>')


// 异步读取文件
fs.readFile('部署正式环境详细过程说明.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('>>> END >>>')