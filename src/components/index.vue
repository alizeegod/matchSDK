<style soped>
body,p,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,fieldset,legend,input,select,textarea,button,th,td,blockquote,address,pre{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6,input,textarea,select,button,label{font-size:100%;vertical-align:middle;}
ul,dl,ol{list-style:none;}
a{text-decoration: none;}
img,fieldset{border:none;}
img{display:inline-block;overflow:hidden;vertical-align:top;}
em,address{font-style:normal;}
sup,sub{vertical-align:baseline;}
table{border-collapse:collapse;border-spacing:0;}
q:before{content:"";}
q:after{content:"";}
button{cursor:pointer;}
select{-webkit-appearance: none;-moz-appearance: none;-o-appearance: none;}
textarea{word-wrap:break-word;resize:none;}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; } 
.clear{clear: both;}
.fl{float: left;}
.fr{float: right;}
*{margin: 0; padding: 0; -webkit-text-size-adjust: none;} ol,ul,i{list-style: none; font-style: normal;}
 a{text-decoration: none; } a, button, input,div {-webkit-tap-highlight-color: rgba(255,0,0,0); } 
 html,body{height: 100%; } body{font-family:"微软雅黑"; height: 100%; } 
body{background: #050D19;}
.main-nav{
  position: fixed;
  width: 50px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999999;
}
.main-nav ul{
    height: 100%;
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    display: flex;
    flex-direction:column;
    list-style: none;
    justify-content: space-around;
    border-right: 1px solid #3A4861;
}
.main-nav li{
    display: -webkit-flex;
    -webkit-box-flex: 1;
    text-align: center;
    position: relative;
    width: 50px;
    height: 100%;
    overflow: hidden;
    background: #1A212E;
}
.main-nav li a{
    color: #a09b94;
    font-size: 14px;
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -25px;
}
.main-nav li.v-link-active a{
  color: #fff;
}
.main-nav li.v-link-active{
  background: url(../images/i-nav-bg.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li a span{
  display: inline-block;
}
.main-nav li a i{
  width: 32.4px;
  height: 28.8px;
  display: block;
  margin: 0 auto;
}
.main-nav li:nth-of-type(1) a i{
  background: url(../images/i-nav-ico-match.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li:nth-of-type(2) a i{
  background: url(../images/i-nav-ico-rank.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li:nth-of-type(3) a i{
  background: url(../images/i-nav-ico-mine.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li:nth-of-type(1).v-link-active a i{
  background: url(../images/i-nav-ico-match-on.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li:nth-of-type(2).v-link-active a i{
  background: url(../images/i-nav-ico-rank-on.png) no-repeat;
  background-size: 100% 100%;
}
.main-nav li:nth-of-type(3).v-link-active a i{
  background: url(../images/i-nav-ico-mine-on.png) no-repeat;
  background-size: 100% 100%;
}
</style>
<template>
	<div class="main-nav">
        <ul>
          <li v-link="{path:'/match'}">
            <a>
              <i></i>
              <span>赛事</span>
            </a>
          </li>
          <li v-link="{path:'/rank'}">
            <a>
              <i></i>
              <span>榜单</span> 
            </a>
          </li>
          <li v-link="{path:'/mine'}">
            <a>
              <i></i>
              <span>我的</span>
            </a> 
          </li>
        </ul>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../store/store.js');
var actions = require('../store/actions.js');


import Storage from '../js/Storage';

var index = Vue.extend({
	name: 'index',
	data: function() {
		return {
			
		};
	},
    store: store,
    vuex: {
        getters: {
            userMsg: function() {
                return store.state.userMsg;
            }
        },
        actions: actions
    },
	ready: function() {
        var _this = this;
        // $.ajax({
        //     url:'http://yxssapi.dev.yingxiong.com/user/info',
        //     // url:'http://www.goodsinfo.cn/api/type/list',
        //     type:'GET',
        //     dataType:'json',
        //     // jsonp:'callback',
        //     // jsonpCallback:'jsonp'+new Date().getTime(),
        //     // data:{userid: _this.userMsg.id},
        //     success:function(data){

        //         console.log(data)
        //     }
        // }); 
        // console.log(JSON.stringify(_this.userMsg));
        // // Storage.set('userMsg',JSON.stringify(_this.userMsg));
        // console.log(Storage.get('userMsg'));
        // console.log(window.localStorage)
        // console.log(JSON.parse(Storage.get('userMsg')))
	}
});

module.exports = index;
</script>
