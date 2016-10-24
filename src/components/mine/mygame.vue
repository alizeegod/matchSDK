<template>
    <p class="mine">欢迎进入我的游戏</p>
    <ul class="mineul">
        <li v-for="list in lists">
            <a v-link="{path:list.url}">
                <p>{{list.name}}</p>
                <p>{{list.age}}</p>
            </a>
        </li>
    </ul>
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

var Mock = require('mockjs');

Mock.mock('http://mygame.cn',{
    "array|1-10":[{
        'name'     : '@name',
        'age|1-100': 100,
        'url'    : '/mine/gamedetail'
    }]
});


var mygame = Vue.extend({
    name: 'mygame',
    data: function() {
        return {
            lists: null
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
        $.ajax({
            url: 'http://mygame.cn',
            dataType: 'json',
            success: function(data) {
                console.log(JSON.stringify(data, null, 4))
                // var da = JSON.stringify(data, null, 4);
                _this.lists = data.array;
                console.log(_this.lists)
            }
        })
    },
    methods: {
        
    }
});

module.exports = mygame;
</script>
