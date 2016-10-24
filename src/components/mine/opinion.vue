<template>
<div class="opinion">
  <h3 class="gamer_til">{{opiniontil}}</h3>
  <div class="opmain">
    <p>{{opiniontip}}</p>
    <br>
    <textarea v-model="message" placeholder=""></textarea>
    <button class="op_btn" v-bind:disabled="someDynamicCondition">提交</button>
  </div>
</div>
</template>
<style soped>
.gamer_til{
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #1d2532;
  color: #fff;
  font-size: 32px;
}
.opinion{
  color: #fff;
}
.opinion textarea{
  width: 96%;
  height: 100px;
  margin: 0 auto;
  display: block;
}
.op_btn{
  background: #309ed9;
  border-radius: 10px;
  color: #fff;
  height: 60px;
  line-height: 60px;
  width: 180px;
  margin: 10px 0 0 20px;
  font-size: 32px;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var opinion = Vue.extend({
    name: 'opinion',
    data: function() {
        return {
          opiniontil:'意见反馈',
          opiniontip:'问题与意见'
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

module.exports = opinion;
</script>
