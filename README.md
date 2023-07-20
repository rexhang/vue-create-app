<h1 align="center">项目开发大纲 📝</h1>

### 基础集成环境版本:

<p align="center">
  <a href="https://nodejs.org">
    <img alt="node-v16.19.x" src="https://img.shields.io/badge/node-v16.19.x-blue.svg" target="_blank" />
  </a>
  <a href="https://nodejs.org">
    <img alt="npm-v8.19.x" src="https://img.shields.io/badge/npm-v8.19.x-blue.svg" target="_blank" />
  </a>
  <a href="javascript:;">
    <img alt="license-Commercial" src="https://img.shields.io/badge/license-Commercial-yellow.svg" target="_blank" />
  </a>
  <a href="https://v2.cn.vuejs.org">
    <img alt="ADF-Vue@v2.x" src="https://img.shields.io/badge/ADF-Vue@v2.x-green.svg" target="_blank" />
  </a>
  <a href="https://webpack.docschina.org">
    <img alt="build-Webpack@v4.x" src="https://img.shields.io/badge/build-Webpack@v4.x-blue.svg" target="_blank" />
  </a>
  <a href="https://element.eleme.io">
    <img alt="UI-ElementUI@v2.15.x" src="https://img.shields.io/badge/UI-ElementUI@v2.15.x-blue.svg" target="_blank" />
  </a>
  <a href="javascript:;">
    <img alt="codecov-100%" src="https://codecov.io/gh/kefranabg/readme-md-generator/branch/master/graph/badge.svg" target="_blank" />
  </a>
  <a href="javascript:;">
    <img alt="changelog-GitMoji" src="https://img.shields.io/badge/changelog-GitMoji-green.svg" target="_blank" />
  </a>
</p>
### Project setup:

```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production

```
yarn build
```

#### Lints and fixes files
```
yarn lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 基础目录结构:

```javascript
.vscode/   ------------------- 这个目录存放的是使用vscode时，项目的配置相关文件，例如调试模式(F5)，项目插件等一些的项目配置内容
node_nodules/   -------------- 这个目录存放的是项目的所有依赖，即 npm install 命令下载下来的文件
build   ---------------------- 文件夹，用来存放项目构建脚本
public/ ---------------------- 放置一些静态资源，而且在项目打包的时候webpack不会编译这个文件夹
mock  ------------------------ mock数据的文件夹 模拟一些假的数据 eg: mock.js 亦可配合使用json-server + REST Client
src/    ---------------------- 这个目录下存放项目的源码，即开发者写的代码放在这里
|- api  ---------------------- 统一接口目录
|- assets  ------------------- 里面放置一些静态资源（一般共享的），放在assets文件夹里面静态资源，会进行编译
|- components  --------------- 公共组件目录
|- directives  --------------- 自定义指令目录
|- mixins  ------------------- 自定义混入组件目录
|- router  ------------------- VueRouter目录
|- store  -------------------- Vuex目录
|- icons  -------------------- 放置了一些svg矢量图
|- styles  ------------------- 样式文件目录
|- utils  -------------------- 工具目录
|- layouts  ------------------ 如果是管理类软件， 放置公共布局类组件 如：Container, SideMenu、SideMenu.vue。
|- views  -------------------- 页面组件目录
|- App.vue  ------------------ 根组件
|- main.js  ------------------ 入口文件
|- permission.js  ------------ 与导航守卫相关
|- settings ------------------ 项目的配置项文件
.browserslistrc
.env.development
.env.production
.eslintrc.js
.gitinore
babel.config.js
package.json
README.md
vue.config.js
```

继续补充完整，直至和实际项目开发内容一致。

## 文件导入导出规范:
目录需要定义入口文件index.js用于导出全部模块文件
eg(utils/index.js, utils/x1.js, utils/x2.js, ...):
```javascript
export * from './x1.js';
export * from './x2.js';
...
```
使用的时候按需引入
```javascript
import { getLocalName, ...rest } from './utils';
```

### 目录、文件、组件、组件结构的命名规范:

#### 1.目录命名

全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数（例如images -> img）。

项目目录与其项目一级导航菜单统一，便于管理，二级导航放在一级导航文件夹下，以此类推。

复数命名法：文件夹可缩写，文件尽量不缩写，变量可缩写(但需备注全称)。
原因：一个项目，目录不会很多，文件会很多，变量会更多，变量的缩写可以备注，但文件的缩写无法备注，需要让人直观的了解到文件的作用，

```javascript
// 正例
/center/supplier/abs-page.vue,

// 反例
/center/sup/abs_page.vue',
```

