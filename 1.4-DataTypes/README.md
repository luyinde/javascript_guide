# 数据类型

JavaScript 中有7种数据类型，5种简单数据类型（也称为「基本数据类型」或「原始数据类型」）、1种复杂类型、1种ES6新增类型：

`Undefined`、

`Null`、

`Boolean`、

`Number`、

`String` 

`Object` 【复杂数据类型 `Object`，`Object` 本质上是由一组无序的名值对组成的】

`Symbol` 【ES6 新增】

JavaScript 不支持任何创建自定义类型的机制，所有值最终都将是上述7种数据类型之一。


---


## `typeof` 运算符

鉴于 JavaScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型，`typeof` 就是负责提供这方面信息的运算符。对一个值使用 `typeof` 运算符可能返回下列某个字符串：

- `"undefined"`，如果这个值未声明或已声明但未初始化。
- `"boolean"`，如果这个值是布尔值。
- `"string"`，如果这个值是字符串。
- `"number"`，如果这个值是数值。
- `"object"`，如果这个值是对象或 `null`。
- `"function"`，如果这个值是函数。

> 扩展阅读「为什么 JavaScript 里面 `typeof null` 的值是 `"object"`？」  
> https://www.zhihu.com/question/21691758

> 扩展阅读「MDN 之 `typeof`」  
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

> 扩展阅读「JavaScript 检测原始值、引用值、属性」  
> http://shijiajie.com/2016/06/20/javascript-maintainable-javascript-validate1/

> 扩展阅读「JavaScript 检测之 basevalidate.js」  
> http://shijiajie.com/2016/06/25/javascript-maintainable-javascript-basevalidatejs/


## `Undefined` 类型
`Undefined` 类型只有1个值，即 `undefined`。使用 `var` 声明变量但未对其加以初始化时，这个变量的值就是 `undefined`。


## `Null` 类型

`Null` 类型也只有1个值，即 `null`。它用来表示值的空缺。你可以认为 `undefined` 是表示系统级的、出乎意料的或类似错误的值的空缺，而 `null` 是表示程序级的、正常的或在意料之中的值的空缺。在下列场景中应当使用 `null`。

- 用来初始化一个变量，这个变量可能赋值为一个对象。
- 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。
- 当函数的参数期望是对象时，作用参数传入。
- 当函数的返回值期望是对象时，作用返回值传出。

在下列场景中不应当使用 `null`。

- 不要使用 `null` 来检测是否传入了某个参数。
- 不要使用 `null` 来检测一个未初始化的变量。

## `Boolean` 类型

`Boolean` 类型是 JavaScript 中使用得最多的一种类型，该类型只有两个字面值：`true` 和 `false`。需要注意的是，他们是区分大小写的，也就是说 `True` 和 `False`（以及其他的混合大小写形式）都不是 `Boolean` 值，只是标识符。


下表给出了各种数据类型及其对应的转换规则。

| 数据类型      | 转换为true的值      | 转换为false的值 |
| --------- | -------------- | ---------- |
| Undefined | -              | undefined  |
| Null      | -              | null       |
| Boolean   | true           | false      |
| String    | 任何非空字符串        | ""（空字符串）   |
| Number    | 任何非零数字值（包括无穷大） | 0和NaN      |
| Object    | 任何对象           | -          |


## `Number` 类型

`Number` 类型是 JavaScript 中最令人关注的数据类型，这种类型使用 IEEE 754 格式来表示`整数`和`浮点数值`（浮点数值在某些语言中也被称为双精度数值）。和其他编程语言不同，JavaScript 中的所有数字均用浮点数值表示。

> 扩展阅读「IEEE 754-1985」  
> https://en.wikipedia.org/wiki/IEEE_754-1985

### 整数
所谓整数，就是该数值中不包含一个小数点，一般指十进制数。在 JavaScript 中进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。

### 浮点数

所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。

``` javascript
var a = 1.1;
var b = 0.1;
var c = .1;     // 有效，但不推荐
```

### 正无穷、负无穷

由于内存限制，JavaScript 能表示的数值范围从 `Number.MIN_VALUE` 到 `Number.MAX_VALUE`，并将超出范围的数转换成 `Number.POSITIVE_INFINITY` 或 `Number.NEGATIVE_INFINITY`。0作为除数是不会报错的，正数除以0返回正无穷，负数除以0返回负无穷，0除以0返回`NaN`。例如：

``` javascript
console.log(Number.MAX_VALUE);       // 最大数 1.7976931348623157e+308
console.log(Number.MIN_VALUE);       // 最小数 5e-324

console.log(Number.POSITIVE_INFINITY);    // 正无穷  Infinity
console.log(Number.NEGATIVE_INFINITY);    // 负无穷 -Infinity

console.log( 1 / 0);     //  Infinity
console.log(-1 / 0);     // -Infinity

```

