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
  				<span v-link="{name:'rule',params:{userid:userMsg.id}}">战斗力<i>?</i></span>
  			</p>
  			<p class="p6"></p>
  		</div>
  		<div class="prank-con">
  			<ul>
  				<li class="prank-item trank-item" v-link="{path:teamRank.url}"
  				v-for="teamRank in teamRanks">
  					<p class="p1"><span>{{teamRank.rank}}</span></p>
		  			<p class="p2"></p>
		  			<p class="p3"><image :src="teamRank.tImg"/><span>{{teamRank.user}}</span></p>
		  			<p class="p4"></p>
		  			<p class="p5"><span>{{teamRank.power}}</span></p>
		  			<p class="p6"><i></i></p>
  				</li>
  			</ul>
  		</div>
  	</div>
</template>

<script>
var Vue = require('Vue');

// var store = require('../store/store.js');
var Mock = require('mockjs');

Mock.Random.name();
Mock.Random.image('30*30');

Mock.mock('http://teamrank.cn',{
    "array|1-20":[{
        'rank|1-100'     : 1,
        'tImg'     		 : '@image',
        'user'     		 : '@name',
        'power|1-1000'	 : 1,
        'url'     		 : '/matck/team'
    }]
});


var rank = Vue.extend({
	name: 'rank',
	// store: store,
	data: function() {
		return {
			teamRanks: null
		};
	},
	created: function(){
		var _this = this;
		$.ajax({
            url: 'http://teamrank.cn',
            dataType: 'json',
            success: function(data) {
                _this.teamRanks = data.array;
                console.log(data.array)
            }
        })

	},
	ready: function() {
		

        let rW = $("#app").width()-50;
        $(".rank-top").width(rW);
        $(".prank .prank-title").width(rW);

	}
});

module.exports = rank;
</script>
