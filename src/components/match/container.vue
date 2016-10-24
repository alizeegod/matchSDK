<template>
    <ul class="nav">
        <li v-for="list of lists">
            <a href="#">{{list.msg}}</a>
        </li>
    </ul>
    <p v-on:click="change">{{alertConfig.msg}}</p>
    <p v-show="alertConfig.show">你看不见我！</p>
    <div class="link">
        <a v-link="{path:'/match/offline1'}">offline1</a>
        <a v-link="{path:'/match/offline2'}">offline2</a>
        <a v-link="{path:'/match/online'}">online</a>
        <a v-link="{path:'/match/rules'}">rules</a>
        <a v-link="{path:'/match/team'}">team</a>
        <a v-link="{path:'/mine/setcof'}">setcof</a>
        <a v-link="{path:'/mine/bind'}">bind</a>
        <a v-link="{path:'/mine/gamedetail'}">gamedetail</a>
        <a v-link="{path:'/mine/gamerank'}">gamerank</a>
        <a v-link="{path:'/mine/mygame'}">mygame</a>
        <a v-link="{path:'/mine/name'}">name</a>
        <a v-link="{path:'/mine/opinion'}">opinion</a>
        <a v-link="{path:'/mine/rankrules'}">rankrules</a>
        <a v-link="{path:'/mine/tips'}">tips</a>
        <a v-link="{path:'/rank'}">rank</a>
        <a v-link="{path:'/mine'}">mine</a>
        <a v-link="{path:'/'}">match</a>
    </div>
    <div class="match-wrap">
        <router-view></router-view>
    </div>
    
</template>
<style soped>
.content{
	padding-left: 50px;
}
.content .nav{
    width: 100%;
    overflow: hidden;
}
.content .nav li{
    float: left;
    width: 33%;
    text-align: center;
    background: #eee;
}
.content .nav li a{
    font-size: 30px;
    color: red; 
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var match = Vue.extend({
	name: 'match',
	data: function() {
		return {
			lists: [
                {msg: '视频'},
                {msg: '赛程'},
                {msg: '介绍'}
            ],
            ajaxdata: {}
		};
	},
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
	ready: function() {
        var _this = this;
        $(".nav").click(function(){
            alert('yes')
        })
        $.getJSON({
            url: 'http://10.0.11.19/cs/vuetest/src/json/sum.json',
            success: function(data) {
                _this.ajaxdata = data;
                // console.log(_this.ajaxdata.lists)
                
            },
            error: function() {
                alert('error')
            }
        })
	},
    methods: {
        change: function(){
            actions.alert(store,{show:true,msg:'我是alizeegod!',type:'info'})
        }
    }
});

module.exports = match;
</script>
