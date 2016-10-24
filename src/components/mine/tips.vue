<template>
    <p class="mine">欢迎进入消息提醒</p>
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

var tips = Vue.extend({
    name: 'tips',
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

module.exports = tips;
</script>
