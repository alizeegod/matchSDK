<template>
    <div class="tips">
      <h3 class="tips_til"><span></span>{{tips_til}}</h3>
      <div class="tips_main">
        <ul>
          <li v-for='tiplist in tipslists'>
            <a v-link="{path:'/mine/tips'}">
              <p><span class="tips_reply">{{tiplist.name}}</span>回复：</p>
              <p class="tips_replytxt"><span>{{tiplist.reply}}</span><i v-show="tips_show"></i></p>
              <p>我:<span class="tips_question">{{tiplist.question}}？</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<style soped>
.tips{
  width: 100%;
  position: relative;
}
.tips_til{
  height: 56px;
  text-align: center;
  line-height: 56px;
  background: #1a212e;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
}
.tips_main{
  font-size: 21px;
  width: 95%;
  margin: 0 auto;
  padding: 21px 0;
}
.tips_main ul li{
  color: #557fbd;
  margin-bottom: 21px;
}
.tips_main ul li a{
  color: #557fbd;
}
.tips_main ul li a p{
  margin-bottom: 10px;
  position: relative;
}
.tips_main ul li a .tips_reply{
  color: #e1e1e1;
}
.tips_main ul li a .tips_reply{
  color: #e1e1e1;
}
.tips_main ul li a p:last-child{
  color: #999;
  background: #2f333d;
}
.tips_main ul li a .tips_replytxt span{
  display: inline-block;
  width: 93%;
}
.tips_main ul li a .tips_replytxt i{
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f05922;
  position: absolute;
  right: 21px;
  top: 7px;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var Mock = require('mockjs');

Mock.mock('http://tips.cn',{
  "array|1-10":[{
      'name': '@name',
      'reply':'@title',
      'question':'@title'
  }]
});
var tips = Vue.extend({
    name: 'tips',
    data: function() {
        return {
          tips_til:'消息提醒',
          tipslists:{},
          tips_show:true
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
    created: function() {
      var _this = this;
      $.ajax({
          url: 'http://tips.cn',
          dataType: 'json',
          success: function(data) {
              _this.tipslists = data.array;
          }
      })
    },
  	ready: function() {
  		// this.msg = this.alertConfig.msg;

  	},
    methods: {

    }
});

module.exports = tips;
</script>
