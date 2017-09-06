'use strict';

const hello = require('./index');

var s = 'Michael';

hello.greet(s);
hello.goodbye(s);
hello.hi(s);

// nextTick 将会在下一个事件循环中使用
global.process.nextTick(function () {
    global.console.info("this is nextTick"); // 在最后的文末打印
});
global.console.info(global.process.version);
global.console.info(global.process.cwd());

if (typeof (window)=='undefined') {
    console.info('node.js');
} else {
    console.info('browser');
}