#### 2.文件命名

JS、CSS、SCSS、HTML、PNG命名，全部采用小写方式， 以中划线分隔。

```javascript
// 正例
@/assets/img/logo-white.png，

// 反例
@/assets/img/logoWhite.png
```

#### 3.组件命名

组件名以单词大写开头，当多个单词拼写成的组件时，采用驼峰式命名规则 (**PascalCase**)。一般是多个单词全拼，减少简写的情况，这样增加可读性。

components/
|- MyComponent.vue
应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App。

components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
组件应该都放到components文件夹下，单个页面独立一个文件夹，用来放相对应的VUE文件以及页面相关的样式文件，样式少可直接写到页面组件里边，这样更符合组件化的思想。

#### 4.组件结构

组件结构遵循从上往下template，script，style的结构。

`<script>`的import顺序，分模块，拆分来写
首先引入npm包里的内容

其次引入全局的一些组件、方法

最后引入当前业务模块的组件、方法

data里面的数据，按模块顺序，分开书写
用空格隔开

```javascript
data (){
  return {
    //模块一
    xx1,
    xx2,

    //中间用空一行
    //模块二
    qq1,
    qq2
  }
}
vue2 的option对象，属性需要按顺序排列
name
mixins
components
props
data
filters
directive
computed
watch
生命周期（按执行顺序）
methods
```

### 代码规范:

#### template规范

尽量使用以.vue结束的单文件组件，方便管理，结构清晰。

标签语义化，避免清一色的div元素

DOM的层级数尽可能少，优化渲染速度。

多特性，分行写，提高可读性。即一个标签内有多个属性，属性分行写。

自定义标签：使用自闭标签的写法。例如：，如果自定义标签中间需要传入slot，则写开始标签和结束标签，结束标签必须加/。

v-slot：在vue2.6版本中，slot与slot-scope已被弃用，统一使用v-slot指令。

不使用v-html指令

不写过于复杂的表达式，使用计算属性来代替

相同的卡片布局，首先整合数据，尽量使用循环方式去增加，避免变更多处的问题。

v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一，key一般使用index或者todo.id。

```html
<ul>
    <li
    v-for="todo in todos"
    :key="todo.id"
    >
    {{ todo.text }}
    </li>
</ul>
```

避免 v-if 和 v-for 同时用在一个元素上（性能问题），以下为**两种**解决方案：

1. 将数据替换为一个计算属性，让其返回过滤后的列表。
2. 将 v-if 移动至容器元素上 (比如 ul, ol, div, ...)。

#### css规范

需要加上scoped作用域

避免使用标签选择器（效率低、损耗性能）。

CSS 属性书写顺序：先决定定位宽高显示大小，再做局部细节修饰！推荐顺序：定位属性(或显示属性，display)->宽高属性->边距属性(margin, padding)->字体，背景，颜色等，修饰属性的定义。

#### js规范

在 **script** 标签中，应该遵守 JS的规范和ES6规范。

创建公共的JS，封装公用的方法和工具类。

声明变量必须赋值

使用let、const替代var

由于变量提升、无块级作用域等原因，var基本上已经退出了历史的舞台

匿名函数使用箭头函数
```javascript
// 反例
const _this = this
setTimeout(function() {
  _this.xxx()
}, 10)

// 正例
setTimeout(() => {
  this.xxx()
}, 10)
```

避免回调地狱，使用以下为两种解决方案：

方法返回Promise，方便可以通过 .then 的方式进行链式调用

获取异步的数据，按具体情况使用 async/await 操作

三元运算符不嵌套

三元运算符只用作单行操作，如果嵌套过深的话，会增加阅读难度

使用map、object替代if、switch case条件取值
```javascript
// 反例
let statusName = ''
if (type === 1) {
    statusName = '草稿'
} else if (type === 2) {
    statusName = '已发布'
} else if (type === 3) {
    statusName = '已删除'
}
// 正例
let statusName = {
    1: '草稿',
    2: '已发布',
    3: '已删除'
}[type] || ''
```

慎用**setTimeout**

禁止通过 setTimeout 来获取异步接口的数据
能通过 this.$nextTick实现的，不用 setTimeout

无特殊情况不允许使用原生API操作DOM，谨慎使用this.$refs直接操作DOM

操作DOM是及其损耗性能得， 代码的质量会降低，出现一些多余得代码;

经常直接操作DOM 会导致一些不可预测得问题，当你在一个组件当中直接操作全局得DOM时，有可能会影响到其他页面，一旦报错，定位问题会比较困难。

