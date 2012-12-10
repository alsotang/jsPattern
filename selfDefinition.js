// selfDefinition
// --------------
// 即：自己重新定义自己
// 该模式的另一个名称：惰性函数定义/ lazy funciton definition
//
// 用途：
// 第一次调用该函数，会“初始化”，之后的调用才会使用该函数的真正功能

// 1.
var foo = function () {

    console.log('run foo~');

    foo = function () {
        console.log('define foo by itself~');
    };

};

// 第一次调用foo
foo();

// 第二次调用foo
foo();

// 2. 缺点:
// 会丢失第一次定义时的所有属性;
// 分配给名字不一样的变量时，“自定义”不会发生
// 作为对象的方法调用，“自定义”不会发生，和上一个一样，可能会覆盖上下文中的foo
foo.property = "hehe";
