<style soped>
.rank-wrap{
    width: 100%;
    overflow: hidden;
}
.rank-top{
    width: 100%;
    position: fixed;
    left: 50px;
    top: 0;
    background: #1A212E;
    z-index: 1000;
}
.rank-top h3{
    width: 100%;
    height: 40px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
.rank-top .rank-nav{
    width: 92%;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
}
.rank-top .rank-nav li{
    width: 49.5%;
    height: 36px;
    line-height: 36px;
    display: block;
    float: left;
    text-align: center;
    font-size: 20px;
    color: #888888;
    background: #2B2F36;
    border-radius: 3px;
}
.rank-top .rank-nav li.v-link-active{
    color: #fff;
    background: #4566A8;
}
</style>

<template>
    <div class="rank-wrap">
        <section class="rank-top">
            <h3 v-if="rankTitle">排行榜</h3>
            <h3 v-else>战队榜单</h3>
            <ul class="rank-nav">
                <li v-link="{path:'/rank/perrank'}" @click="isPer"><span>个人榜</span></li>
                <li v-link="{path:'/rank/teamrank'}" @click="isTeam"><span>职业战队榜</span></li>
            </ul>
        </section>
        <div class="rank-con">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var rankbox = Vue.extend({
	name: 'rankbox',
	data: function() {
		return {
			rankTitle: true
		};
	},
	ready: function() {
        
	},
    methods: {
        isPer: function(){
            this.rankTitle = true;
        },
        isTeam: function(){
            this.rankTitle = false;
        }
    }
});

module.exports = rankbox;
</script>
