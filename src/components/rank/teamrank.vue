<style soped>
.prank-item.trank-item p.p3 img{
  width: 26px;
  height: 26px;
  margin: 7px 0;
  display: block;
  float: left;
}
.prank-item.trank-item p.p3 span{
  display: block;
  float: left;
  margin-left: 5px;
}
.prank-item.trank-item:nth-of-type(2n-1){
  background: #111A2B;
}
.dropload-up {
  position: relative;
  height: 0;
  overflow: hidden; 
  font-size: 12px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.dropload-refresh, .dropload-update, .dropload-load, .dropload-noData {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.dropload-load .loading {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  margin: 6px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  vertical-align: middle;
  -webkit-animation: rotate 0.75s linear infinite;
  animation: rotate 0.75s linear infinite;
}
@-webkit-keyframes rotate {
  from {-webkit-transform:rotate(0deg);}
  to {-webkit-transform:rotate(360deg);}
}
.prank-con{
    overflow: auto;
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
  				<span v-link="{name:'rule',query:{type:1}}">战斗力<i></i></span>
  			</p>
  			<p class="p6"></p>
  		</div> 
  		<div class="prank-con" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()">
  			<ul>
  				<li class="prank-item trank-item" v-link="{path:'/match/team/'+teamRank.id}"
  				v-for="(index,teamRank) in teamRanks">
  					<p class="p1"><span>{{teamRank.rank}}</span></p>
		  			<p class="p2"></p>
		  			<p class="p3"><image onerror="this.src='http://cdn.static.yingxiong.com/match/1.0/images/team_default.png'" :src="teamRank.logo"/><span>{{teamRank.name}}</span></p>
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

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var teamrank = Vue.extend({
	name: 'teamrank',
	data: function() {
		return {
			teamRanks: [],
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
	ready: function() {
        let rW = $("#app").width()-50;
        $(".rank-top").width(rW);
        $(".prank .prank-title").width(rW);
        

        let rH = document.documentElement.clientHeight - 102;
        $(".trank .prank-con").height(rH);

        var me = this;
        me.$options.vue = me
	},
    loadListData: function (fn) {
        var me = this.vue;
        console.log(me.page)
        $.ajax({
            url: ROOTPATH + '/match/teamlist.lg' + QUERY,
            dataType: 'json',
            type: 'POST',
            data: {type: 2,page:me.page,pagesize:100},
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

module.exports = teamrank;
</script>
