<style>
.match-rules,.match-rules *,.match-rules:after,.match-rules:before{
    box-sizing: border-box;
}
.match-rules{
    background: #050d19;
    font-size: 17px;
}
.match-rules >p {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #e1e1e1;
    background: #1a212e;
}
.match-rules-box{
    padding: 15px 10px;
}
.match-rules-box p{
    font-size: 15px;
    color: #ccc;
    line-height: 24px;
}
</style>
<template>

<div class="match-rules">
    <p>比赛规则说明</p>
    <div class="match-rules-box">
        {{{dataruesC}}}
    </div>
</div>
 
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var common = require('../../js/common.js');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var rules = Vue.extend({
    name: 'rules',
    data: function() {
        return {
            dataruesC:''
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
        this.rulesmatchidFn();
    },
    methods: {
        rulesmatchidFn:function(){
            var _this = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:"GET",
                dataType:"html",
                data:{category:"mrules",matchid:wsCache.get('HEROC').matchid},
                success:function(data){
                    _this.dataruesC = data
                }
            })
        }
        
    }
});

module.exports = rules;
</script>
