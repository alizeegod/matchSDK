<style soped>

a{
    text-decoration: none;
   
}
.content{
    padding-left: 50px;
    position: relative;
    padding-bottom: 45px;
    color: #fff;
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

.match-match-hed{
    width: 100%;
    padding: 8px 0 7px 33px; 
    background: #1a212e;
    overflow: hidden;
    position: fixed;
    left: 50px;
    top: 0;
    z-index: 4;
}
.match-match-hed span{
    color: #fff;
    width: 80px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-left: 30px;
    float: left;
    border-radius: 5px;
    letter-spacing: 1px;
    font-size: 14px;
    text-decoration: none;
    border: #fff solid 1px;
}
.match-match-hed span:first-child{
    margin-left: 0;
}
.match-match-hed span.on{
   background: #1d9618;
   border: #1d9618 solid 1px;
}
.match-match-main{
    padding-top: 40px;
}
</style>
<template>
<div class="match-match-hed">
    <span v-for="item in matchTab" :class="{on:item.iscur}" @click="setCur($index)">{{item.text}}</span>
</div>

<div class="match-match-main" id="xxxx">
    
    <match-list-child  :tabs="tabs" v-ref:child></match-list-child>
</div>


<!--     <ul class="nav">
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
    </div>  -->
    
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var matchlist = require('./matchlist');
//import matchlist from 'matchlist'


var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var match = Vue.extend({
	data: function() {
		return {
			matchTab :[
                 {text:"显示全部",iscur:true,raceway:0},
                 {text:"HPL赛事",iscur:false,raceway:1},
                 {text:"线上比赛",iscur:false,raceway:2}
            ],
            raceway:0
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

	},
    components:{
         "match-list-child":matchlist   
    },
    methods: {
        a:function(){
            alert(this.raceway)
        },
        setCur: function (index) {
            var vm = this;
            vm.matchTab.map(function (v,i) {
                i==index? (v.iscur=true,vm.raceway = v.raceway,vm.Page=1): v.iscur=false
            });
            window.scrollTo(0, 0);
            console.log(vm.raceway);
        },
        change: function(){
            actions.alert(store,{show:true,msg:'我是alizeegod!',type:'info'})
        }
    }
});

module.exports = match;
</script>
