<template>
  	<div class="rule">
  		<p>rule</p>
  	</div>
</template>
<style soped>
.rule{
  width: 100%;
  overflow: hidden;
}

</style>
<script>
var Vue = require('Vue');



var rule = Vue.extend({
	name: 'rule',
	// store: store,
	data: function() {
		return {
			teamRanks: null
		};
	},
	created: function(){
		var _this = this;
		$.ajax({
            url: 'http://teamrank.cn',
            dataType: 'json',
            success: function(data) {
                _this.teamRanks = data.array;
                console.log(data.array)
            }
        })

	},
	ready: function() {
		console.log(this.$route.params.userid)

	}
});

module.exports = rule;
</script>
