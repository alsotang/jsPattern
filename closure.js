// closure
// -------
// 闭包
var setup = function () {
    var aoo = 0;

    return function () {
        return (aoo+=1);
    };
};

var foo = setup();

console.log(foo());
console.log(foo());
console.log(foo());
