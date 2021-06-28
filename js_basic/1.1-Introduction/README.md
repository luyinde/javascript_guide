# JavaScript 简介

## JavaScript 定义

JavaScript 是一门 **动态的、弱类型的、面向对象的、解释型的** 编程语言，非常适合面向对象和函数式的编程风格。JavaScript 的语法来自于 Java，它的一等函数（first-class function）来自于 Scheme，它的基于原型（prototype-based）的继承来自于 Self。但学习本课程不必去了解那些（Java/Scheme/Slef）语言或熟悉那些术语。

## JavaScript 起源

> **时间**：1995年
> 
> **人物**：Brendan Eich（布兰登·艾奇）
> 
> **背景**：那个时候，绝大多数因特网用户都是用速度仅为28.8kbit/s的「猫」上网，为了完成简单的表单验证，必须把表单数据发送到服务器端才能确定用户是否没有填写某个必填域、是否输入了无效的值，每次操作需等待30秒以上才会有结果，这无疑是在慢性自杀。
> 
> **事件**：当时走在技术革新最前沿的 Netscape 公司指派 Brendan Eich 开发一种客户端语言，用来处理这种简单的验证，它就是 JavaScript。JavaScript 原名 LiveScript，Netscape 为了搭上媒体热炒 Java 的顺风车，才把 LiveScript 改名为 JavaScript。（所以 Java 和 JavaScript 的关系，就相当于雷锋和雷峰塔的关系。）

## JavaScript 与 ECMAScript 的关系

JavaScript 和 ECMAScript 通常被人们用来表达相同的含义，但 JavaScript 的含义却比 ECMAScript 中规定的要多得多。一个完整的 JavaScript 实现应该由下面三个不同的部分组成。

- 核心（ECMAScript）
- 文档对象模型（DOM）
- 浏览器对象模型（BOM）

**概括：ECMAScript是JavaScript的子集，也是JavaScript的核心。**


## JavaScript的三大组成部分

### 1. ECMAScript 历史

> 1997年，ECMAScript 1 版发布。
>
> 1998年6月，ECMAScript 2 版发布。
>
> 1999年12月，ECMAScript 3 版发布。
>
> 2000年，ECMAScript 4 开始酝酿，最终这个版本没有通过。
>
> 2009年12月，ECMAScript 5 版发布。
>
> 2011年6月，ECMAscript 5.1 版发布，成为国际标准。
>
> 2015年6月，ECMAScript 6 正式通过，成为国际标准。
>
> 扩展阅读「[阮一峰](http://www.ruanyifeng.com/home.html) 的《ECMAScript 6 入门》」  
> [http://es6.ruanyifeng.com/#docs/intro](http://es6.ruanyifeng.com/#docs/intro)

3.0版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学3.0版的语法。


### 2. 文档对象模型（DOM）

文档对象模型（DOM，Document Object Model）是用于 HTML 的应用程序编程接口（API），它把整个页面映射为一个多层节点结构。HTML 页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。看下面这个 HTML 页面：

``` html
<html>
    <head>
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

通过 DOM 创建的这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权。借助 DOM 提供的 API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。

由于 Netscape 和 微软实现的 DOM 互不兼容，负责制定 Web 通信标准的 W3C（World Wide Web Consortium，万维网联盟）开始着手规划 DOM。

#### DOM1 级：
- DOM 核心：映射文档结构，简化对文档中任意部分的操作和访问。
- DOM HTML：在 DOM 核心的基础上，添加了针对 HTML 的对象和方法。

#### DOM2 级：
- DOM 视图：定义了跟踪不同文档视图的接口。
- DOM 事件：定义了事件和事件处理的接口。
- DOM 样式：定义了基于 CSS 伪元素应用样式的接口。
- DOM 遍历和范围：定义了遍历和操作文档树的接口。

#### DOM3 级：
- DOM 加载和保存：引入了以统一方式加载和保存文档的方法。
- DOM 验证：新增了验证文档的方法。
- DOM 核心扩展。

> 注意：  
> 1. DOM 并不是只针对 JavaScript 的，很多别的语言也都实现了 DOM。  
> 2. DOM0 级标准是不存在的，它只是 DOM 历史坐标中的一个参照点而已。


### 3. 浏览器对象模型（BOM）

浏览器对象模型（BOM，Browser Object Model）是用于浏览器的应用程序编程接口（API），它把整个浏览器窗口映射为一个对象。从根本上讲，BOM 只处理浏览器窗口和框架，但人们习惯上也把所有针对浏览器的 JavaScript 扩展算作 BOM 的一部分，例如：

- 弹出新浏览器窗口的功能。
- 移动、缩放和关闭浏览器窗口的功能。
- 提供浏览器详细信息的 navigator 对象。
- 提供浏览器所加载页面的详细信息的 localtion 对象。
- 提供用户显示器分辨率详细信息的 screen 对象。
- 对 cookies 的支持。
- XMLHttpRequest 和 IE 的 ActiveXObject 这样的自定义对象。

BOM 最让人头疼的是没有相关的规范和标准，每个浏览器都有独有的实现，这个问题在 HTML5 中得到了解决，HTML5 致力于把很多 BOM 功能写入正式规范。