需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。

尽量使用”===“和”!==“

整合数据时尽量使用ES6，Object.assign和 … 扩展符（ps：Object.assign() 为浅复制）

若循环中需使用函数，请将函数定义在循环外部而非内部，这样可以避免函数的反复创建。

Props定义：提供默认值，使用Type属性校验类型，使用Props之前先检查Prop是否存在。
```javascript
//正确
props: {
     status: String
}
// 更好的做法！
props: {
    status: {
        type: String,
        required: true,
        validator: function (value) {
            return [
                    'syncing',
                    'synced',
                    'version-conflict',
                    'error'
                    ].indexOf(value) !== -1
        }
    }
}
// 反例
// 这样做只有开发原型系统时可以接受
props: ['status']
```

当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
```javascript
export default {
    data () {
        return {
            foo: 'bar'
        }
    }
}
```

JS中统一使用反引号（``）或是单引号('')， 不使用双引号("")。

避免 v-if 和 v-for 用在一起
```javascript
<ul v-if="shouldShowUsers">
    <li
        v-for="user in users"
        :key="user.id"
    >
        {{ user.name }}
    </li>
</ul>
```

函数中统一使用_this=this来解决全局指向问题。

导入模块时不要省略后缀（js 除外），这样有利于 IDE 感知（特别是 .vue）。

弹框、select等需要大量代码去实现，要以组件的方式引入。

应该把复杂计算属性分割为尽可能多的更简单的属性。

使用路由懒加载（延迟加载）机制

```javascript
//路由懒加载
const HelloWorld = ()=>import("@/components/HelloWorld")
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    }
  ]
})
```

组件懒加载，较复杂的组件可使用，建议多使用
```javascript
<template>
  <div class="hello">
  <One-com></One-com>
  1111
  </div>
</template>

<script>
//懒加载组件
const One = ()=>import("./one");
export default {
  components:{
    "One-com":One
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```

调试信息console.log() ; debugger 使用完及时删除


#### 图片规范
每个模块都要增加一个图片文件夹方便后期维护和处理，图片文件命名尽量跟模块意义的相同，尽量使用小写单词命名。
图片格式常用png，jpg，gif。
命名全部用小写字母，数字及中划线组合，其中不包含汉字、空格和特殊字符；尽量用易懂的词汇，便于团队其他成员理解；命名分头尾两部分，用中划线隔开，（例如：ad-left01.png、btn-submit.png）。
在保证视觉效果的情况下选最小的图片格式与图片质量，减少加载时间。
PC端img图片必须填写width、height、alt属性
需要变动的文字禁止切到图片中，如果不确定是否需要变动，请咨询接口人
需要程序后台动态生成的图片，如道具图片、头像、奖品，必须单独切割出来
装饰性图片合并成精灵图，减少页面请求

#### 注释规范
```html
<!-- 房间信息模块 -->
<div class="room">
	...
</div>
<!-- 房间信息模块 -->
```

注意在注释的前后各有一个空格。

文件顶部注释(多行)
```javascript
/**

    @description: 文件中文说明

    @author: 作者

    @update: 作者 (2023-04-23 15:00)

    ...

**/
```

行级注释（注意//后面空格）：// 正确的注释

变量声明注释：如果是在类似 Vue 项目的 data 属性中的变量，直接用行级样式跟在后面。
```javascript
data(){
 return {
         foo: 'bar' // 注释直接写这里
    }
}
```

如果是在类，构造函数，或者常量定义中的变量，使用块级注释。/ comment /

函数声明注释：不必要在每一个函数都写注释，但是在公共函数，还是建议补全注释，让后面的人不需要重复造轮子。

复杂的业务逻辑处理说明、特殊情况的代码处理说明，对于特殊用途的变量、存在临界值、使用了某种算法思路进行注释说明

#### 接口规范

1、API接口地址统一管理，接口较少时可以单独写一个接口文件JS，页面中使用哪些引入哪些。

2、接口较多时，可对接口按模块进行分类，一个模块对应一个接口文件。

#### 其他规范

1、文字超出容器需要进行 '...' 省略。

2、图片显示 无特殊要求时，按原图宽高比显示，尽量不要变形。

3、涉及数据处理功能按钮，增加防频繁点击处理。

4、小图标尽量使用UI框架自带的icon图标。

5、页面按钮颜色，样式，功能尽量统一。

6、不同页面相同功能的提示文字尽量统一。

#### 待补充规范

开发者可以在以上基础规范内容上继续补充后续规范，直至和实际项目开发内容一致。
