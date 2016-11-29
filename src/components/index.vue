<style>
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
.clearfix{overflow:hidden;_height:1%}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; } 
.clear{clear: both;}
.fl{float: left;}
.fr{float: right;}
*{margin: 0; padding: 0; -webkit-text-size-adjust: none;}
*:not(input,textarea) { 
-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;
} ol,ul,i{list-style: none; font-style: normal;}
 a{text-decoration: none; } a, button, input,div {-webkit-tap-highlight-color: rgba(255,0,0,0); } 
 html,body{height: 100%; } body{font-family:"HelveticaNeue-Light", "Helvetica Neue Light","Clockopia"; height: 100%; } 
body{background: #050D19;word-wrap:break-word;word-break:break-all;}
.shupingts{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999999999;
    overflow: hidden;
}
.shupingts{display: none;}
@media screen and (orientation:portrait) {
    .shupingts{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        overflow: hidden;
        display: block;
        z-index: 99999999999;
        background: rgba(0,0,0,.8);
    }
    .shupingts p{
        font-size: 14px;
        color: #fff;
        width: 100%;
        text-align: center;
        margin-top: 100px;
    }
}
.loading-1{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:3;
    background:#050d19;
    color: #fff;
}
.loading-1 div{
  width:110px;
  height:15px;
  position: absolute;
  left: 50%;
  top:50%;
  margin:-7px 0 0 -55px;
}
.loading-1 span{
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  margin: 6px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  vertical-align: middle;
  -webkit-animation: rotate 0.75s linear infinite;
  animation: rotate 0.75s linear infinite;
}
@-webkit-keyframes rotate {
  from {-webkit-transform:rotate(0deg);}
  to {-webkit-transform:rotate(360deg);}
}
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
    font-size: 12px;
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
  width: 25.92px;
  height: 23.04px;
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
/*TIPS*/
.tack{
  position: fixed;
  width: 100%;
  height: 20px;
  text-align: center;
  line-height: 20px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-size: 14px;
  color: #fff;
  z-index: 99999999;
}
.tack p{
  display: inline-block;
  padding: 5px 8px;
  border-radius: 3px;
  background: rgba(43,47,54,.75);
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
          <li v-link="{path:'/mine',query:{userid:userMsg.userid}}">
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
    <!-- 弹窗 -->  
  <div class="pop_guide_task" id="pop2" style="height: 414px;">
    <div class="pop">
      <div class="pop_body">
        <p class="pop_p2"></p> 
          <a href="javascript:;" class="pop_btn" style="display:none;">确定</a>
      </div>
    </div>
  </div>
  <!-- loading -->  
  <div class="loading-1">
    <div>
    <span></span>加载中...
    </div>
  </div> 
  <div class="tack" v-show="alertConfig.show">
      <p>{{alertConfig.msg}}</p>
  </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../store/store.js');
var actions = require('../store/actions.js');

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
          },
          alertConfig: function() {
              return store.state.alertConfig;
          }
      },
      actions: actions
  },
	created: function() {
        var _this = this;
        console.log(gload_conf)
        actions.set(store,{userid:gload_conf.uid,iphone:gload_conf.bindphone})
  }
});

module.exports = index;
</script>
