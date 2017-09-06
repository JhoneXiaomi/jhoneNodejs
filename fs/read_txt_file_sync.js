'use strict';

// read text from 'sample.txt'

const fs = require('fs');

console.log('>>> BEGIN >>>')


// 同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
try {
    var data = fs.readFileSync('部署正式环境详细过程说明.txt', 'utf-8');
    console.log(data);
} catch (err) {

}

console.log('>>> END >>>')