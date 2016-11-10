<template>
    <div class="mine-wrap">
        <router-view></router-view>
    </div>
    
</template>
<style soped>

</style>
<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var match = Vue.extend({
	name: 'match',
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
        
	}
});

module.exports = match;
</script>
