<style soped>
.gamedetail{
  width: 100%;
  position: relative;
  box-sizing:border-box;
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
.gamedl_top{
  width: 98%;
  height: 76px;
  background: url(../../images/gamedl_topbg.png) no-repeat;
  background-size: 100% 100%;
  padding: 6px 0;
  margin: 12px auto;
}
.gdetail_img{
  position: relative;
  width: 142px;
  height: 74px;
  border: 1px solid #91959a;
  margin:0 28px 0 6px;
  float: left;
}
.gdetail_img img{
  width: 142px;
  height: 74px;
  display: inline-block;
}
.gdetail_img p{
  width: 100%;
  height: 19px;
  line-height: 19px;
  font-weight: bold;
  display: block;
  text-align: center;
  font-size: 13px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: inline-block;
}
.gdetail_img p span{
  display: inline-block;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(-90deg,#fffadd,#f8ea96);
  -webkit-background-clip: text;
  color: rgba(0,0,0,0);
}
.gamedl_top ul{
  display: flex;
  -webkit-display:flex;
  width: 60%;
}
.gamedl_top ul li{
  flex-grow:1;
  -webkit-flex-grow:1;
}
.gamedl_top ul li span{
  display: block;
  margin-top: 10px;
}
.gamedl_top ul li span:first-child{
  color: #728198;
  font-size: 17px;
}
.gamedl_top ul li span:last-child{
  color: #cedde1;
  font-size: 18px;
}
.gdetail_result{
  width: 97.7%;
  border: 1px solid #393f53;
  border-radius: 2px;
  padding: 21px 0;
  margin: 0 auto;
  overflow: hidden;
}
.gd_rtil{
  font-size: 13px;
  color: #fffefe;
  height: 27px;
  line-height: 27px;
  text-align: center;
  padding: 0 6px;
  margin: 21px 0 21px 35px;
  display: inline-block;
  border-radius: 2px;
}
.gd_lmj_til{
  background: #1d9618;
  box-shadow: 5px 5px 5px #21af1b inset;
}
.gd_fpj_til{
  background: #ae0c25;
  box-shadow: 0px -5px 5px #b33a21 inset;
}
.gd_res_title,.gdetail_succeed{
  color: #5d8ca3;
  font-size: 18px;
  width: 96%;
  padding-left: 4%;
}
.gd_res_title{
  margin-bottom: 14px;
}
.gd_res_title li,.gdetail_succeed li span{
  display: inline-block;
  text-align: center;
}
.gd_res_title li:last-child,.gdetail_succeed li span:last-child{
  width: 29%;
}
.gd_res_title li:first-child,.gdetail_succeed li span:first-child{
  width: 25%;
  text-align: left;
}
.gd_res_title li:nth-of-type(2),.gd_res_title li:nth-of-type(3),.gdetail_succeed li span:nth-of-type(2),.gdetail_succeed li span:nth-of-type(3){
  width: 22%;
}
.gdetail_succeed{
  border-top: 1px solid #2b303d;
  border-bottom: 1px solid #2b303d;
  padding-bottom: 10px;
}
.gdetail_succeed li{
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 17px;
  color: #e1e1e1;
}
.gdetail_succeed li a{
  color: #e1e1e1;
}
.gdetail_succeed li .gdetail_pic{
  width: 37px;
  height: 36px;
  display: inline-block;
  background: url(../../images/gdetail_picbg.png) no-repeat;
  background-size: 100% 100%;
  vertical-align: middle;
  margin-right: 15px;
  position: relative;
}
.gdetail_succeed li .gdetail_pic img{
  display: inline-block;
  width: 35px;
  height: 34px;
  position: absolute;
  top: 1px;
  left: 1px;
}
.gdetail_succeed li a span:first-child{
  color: #6192e9;
}
.gdetail_succeed li.active{
  background: #293b5d;
}
.gdetail_succeed li.active a span:first-child{
  color: #e9be4a;
}
</style>
<template>
    <div class="gamedetail">
      <h3 class="grank_til">{{gamedetailtil}}</h3>
      <div class="gamedl_main">
        <div class="gamedl_top">
          <div class="gdetail_img">
              <img :src="gdetailtopdata.src" />
              <p><span>{{gdetailtopdata.gdetailtitle}}</span></p>
          </div>
          <ul>
            <li><span>{{gdetailtopdata.gdgame_type}}</span><span>{{gdetailtopdata.gdgame_typeval}}</span></li>
            <li><span>{{gdetailtopdata.gdbs_type}}</span><span>{{gdetailtopdata.gdbs_typeval}}</span></li>
            <li><span>{{gdetailtopdata.gd_time}}</span><span>{{gdetailtopdata.gd_timeval}}</span></li>
          </ul>
        </div>
        <div class="gdetail_result">
          <p class="gd_rtil gd_lmj_til">{{gdetailtopdata.succeed}}</p>
          <ul class="gd_res_title">
            <li>{{gdetailtopdata.gd_lmj_name}}</li>
            <li>{{gdetailtopdata.gd_lmj_junx}}</li>
            <li>{{gdetailtopdata.gd_lmj_duanw}}</li>
            <li>{{gdetailtopdata.gd_lmj_shot}}</li>
          </ul>
          <ul class="gdetail_succeed">
            <li v-for='gdetail_succeedlist in gdetail_suclists' :class="gdetail_succeedlist.id == userMsg.id ? 'active' : ''">
              <a v-link="{path:'/mine/gamedetail'}">
                <span><i class="gdetail_pic"><img :src="gdetail_succeedlist.src" /></i>{{gdetail_succeedlist.name}}</span>
                <span>{{gdetail_succeedlist.gd_jx}}</span>
                <span>{{gdetail_succeedlist.gd_dw}}</span>
                <span>{{gdetail_succeedlist.gd_num1}}-{{gdetail_succeedlist.gd_num2}}</span>
              </a>
            </li>
          </ul>
          <p class="gd_rtil gd_fpj_til">{{gdetailtopdata.fail}}</p>
          <ul class="gd_res_title">
            <li>{{gdetailtopdata.gd_fpj_name}}</li>
            <li>{{gdetailtopdata.gd_fpj_junx}}</li>
            <li>{{gdetailtopdata.gd_fpj_duanw}}</li>
            <li>{{gdetailtopdata.gd_fpj_shot}}</li>
          </ul>
          <ul class="gdetail_succeed">
            <li v-for='gdetai_faillist in gdetai_faillists' :class="gdetai_faillist.id == userMsg.id ? 'active' : ''">
              <a v-link="{path:'/mine/gamedetail'}">
                <span><i class="gdetail_pic"><img :src="gdetai_faillist.src" /></i>{{gdetai_faillist.name}}</span>
                <span>{{gdetai_faillist.gd_jx}}</span>
                <span>{{gdetai_faillist.gd_dw}}</span>
                <span>{{gdetai_faillist.gd_num1}}-{{gdetai_faillist.gd_num2}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var Mock = require('mockjs');

Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js');
Mock.mock('http://gdetailtop.cn',{
    "array":{
        'src' : '@image',
        'gdetailtitle':'@ctitle',
        'gdgame_type':'游戏模式',
        'gdbs_type':'比赛模式',
        'gd_time':'比赛时间',
        'gdgame_typeval':'排位赛',
        'gdbs_typeval':'团队模式',
        'gd_timeval':'一个小时前',
        'gd_lmj_name':'玩家',
        'gd_lmj_junx':'军衔',
        'gd_lmj_duanw':'段位',
        'gd_lmj_shot':'击杀-死亡',
        'gd_fpj_name':'玩家',
        'gd_fpj_junx':'军衔',
        'gd_fpj_duanw':'段位',
        'gd_fpj_shot':'击杀-死亡',
        'succeed':'联盟军:胜利',
        'fail':'反叛军:失败'
    }
});
Mock.mock('http://gdetail_succeedlist.cn',{
    "array|1-5":[{
        'src' : '@image',
        'name': '@name',
        'gd_jx':'下士',
        'gd_dw':'白银Ⅳ',
        'gd_num1|1-10': 10,
        'gd_num2|1-10': 10,
        'id|1-10' : 2
    }]
});
Mock.mock('http://gdetai_faillist.cn',{
    "array|1-5":[{
        'src' : '@image',
        'name': '@name',
        'gd_jx':'下士',
        'gd_dw':'白银Ⅳ',
        'gd_num1|1-10': 10,
        'gd_num2|1-10': 10,
        'id|1-10' : 1
    }]
});
var gamedetail = Vue.extend({
    name: 'gamedetail',
    data: function() {
        return {
            gdetailtopdata:{},
            gdetail_suclists:{},
            gdetai_faillists:{},
            gamedetailtil:'排位赛-连胜之王',
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
          url: 'http://gdetailtop.cn',
          dataType: 'json',
          success: function(data) {
              _this.gdetailtopdata = data.array;
          }
      })
      $.ajax({
          url: 'http://gdetail_succeedlist.cn',
          dataType: 'json',
          success: function(data) {
              _this.gdetail_suclists = data.array;
          }
      })
      $.ajax({
          url: 'http://gdetai_faillist.cn',
          dataType: 'json',
          success: function(data) {
              _this.gdetai_faillists = data.array;
          }
      })
    },
    ready: function() {
  		  console.log(this.userMsg.id)

  	},
    methods: {

    }
});

module.exports = gamedetail;
</script>
