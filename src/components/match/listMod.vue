<style>
.match-comment-box .mh-post-1{
    position: relative;
    padding-left: 40px;
    padding-bottom: 15px;
    padding-top:10px;
    min-height: 36px;
    vertical-align: top;
    overflow: hidden;
    color: #fff;
   /* border-bottom: 1px solid #212C3F;*/
}
.match-comment-box .mh-post-1 > img{
    position: absolute;
    top: 10px;
    left: 0;
    width: 36px;
    height: 36px;   
}
.match-comment-box .mh-post-1 > .mh-post-body{

}
.match-comment-box .mh-post-1 .mh-post-header{
    margin-bottom: 5px;
}
.match-comment-box .mh-post-1 .mh-post-footer-time{
    color: #aaaaaa;
    font-size: 10px;
}
.match-comment-box .mh-post-1 .mh-post-footer-area{
    color: #fffefe;
    background: #e89261;
    padding:2px 8px;
    border-radius: 8px;
    font-size: 8px;
    line-height: 8px;
    display: inline-block;
}
.match-comment-box .mh-post-1 .mh-user{
    color: #6caaff;
    line-height: 20px;
    font-weight:bold;
    margin-bottom: 2px;
}
.match-comment-box .mh-post1 .mh-user{
    color: #6caaff;
    line-height: 20px;
    margin-bottom: 8px;
    font-weight:bold;
}
.match-comment-box ul.children{
  position: relative;
}
.match-comment-box  .mh-post-body{
   margin:0 0 10px;
   overflow:hidden;  
   border-bottom: 1px solid #212C3F;
   padding-bottom: 10px;
}
.match-comment-box .mh-post-1 .mh-post-content{
    padding-bottom: 10px;
    line-height: 18px;
    color: #e1e1e1;
    font-size: 15px;
    line-height: 22px;
    padding-right: 20px;
}
.match-comment-box .mh-post-footer-btn{
    width: 100%;
    height: 14px;
    line-height: 14px;
    overflow:hidden;
}

.match-comment-box .mh-post1 .mh-post-footer-time{
    color: #3e4247;
    margin-left:20px;
    font-size: 12px;
}
.match-comment-box .mh-post-footer-replay{
    width: 16px;
    height: 13px;
    display: block;
    float: right;
    background: url(../../images/nav_ico_nor_3_@3x.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 23px;
}

.match-comment-box  .mh-post1{
    position: relative;
    overflow:hidden;
    color: #aaaaaa;
}
.match-comment-box  .mh-post1 .mh-post-header{
    position:relative;
    float:left;
    min-height:30px;
    margin-right:10px;
}
.match-comment-box  .mh-post1 .mh-post-content{
    width:96%;
    min-height:30px;
    margin-left:0;
    padding-left:0;
    color: #aaa;
    font-size: 12px;
    line-height: 18px;
}	
.cheak_more{
  font-size: 12px;
  font-weight: normal;
  color: #6caaff;
  margin-left: 45%;
}
.none_tips{color:#fff;font-size:12px;margin-top:20px;text-align:center;}

</style>
<template>

  <ul class="mh-father-comment" v-if="comments.length>0">
  	<li v-for="el in comments" class="mh-post-1">
  	  <img class="mh-user-avatar" v-bind:src="getAvatar(el.logo)" alt="头像">
  	  <div class="mh-post-body">
  	  	<div class="mh-post-header">
  	  	  <p class="mh-user">{{el.rolename}}</p>
  	  	  <span class="mh-post-footer-area">{{el.servicename}}</span>
  	  	</div>
  	  	<div class="mh-post-content" v-on:tap.stop="reply(el)">
  	  	  <p>{{{el.content | bbbb}}}</p>
  	  	</div>
  	  	<div class="mh-post-footer-btn">
  	  	  <span class="mh-post-footer-time">{{el.create_time}}</span>
  	  	  <span class="mh-post-footer-replay" v-on:tap.stop="reply(el)"></span>
  	  	</div>
  	  </div>
  	  <ul class="children">
  	  	<li class="mh-post1" v-for="item in el.replys">
  	  	  <div class="mah-post-body">
  	  	  	<div class="mh-post-header">
  	  	      <p class="mh-user">{{item.rolename}}</p>
  	  	  	</div>
  	  	  	<div class="mh-post-content">
  	  	  	  <div v-on:tap.stop="reply(el,item,$event)">
  	  	  	  	<p v-if="!item.passrepname">{{item.content | bbbb}}<span class="mh-post-footer-time">{{item.create_time}}</span></p>
                <p v-else class="top_color_3" style="font-size:12px;">
                回复<span class="mh-user">{{item.passrepname}}</span>&nbsp;&nbsp;{{{item.content | bbbb}}}<span class="mh-post-footer-time">{{item.create_time}}
                 </p>
  	  	  	  </div>
  	  	  	</div>
  	  	  </div>
  	  	</li>
  	  </ul>
  	  <!-- <span v-if="el.rnum>3" v-on:tap.stop="moreReply(el)" class="cheak_more top_color_2">查看更多回复</span> -->
  	</li>
  </ul>
  <p v-if="comments.length==0" class="none_tips">还没有人评论，还不快抢沙发！~</p>
</template>
<script>
var common = require('../../js/common.js');
module.exports ={
  data:function(){
    return {
      page:1
    }
  },
  props:{
  	comments:[]
  },
  methods:{
  	getAvatar:function(str){
  		var defaultImg = '../../images/noimg.png';//默认头像地址
  		return str ? str : defaultImg;
  	},
  	moreReply:function(el){//更多回复
      var self = this;
      self.page += 1;
      if(typeof el.pageEnd == "undefined"){
      	el.pageEnd = false;
      	el.startNums = 1;
      }
      if(!el.pageEnd){
      	$.ajax({
      		url:common.getBaseUrl(),
      		type:"GET",
      		dataType:"jsonp",
          jsonp:"callback",
      		data:{category:"reply_list",commid:el.commid,num:self.$parent.listLength,page:self.page},
      		success:function(data){
      		  if(self.page>=data.rnum){
              el.pageEnd = true;
              el.rnum = 1;
      		  }
      		  el.startNums += data.replys.length;
      		  el.replys = el.replys.concat(data.replys);

      		}

      	})
      }

  	},
  	deleCmt:function(el){//删除自己的评论

  	},
  	deleReply:function(el){//删除自己的回复

  	},
  	report:function(el){

  	},
  	reply:function(el,item,e){//回复评论
        var self = this;
        self.$dispatch('openReply',el,item);//派发事件，事件沿着父级链冒泡 el 父  item  儿子
        if(e){
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            return false;
        }

  	}
  }

}
</script>