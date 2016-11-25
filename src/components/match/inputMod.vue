<style>
.match_reply{
    height: 41px;
    background: #626a7d;
    position: fixed;
    left: 50px;
    font-size: 10px;
    color: #5C5C5C;
    bottom: 0px;
    z-index: 99;
}
.match_reply_box {
    margin: 0 auto;
    width: 100%;
}
.match_top_btns{
    overflow: hidden;
    padding: 5px 5px 0px;
}
.match_reply .textarea {
    width: 90%;
    text-indent: 10px;
    color: #555555;
    height: 30px;
    font-size: 12px;
    border: 0;
    outline: none;
    resize: none;
    display: inline-block;
    line-height: 20px;
    padding: 0px;
    margin: 0px;
    border-radius: 5px;
    background: #b1b1b1;
    float: left;
    padding-top: 5px;
    user-select:text;
    -webkit-user-select:text;
}
.match_reply .textarea::placeholder{
    color: #555;
    padding-left:10px;
}
.match_top_btns .np-btn-submit {
    float: right;
    padding: 6px 14px;
    border-radius: 4px;
    color: #b1b1b1;
    line-height: 15px;
    border: #b1b1b1 solid 1px;
    border-radius: 5px;
    letter-spacing: 1px;
}	
</style>
<template>
    <div class="match_reply">
        <div class="match_reply_box">
            <div class="match_top_btns">
                <textarea class="textarea" contenteditable="true" v-model="content" placeholder="我来说一句..."></textarea>
                <b class="np-btn-submit" v-on:click="submit">发布</b>
            </div>
        </div>
    </div>
</template>
<script>
var common = require('../../js/common.js');
module.exports = {
	data:function(){
		return {
            "content":"",
            "type":"",
            "cid":"",
            "ctime":"",
            "pannel":false,
            "cmtLimitLength":300,
            "curEl":{},
            "replyEl":{},
            "myId":gload_conf.uid,
            "nickName":gload_conf.rolename,
            "avatar":gload_conf.avatar,
            "userarea":gload_conf.servername
		}
	},
	ready:function(){
		$(".match_reply").width($(window).width()-50);

	},
	methods:{
		openPannel:function(){
			this.pannel = true;
			if(this.replyEl.rolename){
				this.content = "回复 "+this.replyEl.rolename+"：";
			}else if(this.curEl.rolename){
				this.content = "回复 "+this.curEl.rolename+"：";
			}else{
				this.content = "";
			}
			this.$el.parentNode.querySelectorAll(".textarea")[0].innerHTML = this.content;
			this.$nextTick(function () {
				this.$el.parentNode.querySelectorAll(".textarea")[0].focus();
				
			});

		},
		submit_reply:function(){
			var  _this = this,el = _this.curEl,content = $.trim(this.content);
			content =content.replace(/回复 .+：/,"");
			if(!content){
				common.tips("回复内容不能为空哦~");
				return ;
			}
			if(_this.strlen(content)>_this.cmtLimitLength){
				common.tips("回复内容不能超过"+_this.cmtLimitLength+"字符");
				return ;
			}
			$.ajax({
				url:common.getBaseUrl()+'/match/reply.lg'+QUERY,
		        type:"POST",
		        dataType:"json",
		        data:{content:content,pid:_this.curEl.id,match_id:wsCache.get('HEROC').matchid},
		        success:function(data){
		        	if(data.code == 0){
                        var temp = {
			                "rtime": data.data.rtime,
			                "id": _this.myId,
			                "rolename":_this.username,
			                "status":"0",
			                "content": content,
			                "rnum":0,
			                "remark":"",
			                "passrepimgurl":"",
			                "passrepname":_this.curEl.rolename,
			                "cltip":""
						};
						el.replys.push(temp);
			            common.tips("回复成功");
			            _this.content = "";
		        	}else if(data.code<0){
                        common.tips("回复失败");
		        	}
		            
                }
            });
			
		},
		submit_comment:function(){
			var content = $.trim(this.content);
			var _this = this;
			if(!content){
				common.tips("评论内容不能为空哦~");
				return ;
			}
			if(_this.strlen(content)>_this.cmtLimitLength){
				common.tips("评论内容不能超过"+_this.cmtLimitLength+"字符");
				return ;
			}
			$.ajax({
			    url:common.getBaseUrl()+'/match/reply.lg'+QUERY,
		        type:"POST",
		        dataType:"json",
		        data:{content:content,match_id:wsCache.get('HEROC').matchid,pid:0},
		        success:function(data){
		        	if(data.code==0){
                        var temp = {
			                "ctime": data.data.ctime,
	                        "id": _this.myId,
	                        "logo": _this.avatar,
	                        "rolename": _this.nickName,
	                        "status":"0",
	                        "oper_status":0,
	                        "report_status":0,
	                        "content": content,
	                        "rnum":0,
	                        "servicename": _this.userarea,
	                        "replys":[]
						};
                        common.tips("发表成功");
				        _this.$dispatch('addTotalNum', 1);
				        _this.$dispatch('addComents',temp);
				        _this.content="";
				        window.scrollTo(0, 0);
                    }else{
		        		common.tips(data.msg);
		        	}
		        }
            });
		},
		closePannel:function(e){
			this.pannel = false;
			if(e){
				e.stopImmediatePropagation();
				e.stopPropagation();
				e.preventDefault();
			}
		},
		strlen(str) {
			var len = 0;
			for (var i = 0; i < str.length; i++) {
				var c = str.charCodeAt(i);
				//单字节加1
				if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
					len++;
				}else {
					len += 2;
				}
			}
			return len;
		},
		submit:function(e){
			if(this.curEl.id){
				this.submit_reply();
			}else{
				this.submit_comment();
			}
			if(e){
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
			}
		}

	}

}

	
</script>