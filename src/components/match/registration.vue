<style>
.ljbmBtn{
	width: 145px;
	height: 72px;
	background: url(../../images/btn_bm_@3x.png) no-repeat;
	background-size: 100% 100%;
	position: fixed;
	right: 10px;
	bottom: 10px;
	margin-top: 0px;
    z-index: 10;
}	
</style>
<template>

    <a v-if="smx==1" data-abtn="1" id="mabmBtn{{matchid}}" href="javascript:;" v-on:click="modClickA(regMain)"></a>
	<a v-if="smx==2 && sshow==0" class="ljbmBtn" href="javascript:;" v-on:click="modClickA(regMain)"></a>
    <teltk v-if="isTeltk" :matchid="matchid"></teltk>

</template>

<script>
    var common = require('../../js/common.js');	
    var teltk = require('./teltk.vue');

	module.exports = {
        
        data:function(){
        	return {
        		isTeltk :false,
        		matchid : '',
                senroll : '',
        		sshow : '',
        		regMain:'',
        		smx : '',
        		sbindphone : ''
            }
        },
        props: ["mx","list","bindphone"],
        components:{
            'teltk' : teltk
        },
        ready:function(){
        	var self = this;
        	self.smx = self.mx;
        	self.matchid = self.list.id;
        	self.senroll = self.list.enroll;
        	self.sshow = self.list.show;
        	self.sbindphone = self.bindphone;
        	self.regMain = self.list;
        },
        methods:{
        	modClickA:function(obj){
        		var self = this;
        		self.matchid = obj.id;
        		if(obj.enroll == 0 && obj.type==0 && obj.state==3){
        			this.ajaxRegFn(obj);
        		}else if(obj.enroll == 0 && obj.type==0 && self.smx==2){
                    this.ajaxRegFn(obj);
                }else if(obj.enroll == 1 && obj.type==0){
        			// common.tips("你已报过名");
        			wsCache.set('procA',{status:true});
                }else if(obj.type==1){
                	return ;
                }else{
                	return ;
                }
        	},
        	ajaxRegFn:function(obj){
                console.log(wsCache.get('HEROC').matchid)
	        	var self = this;
	            var url = common.getBaseUrl()+'/ajaxsdk/sdkuser/signup.lg'+QUERY;
	            var gPost = "POST";
	            var data = {
	                match_id :wsCache.get('HEROC').matchid,
	                gameid : gload_conf.gameid
	            };
	            if(self.sbindphone){
	                $.ajax({
	                    url:url,
	                    type:gPost,
	                    dataType:"json",
	                    data:data, 
	                    success:function(data){
	                        if(data.code==0){
	                        	if(self.smx==1){
	                        		var fl1 = $($(".MatchShow"+self.matchid)).attr("id").split("|");
	                                $($(".MatchShow"+self.matchid)).attr("id",""+fl1[0]+"|"+fl1[1]+"|"+fl1[2]+"|3|"+fl1[4]+"|1");
                                    if(!isNaN(obj.member)){
	                                    $($(".MatchShow"+self.matchid)).find(".item-num span").html(parseInt(obj.member) + 1);
                                    }
                                }else{
                                    self.senroll = 1;
                                    self.sshow = 1;
                                }
                                wsCache.set('procA',{status:true});
                                common.tips("报名成功");
	                        }else{
	                        	wsCache.set('procA',{status:false});
	                            common.tips("报名失败");
	                        }
	                    }
	                });
	            }else{
	                self.isTeltk = true;
	            }
	        }

        }

    }

</script>