<template>
    <div class="name">
      <h3 class="name_til">{{nametil}}</h3>
      <p class="name_tip">{{nametip}}</p>
      <ul class="name_main">
        <li v-for='namelist in namelists'>
          <a>
            <span><img :src="namelist.image" /></span>
            <span class="name_ico"></span>
          </a>
        </li>
      </ul>
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
  .name_main{
    -webkit-display: flex;
    width: 100%;
    height: 210px;
  }
  .name_main li{
    -webkit-flex: 1;
    width: 255px;
    height: 204px;
    float: left;
    border: 3px solid #309ed9;
  }
  .name_main li img{
    width: 255px;
    height: 204px;
  }
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js');
Mock.mock('http://name.cn',{
    "array|3":[{
        'image': '@image'
    }]
});
var name = Vue.extend({
    name: 'name',
    data: function() {
        return {
          nametil:'修改称号',
          nametip:'称号最多选两个：',
          namelists:null
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
      var _this = this;
      $.ajax({
          url: 'http://name.cn',
          dataType: 'json',
          success: function(data) {
              _this.namelists = data.array;
              console.log(data);
          }
      })
    },
    methods: {

    }
});

module.exports = name;
</script>
