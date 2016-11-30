<template>
  	<div class="rule">
  		<h3 class="ruletil">{{ruleinf.title}}</h3>
  		<div class="ruleinf">
      {{{ruleinf.content}}}  
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
  color: #fff;
}
</style>
<script>
var Vue = require('Vue');
var rule = Vue.extend({
	name: 'rule',
	data: function() {
		return {
			ruleinf: {}
		};
	},
	created: function(){
		var _this = this;
		$.ajax({
        url: ROOTPATH + '/match/page.lg' + QUERY,
        type: 'POST',
        dataType: 'json',
        data:{type:_this.$route.query.type},
        success: function(data) {
            $(".loading-1").hide();
            if (data.code == 0) {
                _this.ruleinf= data.data;
            } else if(data.code < 0) {

            }
        }
    })

	},
	ready: function() {


	}
});

module.exports = rule;
</script>
