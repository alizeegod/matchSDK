<style>
	#zzmask{
		width: 100%;
		height: 100%;
		position: fixed;
		left:0;
		top: 0;
		z-index: 150;
		background: rgba(0,0,0,.5);
	}
	.match-match-teltk{
		width: 357px;
		height: 268px;
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 200;
		background-image: url(../../images/match_img_mean_@3x.png);
		background-size: 100% 100%; 
		margin: -134px 0 0 -179px;
		overflow: hidden;
	}
	.match-teltk-hed{
		 display: flex;
         text-align: center;
         font-size: 14px;
         font-weight: bold;
         color: #ffd21c;
         margin-top: 34px;
         line-height: 14px;
    }
	.match-teltk-hed span{
		flex:1;
		flex-basis:0;
		max-width: 100%;
        display: block;
    }
	.match-teltk-hed span:nth-child(1){
		padding-left: 20px;
	}
	.match-teltk-hed span:nth-child(2){
		text-align: left;
		padding-left: 10px;
	}
	.match-teltk-con{
		margin-top: 35px;
		padding: 0 15px;
		color: #757575;
		font-size: 12px;
	}
	.match-teltk-con > div{
		position: relative;
	}
	.match-teltk-con input{
		width: 100%;
	    background: #fff;
	    border: none;
	    height: 34px;
	    margin-bottom: 15px;
	    border-radius: 3px;
	    padding: 0 0 0 5%;
	    outline: none;
	}
	.match-teltk-con input::placeholder{
        color: #757575;
	}
	.match-teltk-code{
       color: #fff;
       background: #5589cf;
       padding: 5px 0;
	   letter-spacing: 1px;
	   position: absolute;
	   right: 5px;
	   top: 5px;
	   line-height: 14px;
	   border-radius: 3px;
	   width: 26%;
	   text-align: center;
	}
	.match-match-teltk .close{
		width: 16px;
		height: 16px;
		position: absolute;
        right: 15px;
        top: 30px;
		z-index: 1;
		background-image: url(../../images/match_ico_@3x.png); 
		background-size: 100% 100%; 
	}
    .match-match-teltk .sureBtn{
    	width: 115px;
    	height: 36px;
    	position: absolute;
    	left: 50%;
    	bottom: 20px;
    	margin-left: -57px;
		z-index: 1;
		background-image: url(../../images/match_btn_@3x.png); 
		background-size: 100% 100%; 		
    }
    .match-teltk-con input::-webkit-outer-spin-button,
	.match-teltk-con input::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	}
	.match-teltk-con input[type="number"]{
	  -moz-appearance: textfield;
	}
</style>
<template>
    <div id="zzmask"></div>
	<div id="example" class="match-match-teltk">
		<div class="close" v-on:click="closeBtnTeltk"></div>
        <div class="match-teltk-hed">
           <span>昵称：{{username}}</span>
           <span>区服：{{userarea}}</span>
        </div>
        <div class="match-teltk-con">
        	<div>
        	<input type="tel" name="userIphone" placeholder="请输入手机号" v-model="from.userIphone">
        	<span class="match-teltk-code"  id="match-teltk-code">获取验证码</span>
        	</div>
        	<div>
        	<input type="number" name="userCode" placeholder="请输入验证码" v-model="from.userCode">
        	</div>
        </div>
		<a href="javascript:;"  title="确定" class="sureBtn" v-on:click.stop="sureBtnTeltk"></a>
	</div>
</template>

<script>
    import tool from '../../js/Tool';
    var common = require('../../js/common.js');
    var store = require('../../store/store.js');
    var actions = require('../../store/actions.js');
    module.exports = {
		data(){
			return {
                from :{
                	userIphone:'',
                	userCode:'',
                },
                username:gload_conf.rolename,
                userarea:gload_conf.servername
			}
		},
		props:[
		    'matchchannl',
		    'matchid',
		    'matchstate'
        ],
		store: store,
		vuex: {
			getters: {
				userMsg: function() {
					return store.state.userMsg;
				},
	      alertConfig: function() {
	          return store.state.alertConfig;
	      }
			},
			actions: actions
		},
        ready: function(){
        	var self = this;
        	var flag = 0;
        	$("#match-teltk-code").click(function(){
        		
                if(tool.tel($("input[name=userIphone]")) && flag == 0){
                	var oBtn = document.getElementById("match-teltk-code");
				    var timer = null;
				    var t =60;
				    if(flag == 0){
				    	flag = 1;
			            $.ajax({
			            	url:common.getBaseUrl()+'/ajaxsdk/sms/send.lg'+QUERY,
			            	type:"POST",
			            	timeout:10000,
			            	data:{phone:self.from.userIphone},
			            	dataType:"json",
			            	success:function(data){
			            		if(data.code==0){
                                    clearInterval(timer);
			                        timer = setInterval(tick,1000);
			            			tick();
			            		}
			            	},
			            	complete:function(XMLHttpRequest,status){
						　　　　if(status=='timeout'){
						            flag == 0
						　　　　}
						　　}
                        })
			        }
				    function tick(){
				        t--;
				        oBtn.style.background = "gray";
				        oBtn.style.fontSize = "12px";
				        oBtn.textContent =t+ '秒后重发';
				        oBtn.style.cursor = "default";
				        if(t<=0){
				            oBtn.textContent ='获取验证码';
				            oBtn.style.fontSize = "12px";
				            oBtn.style.background = "#5589cf";
				            oBtn.style.cursor = "pointer";
				            clearInterval(timer);
				            flag = 0;
				            t = 60;
				        }
				    };

				}  
            })
        },
		methods:{
			sureBtnTeltk:function(){
				var self = this;
				if(!tool.tel($("input[name=userIphone]"))){return}
            	if(!tool.yzm($("input[name=userCode]"))){return}
			},
		    sureBtnTeltk: function(event){
            	var self = this;
            	
            	if(!tool.tel($("input[name=userIphone]"))){return}
            	if(!tool.yzm($("input[name=userCode]"))){return}
                
                $.ajax({
					url:common.getBaseUrl()+'/ajaxsdk/sdkuser/save.lg'+QUERY,
					type:'POST',
					dataType:'json',
					data:{match_id:self.matchid,phone:self.from.userIphone,code:self.from.userCode},
					success:function(data){
						if(data.code==0){
                            self.$parent.isTeltk = false;
                            
                            if($("#mabmBtn"+self.matchid).length>0){
                            	var omatchShow = $(".MatchShow"+self.matchid);
                                $("#mabmBtn"+self.matchid).attr("class","").addClass("item-ybm-btn").html('已报名');
                                omatchShow.attr("id",""+omatchShow.attr("id").split("|")[0]+"|"+omatchShow.attr("id").split("|")[1]+"|"+omatchShow.attr("id").split("|")[2]+"|3|"+omatchShow.attr("id").split("|")[4]+"|1")
                            }else{
                            	self.$parent.show=1;
                            }
                            common.tips(data.msg);
                        }else{
                            common.tips(data.msg);
						}
					},
					complete:function(xhr,ts){
						$(".loading-1").hide();
					}
				});
            	
            },
            closeBtnTeltk: function(event){
                this.$dispatch('child-msg', "aaa")
            	this.$parent.isTeltk = false;
            	$("body").off("touchmove",false);
            }
		}
	};
</script>