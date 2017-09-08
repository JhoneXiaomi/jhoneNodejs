"use Strick";

// global:nodejs 中唯一的一个全局对象


//process:也是nodejs 中的一个对象，他代表nodejs中的一个进程

console.info(global.process.version);
console.info(global.process.platform);
console.info(global.process.arch);

// process.nextTick()将在下一轮事件循环中调用,不是立即执行
global.process.nextTick(function () {
    console.info("process nextTick");
});

// 程序即将退出时的回调函数
process.on('exit', function (res) {
    console.info('about to exit with code: ' + res);
});