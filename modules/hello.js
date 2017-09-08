// hello.js
console.log('init hello.js...');

// a simple function:
// > sum(1, 2, 3)
// 6

var greet = function (...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    console.info("the value of sum is:"+sum);
    return sum;
};

// 暴露greet 方法,提供外界调用
module.exports = greet;
