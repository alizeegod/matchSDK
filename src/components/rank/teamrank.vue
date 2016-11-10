<style soped>
.prank-item.trank-item p.p3 img{
  width: 36px;
  height: 36px;
  margin: 7px 0;
  display: block;
  float: left;
}
.prank-item.trank-item p.p3 span{
  display: block;
  float: left;
}
.prank-item.trank-item:nth-of-type(2n-1){
  background: #111A2B;
}
</style>
<template>
  	<div class="prank trank">
  		<div class="prank-title">
  			<p class="p1">排名</p>
  			<p class="p2"></p>
  			<p class="p3">战队</p>
  			<p class="p4"></p>
  			<p class="p5">
  				<span v-link="{name:'rule',query:{userid:userMsg.id}}">战斗力<i>?</i></span>
  			</p>
  			<p class="p6"></p>
  		</div>
  		<div class="prank-con">
  			<ul>
  				<li class="prank-item trank-item" v-link="{name:'rule',query:{teamid:teamRank.teamid}}"
  				v-for="teamRank in teamRanks">
  					<p class="p1"><span>{{teamRank.teamrank}}</span></p>
		  			<p class="p2"></p>
		  			<p class="p3"><image :src="teamRank.teamImg"/><span>{{teamRank.teamname}}</span></p>
		  			<p class="p4"></p>
		  			<p class="p5"><span>{{teamRank.teampower}}</span></p>
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

Mock.Random.name();
Mock.Random.image('30*30');

Mock.mock(ROOTPATH + 'teamrank',{
    "team|1-20":[{
        'teamrank|1-100'     : 1,
        'teamImg'     		   : '@image',
        'teamname'     		   : '@name',
        'teampower|1-1000'	 : 1,
        'teamid|1-50'     	 : 1
    }]
});
 

var teamrank = Vue.extend({
	name: 'teamrank',
	data: function() {
		return {
			teamRanks: null
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
            url: ROOTPATH + 'teamrank',
            dataType: 'json',
            // data: {userid: _this.userMsg.id},
            success: function(data) {
                _this.teamRanks = data.team;
            }
        })

	},
	ready: function() {
        let rW = $("#app").width()-50;
        $(".rank-top").width(rW);
        $(".prank .prank-title").width(rW);
	}
});

module.exports = teamrank;
</script>
