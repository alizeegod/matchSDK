<style>
.match-comment-box,.match-comment-box *,.match-comment-box:after,.match-comment-box:before{
    box-sizing: border-box;
}
.match-comment-box{
    position: relative;
    font-size: 12px;
}
.match-comment-box .mh-comment-con{
    padding: 54px 0 80px 21px;
    overflow:hidden;
}
.match-comment-box .mh-father-comment{
    overflow:hidden;
}
.match-comment-box .mh-post-1{
    position: relative;
    padding-left: 40px;
    padding-bottom: 5px;
    padding-top:10px;
    min-height: 36px;
    vertical-align: top;
    overflow: hidden;
    color: #fff;
    border-bottom: 1px solid #212C3F;
}
.match-comment-box .mh-post-1 > img{
    position: absolute;
    top: 10px;
    left: 0;
    width: 36px;
    height: 36x;   
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
    height: 13px;
    line-height: 13px;
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
    margin-right:0;
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
.match_reply textarea {
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
}
.match_reply textarea::placeholder{
    color: #555;
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
   <!--## 评论组件 线上赛 ##-->
   <div class="match-comment-box">
       <div class="mh-comment-con">
           <ul class="mh-father-comment">
               <li class="mh-post-1">
                   <img class="mh-user-avatar" src="../../images/prank-timg.png">
                       <div class="mh-post-body">
                              <div class="mh-post-header">
                                  <p class="mh-user">无敌、申请</p>
                                  <span class="mh-post-footer-area">华北大区</span>
                              </div>
                              <div class="mh-post-content">
                                  <p>
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                  </p>
                              </div>
                              <div class="mh-post-footer-btn">
                                  <span class="mh-post-footer-time">1小时前</span>
                                  <span class="mh-post-footer-replay"></span>
                              </div>
                       </div>
                       <ul class="children">
                          <li class="mh-post1">
                            <div class="mah-post-body">
                                <div class="mh-post-header">
                                     <p class="mh-user">无敌、申请：</p>
                                </div>
                                <div class="mh-post-content">
                                    <div>
                                        <p>为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了<span class="mh-post-footer-time">1小时前</span></p>
                                    </div>
                                </div>
                            </div>
                            <ul class="children">
                              <li class="mh-post1">
                                <div class="mah-post-body">
                                    <div class="mh-post-header">
                                         <p class="mh-user">无敌、申请：</p>
                                    </div>
                                    <div class="mh-post-content">
                                        <div>
                                            <p>为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了为什么我的恋人关系到599就不往上涨了<span class="mh-post-footer-time">1小时前</span></p>
                                        </div>
                                    </div>
                                </div>
                              </li>
                          </ul>
                          </li>
                      </ul>
               </li>
               <li class="mh-post-1">
                   <img class="mh-user-avatar" src="../../images/prank-timg.png">
                       <div class="mh-post-body">
                              <div class="mh-post-header">
                                  <p class="mh-user">无敌、申请</p>
                                  <span class="mh-post-footer-area">华北大区</span>
                              </div>
                              <div class="mh-post-content">
                                  <p>
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                    为什么我的恋人关系到599就不往上涨了。她那都605了。
                                  </p>
                              </div>
                              <div class="mh-post-footer-btn">
                                  <span class="mh-post-footer-time">1小时前</span>
                                  <span class="mh-post-footer-replay"></span>
                              </div>
                       </div>
                       <ul class="children">
                          <li class="mh-post1">
                            <div class="mah-post-body">
                                <div class="mh-post-header">
                                     <p class="mh-user">无敌、申请：</p>
                                </div>
                                <div class="mh-post-content">
                                    <div>
                                        <p>为什么我的恋人关系到599<span class="mh-post-footer-time">1小时前</span></p>
                                    </div>
                                </div>
                            </div>
                            <ul class="children">
                              <li class="mh-post1">
                                <div class="mah-post-body">
                                    <div class="mh-post-header">
                                         <p class="mh-user">无敌、申请：</p>
                                    </div>
                                    <div class="mh-post-content">
                                        <div>
                                            <p>为什么我的恋人关系到599就不往上涨了<span class="mh-post-footer-time">1小时前</span></p>
                                        </div>
                                    </div>
                                </div>
                              </li>
                          </ul>
                          </li>
                      </ul>
               </li>
           </ul>
        </div>
        <div class="match_reply">
           <div class="match_reply_box">
               <div class="match_top_btns">
                   <textarea id="keyb" placeholder="我来说一句..."></textarea>
                   <b class="np-btn-submit">发布</b>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');


var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var comment = Vue.extend({
  name: 'comment',
  data: function() {
    return {
      
            apiUrl:'http://172.18.1.135/vue-match3/src/json/a'
          // apiUrl:'http://192.168.0.102/vue-match3/src/json/a'
           
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
         this.commFn();
         this.subBtnFn();
  },
    methods: {
        commFn:function(){
            $(".match_reply").width($(window).width()-50);
        },
        subBtnFn:function(){
            $(".np-btn-submit").on('click',function(){
                if($("#keyb").val()==''){
                    alert('内容不能为空');
                    return false;
                }
            })
        }
    }
});

module.exports = comment;
</script>