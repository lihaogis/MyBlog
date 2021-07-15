# 一、基础知识
 ## 1、 Vue初体验
 
````
  <div id="app">
    <p>{{message}}</p>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue"
       }
   })
   ````
 显示列表
   ````
  <div id="app">
    <ul>
         <li v-for="item in movies">{{item}}</li>
    </ul>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:'你好',
           movies:['电影名称1','电影名称2','电影名称3']
       }
   })
   ````
计数器
   ````
  <div id="app">
    <h2>
         当前计数：{{count}}
    </h2>
    <button v-on:click="add">+</button>
    <button @click="sub">-</button>//语法糖
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           count：0
       },
       methods:{
           add: function () {
               this.count++;
           },
           sub: function () {
               this.count--;
           }
       }
   })
   ````

   ## 2、理解MVVM

   Model:抽离出来的Obj对象

   View:DOM对象

   ViewModel:Vue对象实例

   ## 3、创建Vue的options属性

   el:

    类型：Sting|HtmlElement
    作用：管理的DOM

   data:
   
     类型：Object|Function (组件中data必须是一个函数)
     作用：实例对应的数据对象

   methods:

     类型：{[key:string]:Function}
     作用：定义Vue的一些方法，可在其他地方调用，也可在指令中使用

方法与函数的比较：

- 写法不通：方法：method；函数:function
- 本质区别： 方法针对对象；函数可单独出现

## 4、创建Vue生命周期

beforeCreate -> created -> beforeMount -> Mount -> beforeUpdate -> updated -> beforeDestory -> destoryed


## 5、定义Vue的template模板


# 二、插值的操作

## 1、Mustache语法，双大括号语法{{}}
不仅可以直接写变了还可以写简单的表达式{{fristName + '' + lastName}}
````
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{fristName + lastNmae}}</h2>
    <h2>{{fristName +' '+ lastNmae}}</h2>
    <h2>{{fristName}} {{lastNmae}}</h2>
    <h2>{{counter * 2}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue",
           fristName:'kobe',
           lastNmae":'brant',
           counter:100
       }
   })
   ````

   ## 2、v-once

````
  <div id="app">
    <h2>{{message}}</h2>
    <h2 v-once>{{message}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue"
       }
   })

   ````

   ## 3、v-html

````
  <div id="app">
    <h2>{{url}}</h2>
    <h2 v-html='url'></h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue",
           url:'<a>www.baidu.com</a>'
       }
   })
   ````

## 4、v-pre

## 5、v-cloak 斗篷

## 6、v-bind
绑定一个或多个属性

````
  <div id="app">
    <h2>{{url}}</h2>
    <img v-bind:src='imgUrl'></img>
    <a v-bind:href='aHref'></a>

    <!--语法糖的写法-->

    <img :src='imgUrl'></img>
    <a :href='aHref'></a>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue",
           imgUrl:'',
           aHref:''
       }
   })
   ````

动态绑定class-对象语法

````
  <div id="app">
    <h2 v-bind:class="{active : isActive, line : isLine }">{{message}}</h2>

     <h2 v-bind:class="getClass()">{{message}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue",
           isActive: true,
           isLine:true
       },
       methods:{
           getClass:function (){
               return {active : isActive, line : isLine }
           }
       }
   })
   ````


动态绑定class-数组语法

````
  <div id="app">
    <h2 v-bind:class="{active , line }">{{message}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:"Hello Vue",
           active: 'active',
           line: 'line'
       },
       methods:{

       }
   })
   ````

作业：动态绑定-v-for 和 v-bind 结合使用


## 7、计算属性
基本使用

````
  <div id="app">
    <h2>{{fristName +' '+lastName}}</h2>
    <h2>{{fristName}} {{lastName}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{fullName}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
            fristName:'Lebron',
            lastName:'James'
       },
       methods:{
           getFullName(){
               return this.fristName +' ' + lastName
           }
       },
       computed:{
           fullName : function(){
                return this.fristName +' ' + lastName
           }
       }
   })
   ````

计算属性的复杂操作

````
  <div id="app">
    <h2>总价格：{{totalPrice}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
          books:[
              {id:110,name:'Unix编程艺术',price:119},
              {id:111,name:'代码大全',price:105},
              {id:112,name:'深入理解计算机原理',price:98},
              {id:113,name:'现代操作系统',price:87},
              ]
       },
       methods:{
       },
       computed:{
           totalPrice : function(){
                let result=0;
                for(let i=0;i<this.books.length;i++){
                    result+=this.books[i].price;
                }
                return result;
           }
       }
   })
   ````

   计算属性的setter和getter,计算属性一般只有get,没有set方法，只读属性

