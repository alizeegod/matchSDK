<style soped>
.gamedetail{
  width: 100%;
  position: relative;
  box-sizing:border-box;
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
.gamedl_top{
  width: 98%;
  height: 66px;
  background: url(../../images/gamedl_topbg.png) no-repeat;
  background-size: 100% 100%;
  padding: 6px 0;
  margin: 12px auto;
}
.gdetail_img{
  position: relative;
  width: 20%;
  height: 64px;
  border: 1px solid #91959a;
  margin:0 28px 0 6px;
  float: left;
}
.gdetail_img img{
  width: 100%;
  height: 100%;
  display: block;
}
.gdetail_img p{
  width: 100%;
  height: 16px;
  line-height: 16px;
  font-weight: bold;
  display: block;
  text-align: center;
  font-size: 12px;
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
  margin-top: 8px;
}
.gamedl_top ul li span:first-child{
  color: #728198;
  font-size: 14px;
}
.gamedl_top ul li span:last-child{
  color: #cedde1;
  font-size: 16px;
}
.gdetail_result{
  width: 97.7%;
  border: 1px solid #393f53;
  border-bottom: 0;
  border-radius: 2px;
  margin: 0 auto;
  overflow: hidden;
}
.gd_rtil{
  font-size: 12px;
  color: #fffefe;
  height: 27px;
  line-height: 27px;
  text-align: center;
  padding: 0 6px;
  margin: 10px 4%;
  display: inline-block;
  border-radius: 2px;
}
.gd_rtil.suc{
  background: #1d9618;
  box-shadow: 5px 5px 5px #21af1b inset;
}
.gd_rtil.fail{
  background: #ae0c25;
  box-shadow: 0px -5px 5px #b33a21 inset;
}
.gd_res_title,.gdetail_succeed{
  color: #5d8ca3;
  font-size: 14px;
  width: 96%;
  padding-left: 4%;
}
.gd_res_title{
  margin-bottom: 7px;
  overflow: hidden;
}
.gd_res_title li,.gdetail_succeed li span{
  display: block;
  float: left;
  text-align: center;
  overflow: hidden;
}
.gd_res_title li:last-child,.gdetail_succeed li span:last-child{
  width: 30%;
}
.gd_res_title li:first-child,.gdetail_succeed li span:first-child{
  width: 24%;
  text-align: left;
}
.gd_res_title li:nth-of-type(2),.gd_res_title li:nth-of-type(3),.gdetail_succeed li span:nth-of-type(2),.gdetail_succeed li span:nth-of-type(3){
  width: 23%;
}
.gdetail_succeed li span{
  height: 64px;
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
  font-size: 14px;
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
      <h3 class="grank_til">{{gamedetail.title}}</h3>
      <div class="gamedl_main">
        <div class="gamedl_top">
          <div class="gdetail_img">
              <img :src="gamedetail.map" />
              <p><span>{{gamedetail.mapname}}</span></p>
          </div>
          <ul>
            <li><span>游戏模式</span><span>{{gamedetail.type}}</span></li>
            <li><span>比赛模式</span><span>{{gamedetail.mode}}</span></li>
            <li><span>比赛时间</span><span>{{gamedetail.time}}</span></li>
          </ul>
        </div>
        <div class="gdetail_result" v-for="(index,teamlist) in gamedetail.teamlists">
          <p class="gd_rtil" :class="index == 0 ? 'fail' : 'suc'">{{teamlist.title}}</p>
          <ul class="gd_res_title">
            <li>玩家</li>
            <li>军衔</li>
            <li>段位</li>
            <li>击杀-死亡</li>
          </ul>
          <ul class="gdetail_succeed">
            <li v-for='list in teamlist.lists' :class="list.userid == userMsg.userid ? 'active' : ''">
              <a @click="goto(list)">
                <span><i class="gdetail_pic"><img :src="list.avatar" onerror="this.src='http://7xq07i.com1.z0.glb.clouddn.com/avatar/qz/Icon_Head_33.png'"/></i>{{list.rolename}}</span>
                <span>{{list.rank}}</span>
                <span>{{list.duanwei}}</span>
                <span>{{list.kill}}/{{list.died}}</span>
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

var gamedetail = Vue.extend({
    name: 'gamedetail',
    data: function() {
        return {
            gamedetail:{}
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
            url: ROOTPATH + '/my/match-detail.lg' + QUERY,
            type: 'POST',
            dataType: 'json',
            data: {fightid:_this.$route.query.fightid,matchid:_this.$route.query.matchid},
            beforeSend:function(){
                $(".loading-1").show();
            },
            success: function(data) {
                $(".loading-1").hide();
                if (data.code == 0) {
                    
                    _this.gamedetail = data.data;
                } else if (data.code < 0) {
                    actions.alert(store,{show:true,msg:data.msg})
                }
                
          }
      })
    },
    ready: function() {
  		  

  	},
    methods: {
      goto:function(list){
          list.userid != null ? this.$route.router.go({name:'mine',query:{userid:list.userid}}) : '' ;  
      }
    }
});

module.exports = gamedetail;
</script>
