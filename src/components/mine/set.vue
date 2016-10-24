<template>
    <p class="mine">欢迎进入设置</p>
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

var setcof = Vue.extend({
    name: 'setcof',
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

module.exports = setcof;
</script>
