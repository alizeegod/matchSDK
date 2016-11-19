<style soped>
li,ul{list-style: none}
.fl{float: left}
.fr{float: right}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; }
.clearfix{clear: both;}
.gamerank{
   width: 100%;
   color: #4e748b;
   font-size: 24px;
   position: relative;
}
.grank_til{ 
  height: 50px; 
  text-align: center;
  line-height: 50px;
  background: #1a212e;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}
.mine_maintil{
  font-size: 18px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  margin-left: 18px;
}
.gr_listcon li span:nth-of-type(6) i{
  width: 12px;
  height: 21px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;
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
 <!-- v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()" -->
  <div class="gamerank">
    <h3 class="grank_til">{{mygame.title}}</h3>
    <div class="grank_main">
      <h3 class="mine_maintil"><span></span>{{mine_maintil}}</h3>
      <!--我的比赛-->
      <div class="grank_mybs clearfix">
        <div class="grank_img">
          <img :src="mygame.banner" />
        </div>
        <ul>
          <li><span class="grankyellow">{{mygame.integral}}</span><span class="gr_mbstil">积分</span></li>
          <li><span class="grankyellow"><em>{{mygame.outcome}}</em></span><span class="gr_mbstil">胜/负</span></li>
          <li><span class="grankyellow">{{mygame.matchrank}}</span><span class="gr_mbstil">排名</span></li>
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
            <a v-link="{name:'gamedetail',query:{gameid:list.game_id}}">
              <span><img :src="list.mapsrc" /></span>
              <span>{{list.mapname}}</span>
              <span>{{list.kd}}</span>
              <span>{{list.gametime}}</span>
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
          gameranktil:'排位赛-连胜之王',
          mine_maintil:'我的比赛',
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
            userMsg: function() {
                return store.state.userMsg;
            }
        },
        actions: actions
    },
    created: function() {
      var _this = this;

      $.ajax({
          url: ROOTPATH + '/my/mymatch.lg',
          dataType: 'json',
          type: 'GET',
          // data: {matchid: _this.$route.query.matchid},
          success: function (data) {
              // var data = JSON.parse(data);
              console.log(data.code)
              if (data.code == 0) {
                  console.log(data.data)
                  console.log(data.code)
                  _this.mygame = data.data;
              } else {
                  console.log(data.code)
              }
              

          }
      })
    },
    ready: function() {
        let a = this.$route.query.userid;
        let b = this.userMsg.id;
        if (a == b) {
            this.mine_maintil = '我的比赛';
            this.grank_note = '我的战斗记录';
        } else {
            this.mine_maintil = '他的比赛';
            this.grank_note = '他的战斗记录';
        }

        // let rH = document.documentElement.clientHeight;
        // $(".trank .prank-con").height(rH);

        
        // var me = this;
        // me.$options.vue = me

    },
    loadListData: function (fn) {
        var me = this.vue;
        console.log(me.page)
        $.ajax({
            url: ROOTPATH + '/match/teamlist.lg',
            dataType: 'json',
            type: 'POST',
            data: {type: 2,page:me.page,pagesize:12},
            success: function(data) {
                console.log(data)
                // _this.teamRanks = data.data.list;
                // console.log(_this.teamRanks)
                fn(data)
            }
        })
    },
    methods: {
      down_a: function () {
          var me = this;
          me.page += 1;
          me.$options.loadListData(function (data) {
              me.teamRanks = me.teamRanks.concat(data.data.list);
              if (data.data.totalPage <= me.page) {
                  me.ascroll.noData();
              }
              // 通过设置的key 方法下拉对象方法
              // 如果没有更多数据。你可以 调用 me.ascroll.noData()
              me.ascroll.resetload(true);
          });

      }
    }
});

module.exports = mygame;
</script>
