<style soped>
.prank{
	width: 100%;
	padding-top: 116px;
}
.prank .prank-title{
	width: 100%;
    position: fixed;
    left: 50px;
    top: 76px;
    z-index: 1000;
	background: #050D19;
	overflow: hidden;
}
.prank .prank-title p{
	float: left;
	height: 40px;
	line-height: 40px;
	font-size: 18px;
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
	width: 18%;
}
.prank .prank-title p.p4{
	width: 14%;
}
.prank .prank-title p.p5{
	width: 37%;
	text-align: center;
}
.prank .prank-title p.p5 span{
	height: 30px;
	width: 120px;
	line-height: 30px;
	margin-top: 4px;
	display: inline-block;
	text-align: center;
	background: #16273F;
	color: #fff;
	border: 1px solid #26416C;
	border-radius: 5px;
}
.prank .prank-title p.p5 span i{
	width: 20px;
	height: 20px;
	background: #fff;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	border-radius: 13px;
	display: inline-block;
	margin-left: 10px;
	color: #000;
	vertical-align: middle;
}
.prank .prank-title p.p6{
	width: 10%;
}
/*.prank-con .item-transition{
	transition: all 1s ease;
	transform: translateX(0);
}
.prank-con .item-enter,.prank-con .item-leave{
	transition: all 1s ease;
	transform: translateX(-50px);
}*/
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
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	color: #e1e1e1;
}
.prank-item.item:nth-of-type(1) p.p1 span{
	display: block;
	width: 28px;
	height: 28px;
	margin: 11px auto;
	color: transparent;
	background: url(../../images/prank-ico-01.png) no-repeat;
	background-size: 100% 100%;
}
.prank-item.item:nth-of-type(2) p.p1 span{
	display: block;
	width: 28px;
	height: 28px;
	margin: 11px auto;
	color: transparent;
	background: url(../../images/prank-ico-02.png) no-repeat;
	background-size: 100% 100%;
}
.prank-item.item:nth-of-type(3) p.p1 span{
	display: block;
	width: 28px;
	height: 28px;
	margin: 11px auto;
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
	width: 30px;
	height: 30px;
	margin: 8px auto;
	display: block;
	border: 1px solid #D1B25B;
}
.prank-item p.p3{
	width: 18%;
	overflow: hidden;
}
.prank-item p.p4{
	width: 14%;
}
.prank-item p.p5{
	width: 37%;
}
.prank-item p.p5 span{
	display: block;
	width: 160px;
	text-align: center;
	color: #34a247;
}
.prank-item p.p6{
	width: 10%;
}
.prank-item p.p6 i{
	display: block;
	width: 12px;
	height: 21px;
	margin-top: 14.5px;
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
  				<span v-link="{name:'rule',query:{userid:userMsg.userid}}">战斗力<i>?</i></span>
  			</p>
  			<p class="p6"></p>
  		</div>
  		<div class="prank-mine prank-item" v-link="{name:'mine',query:{userid:userMsg.userid}}">
  			<p class="p1"><span>{{mineRank.userrank}}</span></p>
  			<p class="p2">
  				<image :src="mineRank.userImg"/>
  			</p>
  			<p class="p3"><span>{{mineRank.username}}</span></p>
  			<p class="p4"><span>{{mineRank.userarea}}</span></p>
  			<p class="p5"><span>{{mineRank.userpower}}</span></p>
  			<p class="p6"><i></i></p>
  		</div>
  		<div class="prank-con">
  			<ul>
  				<li class="prank-item item" v-link="{name:'mine',query:{userid:allRank.userid}}"
  				v-for="allRank in allRanks" transition="item">
  					<p class="p1"><span>{{allRank.userrank}}</span></p>
		  			<p class="p2">
		  				<image :src="allRank.userImg"/>
		  			</p>
		  			<p class="p3"><span>{{allRank.username}}</span></p>
		  			<p class="p4"><span>{{allRank.userarea}}</span></p>
		  			<p class="p5"><span>{{allRank.userpower}}</span></p>
		  			<p class="p6"><i></i></p>
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

Mock.Random.region();
Mock.Random.name();
Mock.Random.image('30*30');


Mock.mock(ROOTPATH + 'rank',{
    "mineRank":{
        'userrank|1-100'     : 1,
        'userImg'     		 : 'http://10.0.11.19/svn/match/2.0/dist/images/prank-timg.png',
        'username'     		 : '@name',
        'userarea'     		 : '@region',
        'userpower|1-1000'	 : 1
    },
    "allRanks|1-20":[{
        'userrank|1-100'     : 1,
        'userImg'     		 : 'http://10.0.11.19/svn/match/2.0/dist/images/prank-timg.png',
        'username'     		 : '@name',
        'userarea'     		 : '@region',
        'userpower|1-1000'	 : 1,
        'userid|2-10'         : 1
    }]
});

var rank = Vue.extend({
	name: 'rank',
	data: function() {
		return {
			mineRank: {},
			allRanks: {}
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
	created: function(){
		var _this = this;
        $.ajax({
            url: ROOTPATH + 'rank',
            dataType: 'json',
            // data: {userid: _this.userMsg.id},
            success: function(data) {
                _this.mineRank = data.mineRank;
                _this.allRanks = data.allRanks;
            }
        })
	},
	ready: function() {
		
        let rW = $("#app").width()-50;
        $(".rank-top").width(rW);
        $(".prank-title").width(rW);
	}
});

module.exports = rank;
</script>
