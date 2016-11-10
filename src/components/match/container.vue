<template>
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
	},
    methods: {
        change: function(){
            actions.alert(store,{show:true,msg:'我是alizeegod!',type:'info'})
        }
    }
});

module.exports = match;
</script>
