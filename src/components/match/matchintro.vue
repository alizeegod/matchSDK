<style soped>
.matchintro{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    border: 1px solid #3A4861;
}
.mi-title{
    width: 94%;
    height: 28px;
    margin: 6px auto;
    line-height: 28px;
}
.mi-title h3{
    float: left;
    font-size: 26px;
    color: #e1e1e1;
    position: relative;
}
.mi-title h3:before{
    content: '|';
    position: absolute;
    left: -14px;
    border-left: 3px solid #648EDA;
    color: transparent;
}
.mi-title a{
    float: right;
    font-size: 20px;
    color: #848ea4;
}
.mi-title a i{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    line-height: 20px;
    text-align: center;
    margin-right: 5px;
    border: 1px solid #848ea4;
}
.mi-con{
    width: 94%;
    margin: 10px auto;
}
.mi-con p{
    font-size: 24px;
    color: #aaaaaa;
    line-height: 1.6;
}
.mi-bot{
    width: 94%;
    margin: 0 auto;
}
.mi-bot p{
    float: left;
    font-size: 20px;
    color: #9db5e6;
}
.mi-bot p:nth-of-type(1) i{
    display: inline-block;
    width: 15px;
    height: 20px;
    margin-top: -3px;
    margin-right: 10px;
    vertical-align: middle;
    background-image: url(../../images/mi-ico01.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.mi-bot p:nth-of-type(2){
    margin-left: 50px;
}
.mi-bot p:nth-of-type(2) i{
    display: inline-block;
    width: 15px;
    height: 20px;
    margin-top: -3px;
    margin-right: 10px;
    vertical-align: middle;
    background-image: url(../../images/mi-ico02.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
<template>
    <div class="matchintro">
        <section class="mi-title clearfix">
            <h3>赛事简介</h3>
            <a v-link="{path: matchintro.ruleurl}"><i>!</i><span>查看规则</span></a>
        </section>
        <section class="mi-con"><p>{{matchintro.micon}}</p></section>
        <section class="mi-bot clearfix">
            <p><i></i><em>比赛时间：</em><span>{{matchintro.mitime}}</span></p>
            <p><i></i><em>{{matchintro.mitype}}</em><span>{{matchintro.miaddress}}</span></p>
        </section>
    </div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');



var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var matchintro = Vue.extend({
    name: 'matchintro',
    data: function() {
        return {
            
        };
    },
    props: ['matchintro'],
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

module.exports = matchintro;
</script>
