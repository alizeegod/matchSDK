<style soped>
li,ul{list-style: none}
.fl{float: left}
.fr{float: right}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; }
.clearfix{clear: both;}
.gamerank{
   width: 100%;
   color: #4e748b;
   font-weight: normal;
   position: relative; 
}
.grank_til{ 
  height: 32px; 
  text-align: center;
  line-height: 32px;
  background: #1a212e;
  color: #fff;
  font-size: 16px;
  font-weight: normal;
}
.mine_maintil{
  font-size: 14px;
  height: 49px;
  line-height: 49px;
  margin-left: 18px;
  color: #ccc;
  font-weight: normal;
}
.mine_maintil span{
  display: inline-block;
  background: #608be9;
  width: 4px;
  height: 18px;
  position: relative;
  top: 3px;
  margin-right: 8px;
}
.grank_main .grank_img{
   display: block;
   width: 20%;
   height: 60px;
   float: left;
   margin-left: 18px;
}
.grank_main .grank_img img{
  width: 90%;
  height: 100%;
  display: block;
}
.grank_mybs{
  position: relative;
}
.grank_mybs ul{
  display: flex;
  -webkit-display:flex;
  width: 80%;
  float: right;
  position: absolute;
  right: 0;
  bottom: 0;
}
.grank_mybs ul li{
  flex-grow:1;
  -webkit-flex-grow:1;
  text-align: center;
  font-size: 12px;
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
  width: 25px;
  height: 25px;
  background: url(../../images/grank_ico1.png) no-repeat;
  background-size: 100% 100%;
}
.granklist{
  color: #5d8ca3;
  font-size: 12px;
}
.granklist .gr_listtil{
  border-bottom: 1px solid #323e56;
  width: 100%;
  padding-bottom: 4px;
  overflow: hidden;
}
.granklist .gr_listtil li{
  display: block;
  float: left;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.gr_listcon li{
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #323e56;
  padding: 10px 0;
}
.gr_listcon li a{
  color: #5d8ca3;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.gr_listcon li span{
  display: block;
  float: left;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.gr_listcon li span img{
  vertical-align: middle;
}
.gr_listcon li span:nth-of-type(1),.granklist .gr_listtil li:nth-of-type(1){
  width: 20%;
  overflow: hidden;
}
.granklist .gr_listtil li:nth-of-type(2),.gr_listcon li span:nth-of-type(2){
  width: 20%;
}
.granklist .gr_listtil li:nth-of-type(3),.gr_listcon li span:nth-of-type(3){
  width: 16%;
}.granklist .gr_listtil li:nth-of-type(4),.gr_listcon li span:nth-of-type(4){
  width: 20%;
}.granklist .gr_listtil li:nth-of-type(5),.gr_listcon li span:nth-of-type(5){
  width: 15%;
}.granklist .gr_listtil li:nth-of-type(6),.gr_listcon li span:nth-of-type(6){
  width: 9%;
}
.gr_listcon li span:nth-of-type(1) img{
  display: block;
  width: 90%;
  height: 100%;
  padding-left: 18px;
  box-sizing: border-box;
}
.gr_listcon li span:nth-of-type(6) i{
  width: 9.6px;
  height: 17px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 21.5px;
  display: block;
}
.gr_listcon li .grank_succeed{
  color: #2e93e8;
}
.gr_listcon li .grank_fail{
  color: #d02939;
}
</style>
<template>
  <div class="gamerank">
    <h3 class="grank_til">{{mygame.title}}</h3>
    <div class="grank_main">
      <h3 class="mine_maintil"><span></span>{{mine_maintil}}</h3>
      <!--我的比赛-->
      <div class="grank_mybs clearfix">
        <div class="grank_img" v-link="{path:'/match/linejj/'+$route.query.matchid}">
          <img :src="mygame.banner" />
        </div>
        <ul>
          <li><span class="grankyellow">{{rankKey}}</span><span class="gr_mbstil">{{rankRule}}</span></li>
          <li><span class="grankyellow"><em>{{mygame.win}}/{{mygame.lost}}</em></span><span class="gr_mbstil">胜/负</span></li>
          <li><span class="grankyellow">{{mygame.rank}}</span><span class="gr_mbstil">排名</span></li>
          <li v-link="{name:'gamerank',query:{matchid:$route.query.matchid,userid:$route.query.userid}}"><span class="grank_icobg"></span><span class="gr_mbstil">查看总榜</span></li>
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
          <li v-for='list in mygame.lists'>
            <a v-link="{name:'gamedetail',query:{matchid:$route.query.matchid,fightid:list.fightid}}">
              <span><img :src="list.map" /></span>
              <span>{{list.modename}}</span>
              <span>{{list.kill}}/{{list.died}}</span>
              <span>{{list.time}}</span>
              <span class="grank_succeed" v-if="list.result == 1">胜</span>
              <span class="grank_fail" v-else>负</span>
              <span><i></i></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var mygame = Vue.extend({
    name: 'mygame',
    data: function() {
        return {
          mygame: {},
          mine_maintil:'我的比赛',
          grank_note:'我的战斗记录',
          gr_maptil:'地图',
          gr_nametil:'击杀-死亡',
          gr_timetil:'时间',
          gr_resultil:'结果',
          rankRule: '',
          rankKey: ''
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

      $.ajax({
          url: ROOTPATH + '/my/match-record.lg' + QUERY,
          dataType: 'json',
          type: 'POST',
          data: {matchid: _this.$route.query.matchid,userid: _this.$route.query.userid},
          beforeSend:function(){
              $(".loading-1").show();
          },
          success: function (data) {
              $(".loading-1").hide();
              console.log(data)
              if (data.code == 0) {
                  _this.mygame = data.data.mygame;
                  _this.rankRule = gload_conf.rankRules[data.data.mygame.rankRule].name;
                  var key = gload_conf.rankRules[data.data.mygame.rankRule].key;
                  _this.rankKey = data.data.mygame[key];
              } else if (data.code < 0) {
                  actions.alert(store,{show:true,msg:data.msg})
              }
          }
      })
    },
    ready: function() {
        let a = this.$route.query.userid;
        let b = this.userMsg.userid;
        console.log(a,b)
        if (a == b) {
            this.mine_maintil = '我的比赛';
            this.grank_note = '我的战斗记录';
        } else {
            this.mine_maintil = 'TA的比赛';
            this.grank_note = 'TA的战斗记录';
        }
        console.log(gload_conf.rankRules[0].name)

    },
    methods: {
      
    }
});

module.exports = mygame;
</script>
