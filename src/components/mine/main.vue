<template>
  <div class="mine_wrap">
    <div class="minelink clearfix">
      <div class="ml_top clearfix">
        <img class="ml_mainimgsrc fl" :src="mineData.src" />
        <div class="mlink_name fl">
          <p>{{mineData.minetil}}</p>
          <p>{{mineData.minecity}}</p>
        </div>
        <img class="ml_mainimg fl" :src="mineData.ml_mimg1" />
        <img class="ml_mainimg fl" :src="mineData.ml_mimg2" />
        <div class="ml_msg_set fr" v-show='show'>
          <a v-link="{path:'/mine/tips'}"><span>{{mineData.ml_num}}</span></a>
          <a v-link="{path:'/mine/set'}"></a>
        </div>
      </div>
      <div class="ml_detail">
        <ul>
          <li><i></i><span>战斗力: <em>{{mineData.ml_num_zdl}}</em><a>？</a></span></li>
          <li><i></i><span>国内排行: <em>{{mineData.ml_num_ph}}</em></span></li>
          <li><i></i><span>已参加比赛数: <em>{{mineData.ml_num_ss}}</em></span></li>
        </ul>
      </div>
    </div>
    <div class="mine_mainlist">
      <h3 class="mine_maintil"><span></span>{{mine_maintil}}</h3>
      <ul>
        <li v-for='m_list in m_lists'>
          <a  v-link="{path:'/mine/gamerank'}">
            <p>
              <span class="mine_name">{{m_list.typetil}}-{{m_list.name}}</span>
              <span class="mine_time"><span class="mt_1">{{m_list.mt_1}}</span>-<span class="mt_2">{{m_list.mt_2}}</span></span>
              <i class="on" v-if="ok">比赛中</i>
              <i v-else>已结束</i>
            </p>
            <p v-if="ok">{{m_list.powertil}}<em class="mine_num1">+{{m_list.mine_num1}}</em></p>
            <p v-else></p>
            <p>{{m_list.rank}}<em class="mine_num2">{{m_list.mine_num2}}</em></p>
            <p></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
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
  padding: 27px 0 10px;
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
    font-size: 20px;
    padding-top: 4px;
    margin-right: 21px;
}
.minelink .ml_mainimgsrc{
    display: block;
    width: 56px;
    height: 56px;
    border: 1px solid #000;
    margin: 0 22px 0 27px;
}
.minelink .ml_mainimg{
    display: block;
    width: 137px;
    height: 42px;
    margin:8px 0 0 16px;
}
.minelink .ml_msg_set a{
  display: inline-block;
  margin: 10px 42px 0 0;
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
  width: 94%;
  height: 40px;
  margin-top: 11px;
  padding: 0 3%;
}
.minelink .ml_detail ul{
  display: flex;
  -webkit-display:flex;
}
.minelink .ml_detail ul li{
  height: 32px;
  line-height: 32px;
  flex-grow:1;
  -webkit-flex-grow:1;
  color: #a09b94;
  font-size: 17px;
  font-size: 17px;
}
.minelink .ml_detail ul li i{
  display: inline-block;
  position: relative;
  top: 7px;
  margin-right: 10px;
}
.minelink .ml_detail ul li em{
  display: inline-block;
  position: relative;
  font-style: normal;
}
.minelink .ml_detail ul li:nth-of-type(1) span{
  display: inline-block;
  height: 31px;
  background: #16273f;
  border: 1px solid #27436f;
  border-radius: 10px;
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
  width: 29px;
  height: 29px;
  background: url(../../images/mymine_zdl.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_detail ul li:nth-of-type(2) i{
  width: 33px;
  height: 29px;
  background: url(../../images/mymine_ph.png) no-repeat;
  background-size: 100% 100%;
}
.minelink .ml_detail ul li:nth-of-type(3) i{
  width: 29px;
  height: 30px;
  background: url(../../images/mymine_cs.png) no-repeat;
  background-size: 100% 100%;
}
.mine_maintil{
  font-size: 21px;
  height: 49px;
  line-height: 49px;
  margin-left: 18px;
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
  height: 91px;
  line-height: 91px;
  color: #e1e1e1;
  border-bottom: 1px solid #353c4a;
  font-size: 18px;
}
.mine_mainlist ul li:hover{
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
  margin: 0 28px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
}
.mine_mainlist ul li p:nth-of-type(1){
  width: 30%;
  line-height: 24px;
  text-align: left;
  position: relative;
  top: 13px;
}
.mine_mainlist ul li p:nth-of-type(1) span{
  display: block;
}
.mine_mainlist ul li p:nth-of-type(1) span.mine_time{
  font-size: 13px;
}
.mine_mainlist ul li p:nth-of-type(2){
  width: 20%;
}
.mine_mainlist ul li p:nth-of-type(3){
  width: 15%;
}
.mine_mainlist ul li p:nth-of-type(4){
  width: 17px;
  height: 29px;
  background: url(../../images/prank-ico.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 9px;
}
.mine_mainlist ul li p i{
  font-style: normal;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  text-align: center;
  padding: 0 10px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 0;
  background: #666;
}
.mine_mainlist ul li p .mine_name{
  width: 72%;
  height: 24px;
  overflow: hidden;
}
.mine_mainlist ul li p i.on{
  background: #34a247;
}
.mine_mainlist ul li p em{
  font-style: normal;
}
.mine_mainlist ul li p .mine_num1{
  color: #fad83a;
}
.mine_mainlist ul li p .mine_time span{
  display: inline-block;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var Mock = require('mockjs');
Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js');
Mock.mock('http://minelist.cn',{
  "array|1-10":[{
      'name': '@name',
      'mine_num1|1-10000': 10000,
      'mine_num2|1-100': 100,
      'mt_1': '8月5日',
      'mt_2': '8月21日',
      'typetil':'排位赛',
      'powertil':'战斗力',
      'rank':'排名：'
  }]
});
Mock.mock('http://minetop.cn',{
  "array":{
      'src':'@image',
      'minetil':'@name',
      'minecity':'@region',
      'ml_mimg1':'@image',
      'ml_mimg2':'@image',
      'ml_num|1-100': 100,
      'ml_num_zdl|1-10000': 10000,
      'ml_num_ph|1-10000': 10000,
      'ml_num_ss|1-10000': 10000
  }
});

var mine = Vue.extend({
	name: 'mine',
	// store: store,
	data: function() {
		return {
			m_lists: {},
      mineData:{},
      ok: true,
      show:true,
      mine_maintil:'我的比赛'
		};
	},
	store: store,
	vuex: {
		getters: {
			userInf: function() {
				return store.state.userInf;
			}
		},
		actions: actions
	},
  created: function() {
    var _this = this;
    $.ajax({
        url: 'http://minelist.cn',
        dataType: 'json',
        success: function(data) {
            _this.m_lists = data.array;
        }
    })
    $.ajax({
        url: 'http://minetop.cn',
        dataType: 'json',
        success: function(data) {
            _this.mineData= data.array;
        }
    })
  },
	ready: function() {
		let a = this.$route.query.id;
    let b = this.userInf.id;
    if (a == b) {
      this.show = true;
    } else {
      this.show = false;
    }
    console.log(this.$route.query.id)
    console.log(this.userInf.id)

	},
    methods: {

    }
});

module.exports = mine;
</script>
