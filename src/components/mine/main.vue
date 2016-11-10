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
  padding: 12px 15px 5px;
}
.mine_wrap .mine_mainlist{
  margin-top: 10px;
  border-top: 1px solid #2d394f;
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
    font-size: 16px;
    padding-top: 4px;
    margin-right: 21px;
}
.minelink .ml_mainimgsrc{
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    margin-right: 10px;
}
.minelink .ml_mainimg{
    display: block;
    width: 16%;
    max-height: 30px;
    margin:8px 16px 0 0;
}
.minelink .ml_msg_set a{
  display: inline-block;
  margin: 10px 0 0 42px;
  position: relative;
}
.minelink .ml_msg_set a:first-child{
  width: 25px;
  height: 31px;
  background: url(../../images/mine-tip.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_msg_set a:last-child{
  width: 31px;
  height: 31px;
  background: url(../../images/mine-set.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_msg_set a span{
  display: block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  position: absolute;
  top: -8px;
  right: -21px;
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
  font-size: 14px;
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
  height: 28px;
  background: #16273f;
  border: 1px solid #27436f;
  border-radius: 5px;
  padding: 0 8px;
  color: #fff;
}
.minelink .ml_detail ul li:nth-of-type(1) a{
  display: inline-block;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  line-height: 19px;
  margin-left: 12px;
  background: url(../../images/mymine_help.png) no-repeat;
  background-size: 100% 100%;
  text-indent: -9999px;
  position: relative;
  top: -2px;
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
  font-size: 21px;
  height: 49px;
  line-height: 49px;
  margin-left: 15px;
  font-size: 18px;
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
.mine_mainlist ul li{
  background: #08111e;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #e1e1e1;
  border-bottom: 1px solid #353c4a;
  font-size: 16px;
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
  font-size: 16px;
}
.mine_mainlist ul li p:nth-of-type(1){
  width: 22%;
  text-align: left;
}
.mine_mainlist ul li p:nth-of-type(1) span{
  display: block;
  margin-top: 15px;
  margin-left: 15px;
  line-height: 15px;
  width: 100%;
  height: 15px;
  overflow: hidden;
}
.mine_mainlist ul li p:nth-of-type(1) span.mine_time{
  font-size: 12px;
  margin-top: 3px;
}
.mine_mainlist ul li p:nth-of-type(2){
  width: 17%;
  text-align: center;
}
.mine_mainlist ul li p:nth-of-type(3){
  width: 28%;
}
.mine_mainlist ul li p:nth-of-type(4){
  width: 25%;
}
.mine_mainlist ul li p:nth-of-type(5){
  width: 8%;
}
.mine_mainlist ul li p:nth-of-type(5) i{
  width: 12px;
  height: 21px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  display: block;
  margin-top: 20px;
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
  background: #666;
}
.mine_mainlist ul li p:nth-of-type(2) span.active{
  background: #34a247;
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
        <img class="ml_mainimgsrc fl" :src="mine.userImg" />
        <div class="mlink_name fl">
          <p>{{mine.username}}</p>
          <p>{{mine.userarea}}</p>
        </div>
        <img class="ml_mainimg fl" :src="title.src" v-for="title in mine.usertitle" v-show="title.ischeck" />
        <div class="ml_msg_set fr" v-if='show'>
          <a v-link="{path:'/mine/tips'}"><span>{{mine.tipsnum}}</span></a>
          <a v-link="{path:'/mine/setcof'}"></a>
        </div>
      </div>
      <div class="ml_detail">
        <ul>
          <li v-link="{name:'rule',query:{userid:userMsg.id}}"><i></i><span>战斗力: <em>{{mine.userpower}}</em><a>？</a></span></li>
          <li><i></i><span>国内排行: <em>{{mine.userrank}}</em></span></li>
          <li><i></i><span>已参加比赛数: <em>{{mine.matchnum}}</em></span></li>
        </ul>
      </div>
    </div>
    <div class="mine_mainlist">
      <h3 class="mine_maintil" v-if="show"><span></span>我的比赛</h3>
      <h3 class="mine_maintil" v-else><span></span>他的比赛</h3>
      <ul>
        <li v-for='list in mine.lists'>
          <a  v-link="{name:'mygame',query:{matchid:list.matchid,userid:$route.query.id}}">
            <p>
              <span class="mine_name">{{list.matchname}}</span>
              <span class="mine_time">{{list.matchtime}}</span>
            </p>
            <p>
                <span class="not" v-if="list.matchtype == 0">报名中</span>
                <span class="active" v-if="list.matchtype == 1">比赛中</span>
                <span class="over" v-if="list.matchtype == 2">已结束</span>
            </p>
            <p v-if="list.matchtype == 2">{{list.powertil}}<em class="mine_num1">+{{list.addpower}}</em></p>
            <p v-else></p>
            <p>排名<em class="mine_num2">{{list.matchrank}}</em></p>
            <p><i></i></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var Mock = require('mockjs');
Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js');

Mock.mock(ROOTPATH + 'mine',{
    "mine":{
        'userImg'            : 'http://10.0.11.19/svn/match/2.0/dist/images/prank-timg.png',
        'username'           : '@name',
        'userarea'           : '@region',
        'userrank|1-100'     : 1,
        'userpower|1-1000'   : 1,
        'matchnum|10-100'    : 1,
        'usertitle'          : [{
            'ischeck'    : true,
            'src'        : '@image'
        },{
            'ischeck'    : true,
            'src'        : '@image'
        }],
        'tipsnum|10-50'      : 1, 
        "lists|1-20": [{
            'matchid|1-50'       : 1,
            'matchname'          : '@name',
            'matchtime'          : '8月15日-8月15日',
            'matchtype|0-2'      : 0,
            'addpower|100-1000' : 0,
            'matchrank|10-100'   : 0
        }]
    }
});

var mine = Vue.extend({
	name: 'mine',
	data: function() {
		return {
            mine: {},
            show:true
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
        url: ROOTPATH + 'mine',
        dataType: 'json',
        // data:{userid:_this.userMsg.id},
        success: function(data) {
            _this.mine= data.mine;

        }
    })
  },
	ready: function() {
		let a = this.$route.query.id;
        let b = this.userMsg.id;
        if (a == b) {
            this.show = true;
        } else {
            this.show = false;
        }
        console.log(this.$route.query.id)
        console.log(this.userMsg.id)

	},
    methods: {

    }
});

module.exports = mine;
</script>