JavaScript 提供了 `isFinite()` 函数，来确定一个数是不是有穷的。例如：

``` javascript
console.log(isFinite(100));         // true
console.log(isFinite(Infinity));    // false 
```

### NaN

`NaN`（not a number），是一个特殊的数值。之所以称它为「非数值」，是因为它不能参与算数运算，任何涉及 `NaN` 的操作都返回 `NaN`。并且 `NaN` 与任何值都不相等（包括自身）。例如：

``` javascript
console.log(typeof NaN);      // "number"

console.log(0 / 0);                 // NaN
console.log(NaN - NaN);             // NaN
console.log(Infinity - Infinity);   // NaN

var a = NaN;
console.log(a === a);   // false
```

JavaScript 提供了 `isNaN()` 函数，来确定一个数是不是 `NaN`。例如：

``` javascript
console.log(isNaN(100));        //  false
console.log(isNaN("100"));      //  false
console.log(isNaN(true));       //  false
console.log(isNaN("sss"));      //  true
console.log(isNaN(NaN));        //  true
```

### `Number()`、`parseInt()`、`parseFloat()` 转型函数

`isNaN()` 函数在接收到一个值之后，会尝试使用转型函数 `Number()` 将这个值转换为数值，转换规则如下：

- `undefined` 转换为 `NaN`；
- `null` 转换为 0；
- `true` 转换为 `1`、`false` 转换为 `0`；
- `number` 整数转换为十进制，小数不变；
- `string` 
  
  如果只包含十进制数和小数，则返回对应的数值，
  
  如果只包含八进制数，则忽略前导0返回剩余部分，
  
  如果只包含十六进制，则返回十进制数，空字符串转换为0，其它字符串转换为 `NaN`；

- 如果 `object` 具有 `valueOf()` 方法，且返回一个原始值（5种简单数据类型），则将这个原始值转换为数字，并返回这个数字；
  
  否则，如果 `object` 具有 `toString()` 方法，且返回一个原始值，则将这个原始值转换为数字，并返回这个数字；否则，抛出一个类型错误异常。

由于 `Number()` 转型函数在转换字符串时不够理想，因此还有两个专门用来转换字符串的函数 `parseInt()` 和 `parseFloat()` 函数。

`parseInt()` 函数会忽略字符串前面的空格，直至找到第一个非空格字符，只要第一个非空格字符不是数字或者正负号，一律返回 `NaN`， 如果第一个非空格字符是数字字符，`parseInt()` 会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非数字字符。例如：

``` javascript
console.log(parseInt(""));          // NaN（Number("")返回 0）
console.log(parseInt("123S"));      // 123
console.log(parseInt("12.4"));      // 12
```

`parseFloat()` 函数也会忽略字符串前面的空格，直至找到第一个非空格字符，只要第一个非空格字符不是数字或者正负号或者小数点，一律返回 `NaN`， 如果第一个非空格字符是上述字符之一，`parseFloat()` 会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个非浮点数值。例如：

``` javascript
console.log(parseFloat("098.2"));       // 98.2
console.log(parseFloat("123.23.23"));   // 123.23
```

## `String` 类型

`String` 类型用于表示由零或多个16位 Unicode 字符组成的字符序列，即字符串。字符串可以由双引号（"）或单引号（'）表示，因此下面两种字符串的写法都是有效的：

``` javascript
var firstName = "Nicholas";
var lastName = 'Zakas';
```

`字符串的特点`：ECMAScript中的字符串是不可变的，字符串一旦创建，他们的值就不能改变。

## `Object` 类型

JavaScript 中所有对象都继承自 `Object` 类型，每个对象都具有下列基本的属性和方法：

- `constructor`：保存着用于创建当前对象的函数（构造函数）。
- `hasOwnProperty()`：用于检查给定的属性在当前对象实例中是否存在。
- `propertyIsEnumerable()`：用于检查给定的属性是否能够使用for-in语句来枚举。
- `isPrototypeOf()`：用于检查对象是否是传入对象的原型。
- `toString()` 方法：返回对象的字符串表示。
- `toLocaleString()`：返回对象的本地字符串表示。
- `valueOf()`：返回对象的字符串、数值或布尔值表示（通常与toString()方法的返回值相同）。

`Object` 本质上是由一组无序的名值对组成，「名称」部分是一个 JavaScript 字符串，「值」部分可以是任何 JavaScript 的数据类型（包括对象和方法）。这使用户可以根据具体需求，创建出相当复杂的数据结构。
