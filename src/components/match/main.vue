<style soped>

a{
    text-decoration: none;
   
}
.season-tab-box,.season-tab-box *,.season-tab-box:after,.season-tab-box:before{
    box-sizing: border-box;
}
.match-wrap,.match-wrap *,.match-wrapx:after,.match-wrap:before{
    box-sizing: border-box;
}
.dianbo-img-wrap {
    position: relative;
    min-width: 145px;
    min-height: 84px;
}
.dianbo-img-wrap a{
    width: 100%;
    height: 100%;
    display: block;
}
.media-holder {
    position: relative;
    min-width: 145px;
    min-height: 84px;
    width: 100%;
    display: block;
}
.dianbo-img {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background: #ccc;
}
.content{
    padding-left: 50px;
    position: relative;
    color: #fff;
}
.content .nav{
    width: 100%;
    overflow: hidden;
}
.content .nav li{
    float: left;
    width: 33%;
    text-align: center;
    background: #eee;
}
.content .nav li a{
    font-size: 30px;
    color: red; 
}

.match-match-hed{
    padding: 8px 0 7px 33px; 
    background: #1a212e;
    overflow: hidden;
    position: fixed;
    left: 50px;
    top: 0;
    z-index: 4;
    transition: all .5s ease-in;
    box-sizing: border-box;
}
.match-match-hed span{
    color: #fff;
    width: 80px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin-left: 30px;
    float: left;
    border-radius: 5px;
    letter-spacing: 1px;
    font-size: 14px;
    text-decoration: none;
    border: #fff solid 1px;
}
.match-match-hed span:first-child{
    margin-left: 0;
}
.match-match-hed span.on{
   background: #1d9618;
   border: #1d9618 solid 1px;
}
.match-match-list{
    padding-top: 40px;
}


.match-list-zd{
    margin-top: 15px;
    color: #ccc;
    padding: 15px;
    background: #1c2236;
    position: relative;
    overflow: hidden;
    font-size: 14px;
}
.match-list-zd > a{
    color: #ccc;
    font-size: 14px;  
}
.match-list-zd .dianbo-img-wrap-width{
    float: left;
    width: 52.5%;
}
.match-list-zd .item-info{
    float:left;
    width: 47.5%;
    padding-left: 10px;
}
.match-list-zd .item-info  p{
    margin-bottom: 10px;
}
.match-list-zd .item-txt{
   letter-spacing: 1px;
   height: 17px;
   line-height: 17px;
   margin-top:5px;
   font-size: 17px;
   color: #fbfbfb;
}
.match-match-list .item-time{
    height: 14px;
    line-height: 14px;
    margin-left: 8px;
    color: #ccc;
}
.match-match-list .item-time i{
    width: 10px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_4_@3x.png);
    background-size: 100% auto;
}
.match-match-list .item-djs-time i{
    width: 12px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_1_@3x.png);
    background-size: 100% auto;
}
.match-match-list .item-djs-time{
    color: #f56300;
}
.match-match-list .item-jsd-time{
    color: #fdbd2f;
}
.match-match-list .item-jsd-time i{
    width: 12px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_3_@3x.png);
    background-size: 100% auto;
}

.match-list-zd .item-rmb i{
    width: 11px;
    height: 12px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_2_@3x.png);
    background-size: 100% auto;   
}
.match-list-zd .item-a{
    margin-left: 8px;
    color: #ccc;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
}
.match-match-list .match-list-zd .item-btn{
    width: 65px;
    height: 22px;
    position: absolute;
    right: 15px;
    bottom: 20px;
    color: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    line-height: 22px;
    border-radius: 2px;
}
.match-match-list .item-zbz-btn{
    background:#db2323;
}
.match-match-list .item-jjks-btn{
    background:#d78933;
}
.match-match-list .item-yjs-btn{
    background:#666;
    color: #fbfbfb;
}
.match-match-list .item-djbm-btn{
    background: #46af36;
    color: #fff;
}
.match-match-list .item-ybm-btn{
    background: #46af36;
    color: #fff;
}
.match-match-con{
    color: #fff
}
.match-match-list, .match-match-list *, .match-match-list :after, .match-match-list :before,.max-flex, .max-flex *, .max-flex :after, .max-flex :before,.max-match-flex,.max-match-flex *, .max-match-flex :after, .max-match-flex :before {
    box-sizing: border-box;
}

