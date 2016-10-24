<template>
  <div class="gamerank">
    <h3 class="gamer_til">{{gameranktil}}</h3>
    <ul>
      <li v-for='mygamelist in lists'>
        {{mygamelist.msg}}
      </li>
    </ul>
    <ul class="mrank_main">
      <li v-for='mrm_list in mrmlists'>
        <a v-link='{path:mrm_list.url}'>
          <span><img :src="mrm_list.image" /></span>
          <span>{{mrm_list.name}}</span>
          <span>{{mrm_list.city}}</span>
          <span>{{mrm_list.number}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<style soped>
li,ul{list-style: none}
.gamer_til{
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: #1d2532;
  color: #fff;
  font-size: 32px;
}
.gamerank{
   color: #4e748b;
   font-size: 24px;
}
.gamerank ul{
  -webkit-display: flex;
  width: 100%;
}
.gamerank ul li{
  float: left;
  -webkit-flex: 1;
  height: 62px;
  line-height: 62px;
}
.mrank_main{
  width: 100%;
  color: #fff;
}
.mrank_main li{
  width: 100%;
  height: 94px;
  line-height: 94px;
  -webkit-display: flex;

}
.mrank_main li:nth-child(odd){
  background: #111a2b;
}

.mrank_main li:nth-child(even){
  background: #050d18;
}
.mrank_main li a{
  display: inline-block;
  color: #fff;
}
.mrank_main li a span{
-webkit-flex: 1;
}
.mrank_main li a span img{
  width: 55px;
  height: 55px;
  position: relative;
  top: 20px;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js');
Mock.Random.region();
Mock.mock('http://mine.cn',{
    "array|1-10":[{
        'name'     : '@name',
        'number|+1': 100,
        'url'    : '/mine/mygame',
        'image': '@image',
        'city':'@region'
    }]
});
var gamerank = Vue.extend({
    name: 'gamerank',
    data: function() {
        return {
          gameranktil:'排位赛-连胜之王',
          lists:[
            {msg:'排名'},
            {msg:'玩家'},
            {msg:'积分'}
          ],
          mrmlists:null
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
          url: 'http://mine.cn',
          dataType: 'json',
          success: function(data) {
              _this.mrmlists = data.array;
              console.log(data);
          }
      })
    },
    methods: {

    }
});

module.exports = gamerank;
</script>
