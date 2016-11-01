<style>
	#zzmask{
		width: 100%;
		height: 100%;
		position: fixed;
		left:0;
		top: 0;
		z-index: 30;
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
		z-index:40;
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
		width: 95%;
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
       padding: 5px 10px;
       letter-spacing: 1px;
       position: absolute;
       right:5px;
       top: 5px;
       line-height: 14px;
       border-radius: 3px;
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
		<a href="javascript:;" v-on:click="sureBtnTeltk" title="确定" class="sureBtn"></a>
	</div>
</template>

<script>


import tool from '../../js/tool'



	export default({
		data(){
			return {
                from :{
                	userIphone:'',
                	userCode:'',
                },
                username:Miconfig.username,
                userarea:Miconfig.userarea
			}
		},
		props:[
		    'matchchannl',
		    'matchid',
		    'matchstate'
        ],
		vuex: {
			getters: {
				userCon: state => state.userCon
			}
		},
        ready: function(){
            new tool.verification("match-teltk-code",{
	            'endTime' : '0',
	            'startTime': '60',
	            'outColor' : '#fff',
	            'outFontSize' : '12px',
	            'outBackground' : '#7F7F7F',
	            'outText' : '秒后重发',
	            callBack : function(){
	                // ajax回调
	                console.log('ajax报名')
	            }
	        })
        },
		methods:{
            sureBtnTeltk: function(event){
            	var _this = this;
    //         	$("a[data-id="+_this.matchid+"]").removeClass("item-djbm-btn").addClass("item-ybm-btn").html('已报名');
				// if($($("a[data-id="+_this.matchid+"]").parents("div.match-list-zd")).length>0){
				//       $($("a[data-id="+_this.matchid+"]").parents("div.match-list-zd")).attr("id","MatchShowLi|floor1|"+_this.matchid+"|"+4+"")
				// }else if($($("a[data-id="+_this.matchid+"]").parents("li.ceil")).length>0){
				//       $($("a[data-id="+_this.matchid+"]").parents("li.ceil")).attr("id","MatchShowLi|floor2|"+_this.matchid+"|"+4+"")                         
				// }
    //         	return;
            	
            	if(!tool.tel($("input[name=userIphone]"))){return}
            	if(!tool.yzm($("input[name=userCode]"))){return}
            		
            	//$.ajax
            	$.ajax({
					url:'http://192.168.0.102/vue-match1/src/json/a',
					type:'GET',
					dataType:'jsonp',
					jsonp:'callback',
					jsonpCallback:'jsonp'+new Date().getTime(),
					data:{$category:"matchTeltk",username:_this.username,userArea:_this.userarea,userIphone:this.from.userIphone,userCode:this.from.userCode,matchchannl:_this.matchchannl,matchid:_this.matchid},
					success:function(data){
						//返回0 成功====修改状态state
						//返回1 已注册用户
						//返回2 验证码不对
						//返回4 
						if(data.msg=="1"){
                            _this.$parent.isTeltk = false;
                            $("a[data-id="+_this.matchid+"]").removeClass("item-djbm-btn").addClass("item-ybm-btn").html('已报名');
                            //报名成功以后修改state状态_this.state\data.state
			                if($($("a[data-id="+_this.matchid+"]").parents("div.match-list-zd")).length>0){
							      $($("a[data-id="+_this.matchid+"]").parents("div.match-list-zd")).attr("id","MatchShowLi|floor1|"+_this.matchid+"|"+4+"")
							}else if($($("a[data-id="+_this.matchid+"]").parents("li.ceil")).length>0){
							      $($("a[data-id="+_this.matchid+"]").parents("li.ceil")).attr("id","MatchShowLi|floor2|"+_this.matchid+"|"+4+"")                         
							}
                        }else if(data.msg=="2"){
                            alert('已注册用户')
						}else if(data.msg=="3"){
                            alert('验证码不对') 
						}
					}
				});
            	
            },
            closeBtnTeltk: function(event){
            	this.$parent.isTeltk = false;
            	$("body").off("touchmove",false);
            }
		}
	})
</script>