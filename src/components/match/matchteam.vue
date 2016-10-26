<style soped>
.matchteam{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    border: 1px solid #3A4861;
}
.mt-title{
    width: 94%;
    height: 28px;
    margin: 6px auto;
    line-height: 28px;
}
.mt-title h3{
    float: left;
    font-size: 26px;
    color: #e1e1e1;
    position: relative;
} 
.mt-title h3:before{
    content: '|';
    position: absolute;
    left: -14px;
    border-left: 3px solid #648EDA;
    color: transparent;
}
.mt-con{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
}
.mt-con .mt-item{
    width: 12%;
    float: left;
    margin: 10px 4%;
}
.mt-con .mt-item img{
    display: block;
    width: 100%;
}
.mt-con .mt-item p{
    color: #e1e1e1;
    width: 100%;
    text-align: center;
    font-size: 22px;
    line-height: 1.8;
}
</style>
<template>
    <div class="matchteam">
        <section class="mt-title clearfix">
            <h3>参赛队伍</h3>
        </section>
        <section class="mt-con">
            <div class="mt-item" v-for="matchteam in matchteams" v-link="{path: matchteam.teamurl}">
                <img :src="matchteam.imgurl">
                <p>{{matchteam.name}}</p>
            </div>
        </section>
    </div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');



var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var matchteam = Vue.extend({
    name: 'matchteam',
    data: function() {
        return {
            
        };
    },
    props: ['matchteams'],
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

module.exports = matchteam;
</script>
