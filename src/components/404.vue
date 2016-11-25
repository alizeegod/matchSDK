<style>
    .error_404{
        width: 100%;
        position: relative;
    }
    .error_404 img{max-width: 100%;width: 100%;display: block;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
    .error_404 p{
        width: 100%;
        height: 22px;
        line-height: 22px;
        font-size: 18px;
        color: #CFCFCF;
        text-align: center;
        position: fixed;
        left: 0;
        bottom: 25%;
    }
</style>
<template>
    <div class="error_404">
        <img src="../images/404.jpg" alt="">
        <p>网络不给力呀！点击下方刷新重试</p>
    </div>
</template>

<script>
	
var Vue = require('Vue');

var Erro = Vue.extend({
    name: 'Erro',
    data: function() {
    	return {

    	};
    },
    ready: function() {

    	var self = this;
    	
    	// $.ajax({
     //    url: ROOTPATH + '/my/index.lg',
     //    type: 'POST',
     //    dataType: 'json',
     //    data:{uid:uid},
     //    success: function(data) {
     //        if (data.code == 0) {
                
     //        } else {

     //        }
     //    }
    // })
    }
})

module.exports = Erro;
</script>