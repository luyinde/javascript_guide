
console.log("区分大小写")

var message = "this is message";
var Message = "this is Message";
console.log(message);
console.log(Message);


console.log("标识符")
//第一个字符仅支持如下三种方式，剩余字符可以是字母、下划线、美元符号或数字
var hello; //字母
var _hello; //下划线
var $hello; //美元符号
console.log(hello)

console.log("注释")
// 单行注释
function getName(name) {
    return name;
}

/**
 * 多行注释
 * @param {username} name 
 * @returns 
 */
function getAge(age) {
    return age;
}


console.log("严格模式")
function conctName(name1, name2) {
    "use strict"
    return name1 + name2;
}