<template>
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
    <div class="test">
       <p>我是<span>team</span>哦！</p> 
    </div>
</template>
<style soped>
.test p{
    font-size: 60px;
}
</style>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var team = Vue.extend({
    name: 'team',
    data: function() {
        return {
            
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
        
    }
});

module.exports = team;
</script>