.max-match-flex{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    color:#fff;
    background: #050d19;
}
.max-match-flex li{
    width: 50%;
    float: left;
    display: block;
    position: relative;
    padding:15px 15px 15px 15px;
    background: #1c2236;
    margin-top: 15px;
    
}
.max-match-flex li:nth-child(2n+1) {
   border-right:#050d19 solid 1px;
}
.max-match-flex .card-item{
background: #1c2236;
}
.max-match-flex li > img{
    max-width: 100%;
    min-height: 150px;
    display: block;
    position: relative;
}
.item-ico{
    position: absolute;
    left: 0;
    top: 0;
    width: 62px;
    height: 62px; 
    z-index: 1;   
}
.item-ico1{
    background-image: url(../../images/match_sign_2_@3x.png);
    background-size: 100% 100%; 
}
.item-ico2{
    background-image: url(../../images/match_sign_1_@3x.png);
    background-size: 100% 100%; 
}
.max-match-flex .item-pic{
        width: 100%;
}
.max-match-flex .item-info{
    display:block;
    font-size:14px;
    color:#fff;
    margin-top: 20px;
    position:relative
}
.max-match-flex .item-txt{
    display:block;
    font-size:17px;
    line-height: 17px;
    width:100%;
    position:relative;
    color:#fff;
    margin-top: 15px;
}
.max-match-flex .item-num{
    float: right;
    font-size: 12px;
    line-height: 18px;
}
.match-match-list .max-match-flex .item-btn{
    width:60px;
    height:20px;
    float:right;
    display:block;
    text-align:center;
    border-radius:2px;
    line-height:20px;
    font-size:12px;
    color: #fbfbfb;
}

.match-match-list .match-link-more{
    display: block;
    text-align: center;
    font-style: 12px;
    color: #fff;
    line-height: 12px;
    padding: 20px; 
}
.loadscroll {
    text-align: center;
    font-size: 14px;
    padding: 20px 0 30px 0;
    color: #6D7887;
    width: 100%;
}
</style>
<template>
<div class="match-match-hed">
    <span v-for="item in matchTab" :class="{on:item.iscur}" @click="setCur($index)">{{item.text}}</span>
</div>

<div class="match-match-list" id="match-list-main">
    <div class="match-list-zd" v-for="list in stickTop | filterBy '1' in 'dataTop'" id="MatchShowLi|floor1|{{list.id}}|{{list.state}}" starttime="{{list.starttime}}" endtime="{{list.endtime}}">
        <i class="item-ico item-ico{{ list.racetype }}"></i>
        <div class="dianbo-img-wrap dianbo-img-wrap-width">
          <a v-if="list.racetype==1" v-link="'/match/lineLive/'+list.matchid" v-on:click="HeroM({name:list.name,matchid:list.matchid,channelid:list.channelid})">
              <img v-bind:src=list.picimg alt="{{ list.name }}" class="dianbo-img">
              <img src="../../images/media-holder.png" class="media-holder">
          </a>
          <a v-if="list.racetype==2" v-link="'/match/lineProc/'+list.matchid" v-on:click="HeroM({name:list.name,matchid:list.matchid,channelid:list.channelid})">
              <img v-bind:src=list.picimg alt="{{ list.name }}" class="dianbo-img">
              <img src="../../images/media-holder.png" class="media-holder">
          </a>
        </div>
        <div class="item-info">
            <p class="item-txt">{{ list.name }}</p>
            <p class="item-time p-countdown"></p>
            <p class="item-a item-rmb"><i></i>奖金：{{ list.bonus }}元</p>

            <a v-if="list.state == 0" href="javascript:;" class="item-btn item-jjks-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                即将开始
            </a>
            <a v-if="list.state == 1" href="javascript:;" class="item-btn item-zbz-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                直播中
            </a>
            <a v-if="list.state == 2" href="javascript:;" class="item-btn item-yjs-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                已结束
            </a>
            <a v-if="list.state == 3" href="javascript:;" class="item-btn item-djbm-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                点击报名
            </a>
            <a v-if="list.state == 4" href="javascript:;" class="item-btn item-ybm-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                已报名
            </a>
        </div>  
    </div>
     <ul class="max-match-flex">
        <li class="ceil" v-for="list in stickTop | filterBy '0' in 'dataTop'" track-by="$index" id="MatchShowLi|floor2|{{list.matchid}}|{{list.state}}" starttime="{{list.starttime}}" endtime="{{list.endtime}}">
            <div class="card-item" > 
               <i class="item-ico item-ico{{ list.racetype }}"></i>
               <div class="dianbo-img-wrap">
                   <a v-if="list.racetype==1" v-link="'/match/lineLive/'+list.matchid" v-on:click="HeroM({name:list.name,matchid:list.matchid,channelid:list.channelid})">
                      <img v-bind:src=list.picimg alt="{{ list.name }}" class="dianbo-img">
                      <img src="../../images/media-holder.png" class="media-holder">
                  </a>
                  <a v-if="list.racetype==2" v-link="'/match/lineProc/'+list.matchid" v-on:click="HeroM({name:list.name,matchid:list.matchid,channelid:list.channelid})">
                      <img v-bind:src=list.picimg alt="{{ list.name }}" class="dianbo-img">
                      <img src="../../images/media-holder.png" class="media-holder">
                  </a>  
               </div>
               <span class="item-txt">
                   <span class="item-tit">{{ list.name }}</span>
                   <span class="item-num">{{ list.number }}人参加</span>
               </span>
               <span class="item-info">
                   <span class="item-time p-countdown"></span>
                    <a v-if="list.state == 0" href="javascript:;" class="item-btn item-jjks-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                        即将开始
                    </a>
                    <a v-if="list.state == 1" href="javascript:;" class="item-btn item-zbz-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                        直播中
                    </a>
                    <a v-if="list.state == 2" href="javascript:;" class="item-btn item-yjs-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                        已结束
                    </a>
                    <a v-if="list.state == 3" href="javascript:;" class="item-btn item-djbm-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                        点击报名
                    </a>
                    <a v-if="list.state == 4" href="javascript:;" class="item-btn item-ybm-btn" data-vurl="{{list.videoUrl}}" data-id="{{list.matchid}}" data-channel="{{list.racetype}}">
                        已报名
                    </a>
               </span>
            </div>
        </li>
    </ul>

