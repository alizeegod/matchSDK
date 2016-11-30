<style>
.fl{float: left}
.fr{float: right}
.clearfix:after { content: ".";display: block;height: 0;clear: both;visibility: hidden; }
.clearfix{clear: both;}
.mine_wrap{
  width: 99%;
  margin-left: 1%;
}
.mine_wrap .minelink,.mine_wrap .mine_mainlist{
    width: 100%;
    box-sizing:border-box;
    color: #fff;
    border-left: 1px solid #2d394f;
    border-bottom: 1px solid #2d394f;
}
.mine_wrap .minelink{
  padding: 8px 15px 3px;
}
.mine_wrap .mine_mainlist{ 
  margin-top: 5px;
  border-top: 1px solid #2d394f;
}
.mine_wrap .mine_mainlist h1{
    width: 100%;
    text-align: center;
    line-height: 4;
    font-size: 16px;
    color: #fff;
}
.mine_wrap .minelink a{
    color: #fff;
    font-size: 14px;
}
.ml_top{
  width: 100%;
  height: 57px;
  position: relative;
}
.minelink .mlink_name{
    width: 20%;
    font-size: 14px;
    padding-top: 10px;
    margin-right: 21px;
}
.minelink .ml_mainimgsrc{
    display: block;
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    margin-right: 10px;
}
.minelink .ml_mainimg{
    display: block;
    width: 16%;
    height: 30px;
    margin:8px 16px 0 0;
}
.minelink .ml_mainimg img{
    width: 100%;
    max-height: 100%;
    display: block;
}
.minelink .ml_msg_set a{
  display: inline-block;
  margin: 12px 0 0 42px;
  position: relative;
}
.minelink .ml_msg_set a:first-child{
  width: 18px;
  height: 22.3px;
  background: url(../../images/mine-tip.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_msg_set a:last-child{
  width: 22.3px;
  height: 22.3px;
  background: url(../../images/mine-set.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_msg_set a span{
  display: block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -15px;
  background: #ff3e3e;
  color: #fff;
  border-radius: 50%;
  text-align: center;
}
.minelink .ml_detail{
  width: 100%;
  margin-top: 8px;
}
.minelink .ml_detail ul{
  display: flex;
  -webkit-display:flex;
  justify-content: space-between;
}
.minelink .ml_detail ul li{
  height: 30px;
  line-height: 30px;
  display: -webkit-flex;
  -webkit-box-flex: 1;
  color: #a09b94;
  font-size: 12px;
}
.minelink .ml_detail ul li i{
  display: inline-block;
  position: relative;
  top: 6px;
  margin-right: 10px;
}
.minelink .ml_detail ul li em{
  display: inline-block;
  position: relative;
  font-style: normal;
}
.minelink .ml_detail ul li:nth-of-type(1) span{
  display: inline-block;
  height: 24px;
  background: #16273f;
  border: 1px solid #27436f;
  border-radius: 5px;
  padding: 0 8px;
  color: #fff;
  line-height: 24px;
}
.minelink .ml_detail ul li:nth-of-type(1) a{
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 12px;
  vertical-align: middle;
  margin-top: -2px;
  background: url(../../images/ico_wh_@3x.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_detail ul li:nth-of-type(1) i{
  width: 16px;
  height: 16px;
  background: url(../../images/mymine_zdl.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_detail ul li:nth-of-type(2) i{
  width: 17px;
  height: 16px;
  background: url(../../images/mymine_ph.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_detail ul li:nth-of-type(3) i{
  width: 16px;
  height: 16px;
  background: url(../../images/mymine_cs.png) no-repeat;
  background-size: 100% 100%;
}
.mine_maintil{
  height: 49px;
  line-height: 49px;
  margin-left: 15px;
  font-size: 14px;
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
.mine_mainlist ul li{
  background: #08111e;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #e1e1e1;
  border-bottom: 1px solid #353c4a;
  font-size: 14px;
}
.mine_mainlist ul li.active{
  background: #2b3a58;
  border-bottom: 1px solid #2b3a58;
}
.mine_mainlist ul li a{
  display: block;
  width: 100%;
  height: 100%;
  color: #e1e1e1;
}
.mine_mainlist ul li:last-child{
  border-bottom: 0;
}
.mine_mainlist ul li p{
  position: relative;
  display: block;
  float: left;
  height: 100%;
  overflow: hidden;
  font-size: 12px;
}
.mine_mainlist ul li p:nth-of-type(1){
  width: 22%;
  text-align: left;
}
.mine_mainlist ul li p:nth-of-type(1) span{
  display: block;
  margin-top: 15px;
  padding-left: 15px;
  line-height: 15px;
  width: 100%;
  height: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mine_mainlist ul li p:nth-of-type(1) span.mine_time{
  font-size: 0.6rem;
  margin-top: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mine_mainlist ul li p:nth-of-type(2){
  width: 22%;
  text-align: center;
}
.mine_mainlist ul li p:nth-of-type(3){
  width: 23%;
}
.mine_mainlist ul li p:nth-of-type(4){
  width: 25%;
}
.mine_mainlist ul li p:nth-of-type(5){
  width: 8%;
}
.mine_mainlist ul li p:nth-of-type(5) i{
  width: 10px;
  height: 17px;
  margin-top: 21.5px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  display: block;
}
.mine_mainlist ul li p:nth-of-type(2) span{
  font-style: normal;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  text-align: center;
  padding: 0 10px;
  border-radius: 5px;
  margin-top: 19px;
  background: #666;
}
.mine_mainlist ul li p:nth-of-type(2) span.not{
  background: #34a247;
}
.mine_mainlist ul li p:nth-of-type(2) span.active{
  background: #db2323;
}
.mine_mainlist ul li p:nth-of-type(2) span.over{
  background: #666;
}
.mine_mainlist ul li p em{
  font-style: normal;
}
.mine_mainlist ul li p .mine_num1{
  color: #fad83a;
}
</style>
<template>
  <div class="mine_wrap">
    <div class="minelink clearfix">
      <div class="ml_top clearfix">
        <img class="ml_mainimgsrc fl" :src="mine.avatar" />
        <div class="mlink_name fl">
          <p>{{mine.rolename}}</p>
          <p>{{mine.servername}}</p>
        </div>
        <div class="ml_mainimg fl" v-for="title in usertitle" v-show="title.ischeck == 1 ? true : false">
            <img :src="title.src"/>
        </div>
        <div class="ml_msg_set fr" v-if='show'>
          <a v-link="{path:'/mine/tips'}"><span v-if="tipsnum==0 ? false : true">{{tipsnum}}</span></a>
          <a v-link="{path:'/mine/setcof'}"></a>
        </div>
      </div>
      <div class="ml_detail">
        <ul>
          <li v-link="{name:'rule',query:{type:0}}"><i></i><span>战斗力: <em>{{mine.power}}</em><a></a></span></li>
          <li v-link="{name:'perrank'}"><i></i><span>国内排行: <em>{{mine.rank}}</em></span></li>
          <li><i></i><span>已参加比赛数: <em>{{mine.matchnum}}</em></span></li>
        </ul>
      </div>
    </div>
    <div class="mine_mainlist">
      <h3 class="mine_maintil" v-if="show"><span></span>我的比赛</h3>
      <h3 class="mine_maintil" v-else><span></span>TA的比赛</h3>
      <ul>
        <li v-for='list in lists'>
          <a  v-link="{name:'mygame',query:{matchid:list.matchid,userid:uid}}">
            <p>
              <span class="mine_name">{{list.name}}</span>
              <span class="mine_time">{{list.starttime}}-{{list.endtime}}</span>
            </p>
            <p>
                <span class="not" v-if="list.type == 3 ? true : false">报名中</span>
                <span class="active" v-if="list.type == 5 ? true : false">比赛中</span>
                <span class="over" v-if="list.type == 2 ? true : false">已结束</span>
            </p>
            <p v-if="list.type == 2 && list.addpower != 0 ? true : false">战斗力<em class="mine_num1">+{{list.addpower}}</em></p>
            <p v-else></p>
            <p>排名:<em class="mine_num2">{{list.rank}}</em></p>
            <p><i></i></p>
          </a>
        </li>
      </ul>
      <h1 v-if="lists.length <= 0 ? true : false">还没有报名比赛</h1>
    </div>
  </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var mine = Vue.extend({
	name: 'mine',
	data: function() {
		return {
            mine: {},
            lists: [],
            usertitle: [],
            uid: null,
            tipsnum: 0,
            show:true,
            aaaa: 10
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
      _this.uid = (_this.$route.query.userid == _this.userMsg.userid) ? _this.userMsg.userid : _this.$route.query.userid;
      $.ajax({
          url: ROOTPATH + '/my/index.lg' + QUERY,
          type: 'POST',
          dataType: 'json',
          data:{userid:_this.uid},
          beforeSend:function(){
              $(".loading-1").show();
          },
          success: function(data) {
              $(".loading-1").hide();
              if (data.code == 0) {
                  _this.mine= data.data.mine;
                  _this.lists= data.data.lists;
                  _this.tipsnum= data.data.tipsnum;
                  _this.usertitle= data.data.usertitle;
                  console.log(data)
              } else if(data.code < 0) {
                  actions.alert(store,{show:true,msg:data.msg})
              }
          }
      })
  },
	ready: function() {
		let a = this.$route.query.userid;
        let b = this.userMsg.userid;
        console.log(a,b)
        if (a == b || a === undefined) {
            this.show = true;
        } else {
            this.show = false;
        }
	},
  watch: {
    $route: function(val,oldval) {
      console.log(val.query.userid,oldval)
      var _this = this;
      let a = val.query.userid;
      let b = _this.userMsg.userid;
      console.log(a,b)
      if (a == b || a === undefined) {
          _this.show = true;
      } else {
          _this.show = false;
      }
      $.ajax({
          url: ROOTPATH + '/my/index.lg' + QUERY,
          type: 'POST',
          dataType: 'json',
          data:{uid:val.query.userid},
          beforeSend:function(){
              $(".loading-1").show();
          },
          success: function(data) {
              $(".loading-1").hide();
              if (data.code == 0) {
                  _this.mine= data.data.mine;
                  _this.lists= data.data.lists;
                  _this.tipsnum= data.data.tipsnum;
                  _this.usertitle= data.data.usertitle;
                  console.log(data)
              } else if(data.code < 0) {
                  actions.alert(store,{show:true,msg:data.msg})
              }
          }
      })
    }
  }
});

module.exports = mine;
</script>
