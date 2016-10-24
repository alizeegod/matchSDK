<template>
<h3 class="name_til">{{bindtil}}</h3>
<div class="bind">
  <span>{{ bind_msg01 }}</span>
  <input type="tel" v-model="number" placeholder="">
  <span>{{ bind_msg02 }}</span>
  <input type="text" placeholder="">
</div>
</template>
<style soped>
li,ul{list-style: none}
.name_til{
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #1d2532;
  color: #fff;
  font-size: 32px;
}
.bind{
  color: #fff;
}
.bind input{
  width: 462px;
  height: 60px;
  line-height: 60px;
  background: #a9b3bf;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var bind = Vue.extend({
    name: 'bind',
    data: function() {
        return {
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
