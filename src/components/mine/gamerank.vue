<template>
  <div class="gamerank">
    <h3 class="grank_til">{{gameranktil}}</h3>
    <div class="grank_main">
      <h3 class="mine_maintil"><span></span>{{mine_maintil}}</h3>
      <!--我的比赛-->
      <div class="grank_mybs clearfix">
        <img class="grank_img" :src="grankData.src" />
        <ul>
          <li><span class="grankyellow">{{grankData.score}}</span><span class="gr_mbstil">{{grankData.scoretil}}</span></li>
          <li><span class="grankyellow"><em>{{grankData.granknum1}}</em>/<em>{{grankData.granknum2}}</em></span><span class="gr_mbstil">{{grankData.gr_succeed}}/{{grankData.gr_fail}}</span></li>
          <li><span class="grankyellow">{{grankData.granking}}</span><span class="gr_mbstil">{{grankData.grnktil}}</span></li>
          <li><span class="grank_icobg"></span><span class="gr_mbstil">查看总榜</span></li>
        </ul>
      </div>
      <h3 class="mine_maintil"><span></span>{{grank_note}}</h3>
      <div class="granklist">
        <ul class='gr_listtil'>
          <li>{{gr_maptil}}</li>
          <li></li>
          <li>{{gr_nametil}}</li>
          <li>{{gr_timetil}}</li>
          <li>{{gr_resultil}}</li>
          <li></li>
        </ul>
        <ul class='gr_listcon'>
          <li v-for='granklist in granklists'>
            <a v-link="{path:'/mine/gamedetail'}">
              <span><img class="grank_img" :src="granklist.src" /></span>
              <span>{{granklist.grank_type}}</span>
              <span>{{granklist.snum1}}-{{granklist.snum2}}</span>
              <span>{{granklist.timenum}}{{granklist.timetext}}</span>
              <span class="grank_succeed" v-if="ok">{{granklist.gr_succeed}}</span>
              <span class="grank_fail" v-else>{{granklist.gr_fail}}</span>
              <span><i></i></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style soped>
li,ul{list-style: none}
.fl{float: left}
.fr{float: right}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; }
.clearfix{clear: both;}
.gamerank{
  width: 100%;
  position: relative;
}
.grank_til{
  height: 56px;
  text-align: center;
  line-height: 56px;
  background: #1a212e;
  color: #fff;
  font-size: 24px;
  font-weight: normal;
}
.mine_maintil{
  font-size: 21px;
  height: 49px;
  line-height: 49px;
  margin-left: 18px;
  color: #ccc;
}
.mine_maintil span{
  display: inline-block;
  background: #608be9;
  width: 4px;
  height: 22px;
  position: relative;
  top: 4px;
  margin-right: 8px;
}
.gamerank{
   color: #4e748b;
   font-size: 24px;
}
.grank_main .grank_img{
   display: inline-block;
   width: 154px;
   height: 91px;
   margin-left: 18px;
}
.grank_mybs ul{
  display: flex;
  -webkit-display:flex;
  width: 81%;
  float: right;
  margin-top: 32px;
}
.grank_mybs ul li{
  flex-grow:1;
  -webkit-flex-grow:1;
  text-align: center;
  font-size: 21px;
}
.grank_mybs ul li span{
  display: inline-block;
  width: 100%;
  text-align: center;
}
.grank_mybs ul li em{
  font-style: normal;
}
.grank_mybs ul li .grankyellow{
  color: #e4bf4e;
}
.grank_mybs ul li .gr_mbstil{
  color: #586075;
}
.grank_mybs ul li .grank_icobg{
  margin-top: -28px;
  width: 49px;
  height: 49px;
  background: url(../../images/grank_ico1.png) no-repeat;
  background-size: 100% 100%;
}
.granklist{
  color: #5d8ca3;
  font-size: 18px;
}
.granklist .gr_listtil{
  border-bottom: 1px solid #323e56;
  padding-bottom: 7px;
  width: 100%;
}
.granklist .gr_listtil li{
  display: inline-block;
  text-align: center;
}
.gr_listcon li{
  width: 100%;
  border-bottom: 1px solid #323e56;
  padding: 20px 0;
}
.gr_listcon li a{
  color: #5d8ca3;
}
.gr_listcon li span{
  display: inline-block;
  text-align: center;
}
.gr_listcon li span img{
  vertical-align: middle;
}
.gr_listcon li span:nth-of-type(1),.granklist .gr_listtil li:nth-of-type(1){
  width: 25%;
}
.granklist .gr_listtil li:nth-of-type(2),.gr_listcon li span:nth-of-type(2){
  width: 15%;
}
.granklist .gr_listtil li:nth-of-type(3),.granklist .gr_listtil li:nth-of-type(4),.granklist .gr_listtil li:nth-of-type(5),.granklist .gr_listtil li:nth-of-type(6),.gr_listcon li span:nth-of-type(3),
.gr_listcon li span:nth-of-type(4),.gr_listcon li span:nth-of-type(5),.gr_listcon li span:nth-of-type(6){
  width: 14.2%;
}
.gr_listcon li span:nth-of-type(6) i{
  width: 17px;
  height: 29px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: inline-block;
  top: 9px;
}
.gr_listcon li .grank_succeed{
  color: #2e93e8;
}
.gr_listcon li .grank_fail{
  color: #d02939;
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
Mock.mock('http://granktop.cn',{
  "array":{
      'src':'@image',
      'score|1-1000000': 1000000,
      'scoretil':'积分',
      'granknum1|1-10': 10,
      'granknum2|1-10': 10,
      'gr_succeed':'胜',
      'gr_fail':'负',
      'granking|1-100': 100,
      'grnktil':'排名'
    }
});
Mock.mock('http://granklist.cn',{
  "array|1-10":[{
      'src':'@image',
      'snum1|1-100': 100,
      'snum2|1-100': 100,
      'grank_type':'@ctitle',
      'timenum|1-25':25,
      'timetext':'小时前',
      'gr_succeed':'胜',
      'gr_fail':'负'
    }]
});
var gamerank = Vue.extend({
    name: 'gamerank',
    data: function() {
        return {
          gameranktil:'排位赛-连胜之王',
          mine_maintil:'我的比赛',
          grankData:{},
          granklists:{},
          ok: true,
          grank_note:'我的战斗记录',
          gr_maptil:'地图',
          gr_nametil:'击杀-死亡',
          gr_timetil:'时间',
          gr_resultil:'结果'
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
          url: 'http://granktop.cn',
          dataType: 'json',
          success: function(data) {
              _this.grankData = data.array;
          }
      })
      $.ajax({
          url: 'http://granklist.cn',
          dataType: 'json',
          success: function(data) {
              _this.granklists = data.array;
              console.log(_this.granklists);
          }
      })
    },
    ready: function() {
  		// this.msg = this.alertConfig.msg;

  	},
    methods: {

    }
});

module.exports = gamerank;
</script>