</div>
<div  class="loadscroll subtitle-color" id="mover">上拉显示更多</div>

<!-- <teltk v-if="isTeltk" :matchid="matchid" :matchchannl="matchchannl" :matchstate="matchstate"></teltk>
  -->   
</template>

<script>
var common = require('../../js/common.js');
//离线缓存https://github.com/WQTeam/web-storage-cache

module.exports = {
    data:function(){
        return {
            isTeltk:false,
            aaa:"sss",
            matchTab :[
                {text:"显示全部",iscur:true,racetype:0},
                {text:"HPL赛事",iscur:false,racetype:1},
                {text:"线上比赛",iscur:false,racetype:2}
            ],
            stickTop:[],
            curPage : 1,
            racetype:0,
            matchid:'',
            matchchannl:'',
            matchstate:'',
            pageTotal:'',
            pagesize:12
        }
    },
    methods:{
        loadMore:function(curPage){
            var self = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:"GET",
                dataType:"json",
                data:{category:"gamelist",racetype:self.racetype,page:curPage,pagesize:self.pageSize},
                success:function(data){
                    if(data.status=="ERROR"){
                        $("#mover").text('还没有哦');
                        return ;
                    }
                    $("#mover").text('上拉加载更多');
                    self.pageTotal = Number(data.totalpage);
                    self.stickTop = self.stickTop.concat(data.datalist);
                    
                }
            })
        },
        LoadMoreData:function(racetype,curPage){// 上啦加载更多
            var self = this;
            var _key = 1;
            var hammertime = new Hammer(document.getElementById("match-list-main"));
            hammertime.on("panstart panup panend",function(e){
                if(_key == 1){
                    var windowHeight = document.documentElement.clientHeight,
                       bodyscrollTop = document.body.scrollTop,
                          pageHeight = document.documentElement.scrollHeight;
                    if(bodyscrollTop >= (pageHeight-windowHeight)){
                        if(e.eventType == 2){
                            $("#mover").html("加载中。。。。")
                        }else if(e.type == "panend"){//事件名称
                            _key = 0;
                            if(curPage<self.pageTotal){//当前页数 小于总页数
                                curPage = curPage+1;
                                self.loadMore(curPage);
                                if(curPage == self.pageTotal){
                                    $("#mover").text("没有了")
                                }else{
                                    $("#mover").text("上拉加载更多");
                                    _key = 1; 
                                }
                            }else{
                                $("#mover").text("没有了")
                            }
                        }
                    }
                }
            })
        },
        setCur: function (index) {
            var self = this;
            self.matchTab.map(function (v,i) {
                i==index? (v.iscur=true,self.racetype = v.racetype,self.curPage=1): v.iscur=false
            });
            self.stickTop=[];
            window.scrollTo(0, 0);
            self.loadMore(1)
            self.LoadMoreData(self.racetype,self.curPage)
        },
        HeroM:function(obj){
            var self = this;
            var wsData = {
                matchname : '',//赛事名称
                matchid : '',//赛事id
                channelid:'',//赛事分类id  11 淘汰赛 12 积分赛 13 线上赛  （大分类 racetype  1 hpl赛事  2 线上赛）
                userid : '',//用户id
                starttime : '',//开始时间
                endtime:''//结束时间
            }
            var matchname = obj.name;
            var matchid = obj.matchid;
            var channelid = obj.channelid;
            var userid = Miconfig.userid;
            wsData = {
                matchname : matchname,
                matchid : matchid,
                channelid : channelid,
                userid : userid
            }
            wsCache.set('HEROC',wsData);
        }
    },
    ready:function(){
        var self = this;
        self.LoadMoreData();
        self.setCur(0);
        setTimeout(function(){
            if($(".match-match-list").height() > ($(window).height()-42)){
                common.scroll(function(direction){
                    if(direction=="down"){
                        $(".match-match-hed").css("top","-52px");
                    }else{
                        $(".match-match-hed").css("top","0");
                    }
                }); 
            } 
        },100);
        $(".match-match-hed").width($(window).width()-50-33)
    }
}
</script>

