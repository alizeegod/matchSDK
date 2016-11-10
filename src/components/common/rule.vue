<template>
  	<div class="rule">
  		<h3 class="ruletil">{{ruleinf.title}}</h3>
  		<div class="ruleinf">
  			{{ruleinf.msg}}
  		</div>
  	</div>
</template>
<style soped>
.rule{
  width: 100%;
  overflow: hidden;
}
.ruletil{
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #1a212e;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}
.ruleinf{
	width: 96%;
	margin: 0 auto;
	overflow: hidden;
}
</style>
<script>
var Vue = require('Vue');
var Mock = require('mockjs');

Mock.mock('http://ruleinf.cn',{
    "array":{
        'title'     : '@name',
        'msg'       : '@paragraph'
    }
});
var rule = Vue.extend({
	name: 'rule',
	// store: store,
	data: function() {
		return {
			ruleinf: {}
		};
	},
	created: function(){
		var _this = this;
		$.ajax({
            url: 'http://ruleinf.cn',
            dataType: 'json',
            success: function(data) {
                _this.ruleinf = data.array;
                console.log(data.array)
            }
        })

	},
	ready: function() {
		console.log(this.$route.query.userid)

	}
});

module.exports = rule;
</script>