````
    <div id="app">
    <h2>{{fristName +' '+lastName}}</h2>
    <h2>{{fristName}} {{lastName}}</h2>
    <h2>{{getFullName()}}</h2>
    <h2>{{fullName}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
            fristName:'Lebron',
            lastName:'James'
       },
       computed:{
           fullName : {
               set: function(newValue){
                   const names= newValue.split(' ');
                   this.fristName=names[0];
                   this.lastName=names[1];
               },
               get :function(){
                   return this.fristName + ' ' + lastName;
               }
           },
           //只有get的简洁写法
           fullName: function (){
                return this.fristName + ' ' + lastName;
           }

       }
   })
   ````

   计算属性和methods 比较
   计算属性缓存，只执行一次，执行效率会比较高
   methods 函数会多次执行

   ## 8、ES6基础语法对比

   - let/var 块级作用域对比

   var： if  for 没有作用域，只有 function 有作用域

   let: 有块级作用域

   闭包写法：
   
   ````
   for (var i=0';i< btns.length; i++>){
          (function(num){
              btns[i].addEventListener('click',function(){
                  console.log("第"+num+"个btn被打印");
              })
          })(i)
   }
   ````

 - const的使用

 在ES6的开发中，优先使用const，只有需要改变某个标识符的时候才使用

注意：

1、一旦给const修饰符的标识符被赋值,不能被修改

2、在使用const定义标识符，必须进行赋值

3、常量的含义是指向的对象不能修改，但是可以改变对象内部的属性


## 9、v-on 基本使用和语法糖

  ````
  <div id="app">
    <h2>
         当前计数：{{count}}
    </h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>//语法糖
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           count：0
       },
       methods:{
           add() {
               this.count++;
           },
           sub() {
               this.count--;
           }
       }
   })
   ````

   v-on 修饰符

   ````
  <div id="app">
    <div @click="divClick">
      <button @click.stop="buttonClick"></button>
    </div>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           count：0
       },
       methods:{
           divClick() {
               console.log("div 被点击")
           },
           buttonClick() {
               console.log("button 被点击")
           }
       }
   })
   ````

## 10、v-if/v-else 基本使用和语法糖

````
  <div id="app">
    <h2 v-if="isShow">{{message}}</h2>
  </div>

  const vm = new Vue({
       el:"#app",
       data:{
           message:'你好啊',
           isShow:true
       },
       methods:{
   })
   ````

## 11、登录切换小案例

  ````
  <body>
    <div id="app">
        <span v-if="isUser">
            <label for="username">用户账号</label>
            <input type="text" id="username" placeholder="用户账号" key="username">
        </span>
        <span v-else>
            <label for="email">用户邮箱</label>
            <input type="text" id="email" placeholder="用户邮箱" key="email">
        </span>
        <button @click="isUser=!isUser">类型切换</button>
    </div>

</body>

<script src='js/vue.js'></script>

<script>
    const vm = new Vue({
        el: "#app",
        data: {
            isUser: true
        }
    })
</script>
   ````

## 12、v-show的基本用法

```
<body>
    <div id="app">
        <!-- 
            v-if:当条件为false时，包含v-if指令的元素。根部就不会存在dom中
        -->
        <h2 v-if="isShow" id="aaa">{{message}}</h2>

        <!--
            v-show:当条件为false时，v-show只是给我们的元素添加一个行内样式：display:none;
        -->
        <!--
            当切换频率很高的时候用v-show,当只有一次切换时用v-if
        -->
        <h2 v-show="isShow" id="bbb">{{message}}</h2>
    </div>

</body>

<script src='js/vue.js'></script>

<script>
    const vm = new Vue({
        el: "#app",
        data: {
            message: "你好啊",
            isShow:true
        }
    })
</script>
```

## 13、v-for的基本用法

- 遍历数组
```
<body>
    <div id="app">
        <ul>
            <li v-for="item in names">{{item}}</li>
        </ul>

        <ul>
            <li v-for="(item,index) in names">{{index+1}}.{{item}}</li>
        </ul>

    </div>

</body>

<script src='js/vue.js'></script>

<script>
    const vm = new Vue({
        el: "#app",
        data: {
            names: ['lihao', 'zhaomengwei', 'lixi']
        }
    })
</script>
```

- 遍历对象
```
<body>
    <div id="app">
        <!-- 在遍历对象的过程中，如果只获取一个值，那么获取的是value-->
        <ul>
            <li v-for="item in info">{{item}}</li>
        </ul>

        <!-- 获取 key-value 的格式：(value,key)-->
        <ul>
            <li v-for="(value,key) in info">{{value}}-{{key}}</li>
        </ul>

        <!-- 获取 key-value-index 的格式：(value,key,index)-->
        <ul>
            <li v-for="(value,key,index) in info">{{value}}-{{key}}-{{index}}</li>
        </ul>

    </div>

</body>

<script src='js/vue.js'></script>

<script>
    const vm = new Vue({
        el: "#app",
        data: {
            info: {
                name: "why",
                age: 18,
                height: 1.88
            }
        }
    })
</script>
```


# 三、


# 四、


# 五、