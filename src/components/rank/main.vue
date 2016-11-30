<style soped>
.prank{
	width: 100%;
	padding-top: 102px;
}
.prank .prank-title{
	width: 100%;
  position: fixed;
  left: 50px;
  top: 62px;
  z-index: 1000;
	background: #050D19;
	overflow: hidden;
}
.prank .prank-title p{
	float: left;
	height: 40px;
	line-height: 40px;
	font-size: 12px;
	color: #5d8ca3;
}
.prank .prank-title p.p1{
	width: 14%;
	text-align: center;
}
.prank .prank-title p.p2{
	width: 7%;
}
.prank .prank-title p.p3{
  width: 17%;
  padding-left: 1%;
}
.prank .prank-title p.p4{
	width: 14%;
}
.prank .prank-title p.p5{
	width: 37%;
	text-align: center;
}
.prank .prank-title p.p5 span{
	height: 24px;
	width: 80px;
	line-height: 24px;
	margin-top: 7px;
	display: inline-block;
	text-align: center;
	background: #16273F;
	color: #fff;
	border: 1px solid #26416C;
	border-radius: 4px;
}
.prank .prank-title p.p5 span i{
	width: 14px;
	height: 14px;
	background: url(../../images/ico_wh_@3x.png) no-repeat;
  background-size: 100% 100%;
	display: inline-block;
  margin-left: 10px;
	vertical-align: middle;
}
.prank .prank-title p.p6{
	width: 10%;
}
.prank-item.prank-mine{
	background: #2B3A58;
}
.prank-item{
	width: 100%;
	background: #050D19;
	overflow: hidden;
}
.prank-item p{
	float: left;
	height: 40px;
	line-height: 40px;
	font-size: 12px;
	color: #e1e1e1;
}
.prank-item.item:nth-of-type(1) p.p1 span{
	display: block;
	width: 24px;
	height: 24px;
	margin: 13px auto;
	color: transparent;
	background: url(../../images/prank-ico-01.png) no-repeat;
	background-size: 100% 100%;
}
.prank-item.item:nth-of-type(2) p.p1 span{
	display: block;
	width: 24px;
	height: 24px;
	margin: 8px auto;
	color: transparent;
	background: url(../../images/prank-ico-02.png) no-repeat;
	background-size: 100% 100%;
}
.prank-item.item:nth-of-type(3) p.p1 span{
	display: block;
	width: 24px;
	height: 24px;
	margin: 13px auto;
	color: transparent;
	background: url(../../images/prank-ico-03.png) no-repeat;
	background-size: 100% 100%;
}
.prank-item.item:nth-of-type(2n){
	background: #111A2B;
}
.prank-item p.p1{
	width: 14%;
	text-align: center;
	overflow: hidden;
	color: #7b99ad;
}
.prank-item p.p2{
	width: 7%;
	overflow: hidden;
}
.prank-item p.p2 img{
	width: 26px;
	height: 26px;
	margin: 7px auto;
	display: block;
}
.prank-item p.p3{
	width: 17%;
  padding-left: 1%;
	overflow: hidden;
}
.prank-item p.p4{
	width: 14%;
}
.prank-item p.p5{
	width: 37%;
	color: #34a247;
	text-align: center;
}
.prank-item p.p6{
	width: 10%;
}
.prank-item p.p6 i{
	display: block;
	width: 10px;
	height: 17px;
	margin-top: 11.5px;
	background: url(../../images/prank-ico.png) no-repeat;
	background-size: 100% 100%;
}
</style>
<template>
  	<div class="prank">
  		<div class="prank-title">
  			<p class="p1">排名</p>
  			<p class="p2"></p>
  			<p class="p3">玩家</p> 
  			<p class="p4"></p>
  			<p class="p5">
  				<span v-link="{name:'rule',query:{type:0}}">战斗力<i></i></span>
  			</p>
  			<p class="p6"></p>
  		</div>
  		
  		<div class="prank-con" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()">
        <div>
          <div class="prank-mine prank-item" v-link="{name:'mine',query:{userid:userMsg.userid}}">
            <p class="p1"><span>{{mineRank.rank}}</span></p>
            <p class="p2">
              <image :src="mineRank.logo" onerror="this.src='http://7xq07i.com1.z0.glb.clouddn.com/avatar/qz/Icon_Head_33.png'"/>
            </p>
            <p class="p3"><span>{{mineRank.rolename}}</span></p>
            <p class="p4"><span>{{mineRank.servicename}}</span></p>
            <p class="p5"><span>{{mineRank.power}}</span></p>
            <p class="p6"><i></i></p>
          </div>
          <ul>
            <li class="prank-item item" v-link="{name:'mine',query:{userid:allRank.uid}}"
            v-for="(index,allRank) in allRanks" transition="item">
              <p class="p1"><span>{{allRank.rank}}</span></p>
              <p class="p2">
                <image :src="allRank.logo" onerror="this.src='http://7xq07i.com1.z0.glb.clouddn.com/avatar/qz/Icon_Head_33.png'"/>
              </p>
              <p class="p3"><span>{{allRank.rolename}}</span></p>
              <p class="p4"><span>{{allRank.servicename}}</span></p>
              <p class="p5"><span>{{allRank.power}}</span></p>
              <p class="p6"><i></i></p>
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


var rank = Vue.extend({
	name: 'rank',
	data: function() {
		return {
			mineRank: {},
			allRanks: [],
			page: 0
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
	created: function(){
		var _this = this;
	},
	ready: function() {
		
        let rW = $("#app").width()-50;
        $(".rank-top").width(rW);
        $(".prank-title").width(rW);

        let rH = document.documentElement.clientHeight - 102;
        $(".prank .prank-con").height(rH);

        
        var me = this;
        me.$options.vue = me
	},
    loadListData: function (fn) {
        var me = this.vue;
        $.ajax({
            url: ROOTPATH + '/match/teamlist.lg' + QUERY,
            dataType: 'json',
            type: 'POST',
            data: {type: 1,page:me.page,pagesize:100},
            success: function(data) {
              $(".loading-1").hide();
              if (data.code == 0) {
                fn(data)
                
              } else if (data.code < 0) {
                actions.alert(store,{show:true,msg:data.msg})
              }
            }
        })
    },
    methods: {
        down_a: function () {
            var me = this;
            me.page += 1;
            me.$options.loadListData(function (data) {
                me.allRanks = me.allRanks.concat(data.data.list);
                me.mineRank = data.data.user;
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

module.exports = rank;
</script>
