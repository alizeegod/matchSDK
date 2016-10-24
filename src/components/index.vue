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
<style soped>
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
<script>
var Vue = require('Vue');

// var store = require('../store/store.js');

var index = Vue.extend({
	name: 'index',
	data: function() {
		return {
			
		};
	},
	ready: function() {

	}
});

module.exports = index;
</script>
