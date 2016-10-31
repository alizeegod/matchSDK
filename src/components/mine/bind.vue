<style soped>
.bind-content{
    width: 100%;
}
.bind-title{
    width: 100%;
   height: 50px;
  text-align: center;
  line-height: 50px;
  background: #1A212E;
  color: #e1e1e1;
  font-size: 24px;
}
.bind-if p{
  margin-left: 40px;
  margin-top: 15px;
  color: #e1e1e1;
  font-size: 20px;
  line-height: 1.8;
}
.bind-form{
  margin-left: 40px;
  color: #e1e1e1;
  font-size: 20px;
}
.bind-form label{
  width: 120px;
  line-height: 40px;
  display: block;
  float: left;
}
.bind-form input{
  width: 285px;
  height: 40px;
  line-height: 40px;
  display: block;
  border: 0;
  background: #a9b3bf;
  color: #000;
  padding-left: 15px;
  float: left;
}
.bind-form .bind-yzm,.bind-form .bind-iphone{
  margin: 15px 0;
  overflow: hidden;
}
.bind-form .bind-yzm input{
  width: 135px;
}
.bind-form .bind-yzm span{
  display: block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  float: left;
  background: #2F9ED9;
  color: #fff;
  text-align: center;
  margin-left: 30px;
  border-radius: 5px;
}
.bind-btn{
  width: 420px;
  margin-top: 15px;
  overflow: hidden;
}
.bind-btn a{
  display: block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-decoration: center;
  border-radius: 5px;
  text-align: center;
}
.bind-btn a:nth-of-type(1){
  float: left;
  background: #2F9ED9;
}
.bind-btn a:nth-of-type(2){
  float: right;
  color: #555555;
  background: #a9b3bf;
}
</style>
<template>
  <div class="bind-content">
    <h3 class="bind-title">{{bindtil}}</h3>
    <div class="bind-if">
        <p v-if="isbing">你当前绑定的手机号；{{bindiphone}}</p>
        <p v-else>绑定手机号</p>
    </div>
    <form action="post" class="bind-form">
        <div class="bind-iphone">
            <label>新的手机号：</label>
            <input type="number">
        </div>
        <div class="bind-yzm">
            <label>短信验证码：</label>
            <input type="number">
            <span>获取验证码</span>
        </div>
        <div class="bind-btn">
            <a>完成</a> 
            <a>取消</a>
        </div>
    </form>
  </div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var bind = Vue.extend({
    name: 'bind',
    data: function() {
        return {
            isbing: false,
            bindtil:'修改绑定手机号',
            bind_msg01:'新的手机号',
            bind_msg02:'短信验证码'
        };
    },
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    ready: function() {

    },
    methods: {

    }
});

module.exports = bind;
</script>
