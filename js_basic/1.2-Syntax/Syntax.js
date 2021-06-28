
// 请判断以下代码是否有效？如果有效请给出结果，如果无效请说明原因。


// 挑战一
var class = 'person';
console.log(class);     // 无效，class是关键字。



// 挑战二
var Class = 'person';
console.log(class);     // 无效，Class是合法标识符，打印的class是关键字



// 挑战三
var True = false;
console.log(True);      // 有效，True是合法标识符



// 挑战四
var true = false;
console.log(True);      // 无效，true是关键字



// 挑战五
var $_$ = 'stone';
console.log($_$);       // 有效



// 挑战六
var 00_name = 'stone';
console.log(00_name);   // 无效，标识符不能以数字开头



// 挑战七
var Array = 'null';
console.log(Array);     // 有效，虽然 Array 是全局变量，但可以被重写，Array 被重写之后就不能再用当做构造函数使用了。



// 挑战八
var undefined = 'null';
console.log(undefined); // undefined，有效，虽然没报错，但是没有赋值成功。



// 挑战九
var result = 1 + 2
+ 3 + 4
console.log(result);    // 有效
