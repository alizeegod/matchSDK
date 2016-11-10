<style>
.match-comment-box,.match-comment-box *,.match-comment-box:after,.match-comment-box:before{
    box-sizing: border-box;
}
.match-comment-box{
    position: relative;
    font-size: 12px;
    padding: 72px 0 80px 21px;
    overflow:hidden;
}

.match-comment-box .mh-father-comment{
    overflow:hidden;
}

.pop_guide_task {
    width: 100%;
    height: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    bottom: 0;
    right: 0;
}
.pop {
    background: #303131;
    border-radius: 5px;
    color: #DDDDDD;
    font-size: 15px;
    position: absolute;
    z-index: 999;
    width: 80%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    padding: 10px;
}
.pop p {
    text-align: center;
}
.pop_btn {
    width: 40%;
    padding: 1.5% 0px;
    background: #5193FF;
    color: #fff;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>
<template>
<div class="season-tab">
   <!--  <childnav v-bind:tonum="totalNum"></childnav> -->
    <childnav v-ref:commentnum></childnav>
    <div class="season-tab-box">
       <!--## 评论组件 线上赛 ##-->
       <div class="match-comment-box">
         <list-component v-ref:alist v-bind:comments="comments"></list-component>

         <div v-if="!showMore" style="text-align:center;display:none;" class="loading-wrap top_color_0" v-show="comments.length>0">
              <p v-show="!listLoading&&!pageEnd">上拉显示更多</p>
              <div v-show="listLoading" class="loadingBoxdn">
                <p class="loadscroll">正在加载...</p>
              </div>
              <p class="loadscroll" v-show="pageEnd">已显示全部内容</p>
         </div>
         <input-component v-ref:input></input-component> 
       </div>

    </div>

</div>    

<!-- 弹窗 -->  
<div class="pop_guide_task" id="pop2" style="height: 414px;">
    <div class="pop">
        <div class="pop_body">
            <p class="pop_p2"></p> 
                <a href="javascript:;" class="pop_btn" style="display:none;">确定</a>
        </div>
    </div>
</div>


</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');
var listMod = require('./listMod.vue');
var inputMod = require('./inputMod.vue');
var $ = require('jQuery');

var common = require('../../js/common.js');
var zepto = require('../../js/zepto.min.js');


module.exports ={
  data:function(){
    return {
      myId:Miconfig.userId,
      nickName:Miconfig.username,
      avatar:Miconfig.avatar,
      totalNum:0,
      comments:[],
      listLoading:false,
      loading:false,
      startNums:0,
      listLength:1,
      scrollMore:1,
      pageEnd:false,
      page:1,
      linkMore:"",
      showMore:false,
      replyPerson:"",
      replyName:""

    }
  },
  components:{
    "list-component":listMod,
    "input-component":inputMod,
    'childnav':nav
  },
  events:{
    'addTotalNum':function(num){
        if(this.totalNum >= 100){
          this.totalNum="99+";
        }else{
          this.totalNum= parseInt(this.totalNum) + parseInt(num);
        }
       this.$refs.commentnum.totalNum= this.totalNum;
    },
    'openReply':function(el,item){
      var $input = this.$refs.input;
      $input.curEl = el;
      if(item){
          $input.replyEl = item;
      }else{
          $input.replyEl = {};
      }
      $input.openPannel();

    },
    'openReport':function(){

    },
    'addComents':function(tem){
      var _this = this;
      _this.$refs.alist.comments.unshift(tem);

    }
  },
  methods:{
    openInput:function(){
        this.$refs.input.curEl = {};
        this.$refs.input.openPannel();
    },
    openReply:function(el,curEl){//打开回复狂
      var con = curEl?("回复"+curEl.repname+"："):"";
      //$("#"+el.ctime).val(con).focus();
      this.replyPerson = curEl?curEl.repid:"";
      this.replyname = curEl?curEl.repname:"";

    },
    cancelReply:function(el){
    },
    openReport:function(index,isHot){

    },
    loadMoreCmt:function(page){
      var self = this;
      if(self.listLoading || self.pageEnd){
        return ;
      }
      if(self.startNums>=self.scrollMore){
        self.showMore = true;
        return;
      }
      self.listLoading = true;
      page = page ? page : "";
     // var time = self.comments.length>0 ? self.comments[self.comments.length-1].ctime:0;
     //ltime:time
      $.ajax({//查询评论列表
        url:common.getBaseUrl(),
        type:"GET",
        dataType:"jsonp",
        jsonp:"callback",
        data:{category:"comment_list",num:self.listLength,page:page,matchId:wsCache.get('HEROC').matchIdid},
        success:function(data){
          self.comments = self.comments.concat(data.data.latest);
          if(self.totalNum==0){
            self.totalNum = data.total_comment_num;
            self.totalNum > 100 ? (self.totalNum="99+") : self.totalNum;
          }
          if(self.startNums==0){
            if(data.data.latest.length<self.listLength){
              self.pageEnd = true;
              
            }
          }else{
            if(data.data.latest.length<self.listLength){
              self.pageEnd = true;
            }
          }
          
          self.$startNums += self.listLength;
          self.listLoading = false;
          if(page>=data.total_comment_num){
            self.listLoading = false;
            self.pageEnd = true;
            return;
          }


        }
      })
    },
    scrollToLoadMore:function(handle,callback) {
      var isWindow = handle==window,
      $handle = $(handle);
      handle = isWindow?window:$handle[0];
      handle.onscroll=function(){
        var pageHeight= isWindow?document.body.scrollHeight:$handle[0].scrollHeight;
        var scrollTop=isWindow?Math.max(document.body.scrollTop,document.documentElement.scrollTop):$handle[0].scrollTop;
        var windowHeight=isWindow?Math.max(document.body.clientHeight,document.body.offsetHeight):$handle.height();
        var totalHeight= parseFloat(scrollTop)+parseFloat(windowHeight);
        if(pageHeight<=totalHeight){
          $.isFunction(callback)&&callback();
        }
      };
    }
  },
  ready:function(){
    var self = this;
    self.loadMoreCmt("1");
    self.scrollToLoadMore(window,function(){
      self.page += 1;
      self.loadMoreCmt(self.page);

    })
   }

}

</script>