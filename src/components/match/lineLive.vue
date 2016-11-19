<style>
.match-live-box{
    padding-top: 72px;
}
.match-live-box,.match-live-box *,.match-live-box:after,.match-live-box:before{
    box-sizing: border-box;
}
.loading-1{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:3;
    background:#050d19;
}
.loading-1 img{
    width: 32px;
    height: 32px;
    position: absolute;
    left:50%;
    top:40%;
    margin:-16px 0 0 -16px;
    z-index: 1;
}
.match-live-box{
    width: 100%;
    overflow: hidden;
    position: relative;
}
.match-live-box .live-box-con{
    padding-top:0;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
}
.item-child-hed{
    width: 100%;
    overflow: hidden;
    margin-bottom: 18px; 
    height: 24px;
    line-height: 24px;
}
.item-child-hed .item-child{
    float: left;
}
.item-child-hed .item-child-hed-a{
    padding: 0 10px;
    background: #db2323;
    font-size:10px;
    height: 100%;
    line-height: 24px;
    border-radius: 3px;
    margin-right: 5px;
}
.item-child-hed .item-child-hed-b{
    font-size:14px;
}
.item-child-hed .item-child-hed-c{
    padding: 5px 10px;
    background: #46a99b;
    font-size:12px;
    line-height: 12px;
    border-radius: 3px;
    margin-right: 5px;
    letter-spacing: 1px;
    float: right;
}
.match-live-box .item-box{
    flex: 1;
    width: 0;
    flex-basis: 0;
    max-width: 100%;
    height: 100%;
    position: relative;
}
.match-live-box .item-child-box{
    position:relative;
    min-width: auto;
    min-height: auto;
}
.match-live-box .item-ceil-fl{
    padding:8px 15px;
}
.match-live-box .dianbo-img{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    background: #ccc;
}
.match-live-box .media-holder{
    position: relative;
    min-width: 145px;
    min-height: 80px;
    width: 100%;
    display: block;
}
.match-live-box .dianbo-play-icon{
    position: absolute;
    width: 86px;
    height: 50px;
    line-height: 50px;
    border-radius: 8px;
    background: rgba(0,0,0,0.8);
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -43px;
}
.match-live-box .paly-icon{
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin:-13px 0 0 -10px;
    width: 21px;
    height: 26px;
    background-image: url(../../images/ico_play_big_@3x.png);
    background-size: 100% 100%;
}
.match-live-box .item-box-fr{
    background: #050d19;
}
.match-live-box .item-box-fr .hd-list{
    background: #1c212b;
    font-size: 12px;
    line-height: 12px;
    padding: 0 15.1%;
    height: 35px;
    line-height: 35px;
    color: #708cc7;
}
.match-live-box .bd-box-list{
    width:69.8%;
    float:left;
    position:absolute;
    left:15.1%;
    top:0;
}
.match-live-box .hd-list .prev{
    width: 15.1%;
    position: absolute;
    top: 0;
    text-align:center;
    left: 0;
     color: transparent;
}
.match-live-box .hd-list .next{
    width: 15.1%;
    position: absolute;
    top: 0;
    text-align:center;
    right: 0;
     color: transparent;
}
.match-live-box .hd-list .prev i{
    display: inline-block;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    border:#708cc7 solid 2px;
    border-top:0;
    border-right: 0;
    margin-top: 10px;
}
.match-live-box .hd-list .next i{
    display: inline-block; 
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    border:#708cc7 solid 2px;
    border-bottom:0;
    border-left: 0;  
    margin-top: 10px; 
}
.match-live-box .bd-list{
    width: 69%;
    float: left;
}
.match-live-box .bd-list ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.match-live-box .bd-list li{
    width:33.33333333333%;
    float: left;
    text-align: center;
    height: 35px;
}
.match-live-box .bd-list li.on{
    color: #e1e1e1;
}
.match-live-box .bd-list li.on span{
    height: 35px;
    border-bottom: #e1e1e1 solid 2px;
}
.match-live-box .bd-scroll-box{
    overflow-y: auto;
    height: 100%;
}
.match-live-box .bd-scroll-box ul{
    width:100%;
    font-size:11px;
    display: none;
}
.match-live-box .bd-scroll-box ul.on{
    display: block;
}
.match-live-box .bd-scroll-box ul li{
    overflow:hidden;
    background:#202734;
    border-bottom:#3c475f solid 1px;
    height:45px;
    text-align:center;
}
.match-live-box .bd-scroll-box .item-time{
    float:left;
    width:15.1%;
    height:100%;
    padding:9px 10px 10px;
    color: #51658f;
    font-size: 9px;
    text-align: center;
}
.match-live-box .bd-scroll-box .item-time2{
    line-height: 9px;
}
.match-live-box .bd-scroll-box .item-time2{
    font-size:14px;
    line-height: 14px;
}
.match-live-box .bd-scroll-box .item-name1{
    float:left;
    width:26.4%;
    background:#050d19;
    height:100%;
    line-height:45px;
}
.match-live-box .bd-scroll-box .item-name2{
    float:left;
    width:26.4%;
    background:#050d19;
    height:100%;
    line-height:45px;
}
.match-live-box .bd-scroll-box .item-vs{
    float:left;
    width:8.1%;
    background:#050d19;
    height:100%;
    line-height:45px;
}
.match-live-box .bd-scroll-box .item-zb{
    float:left;
    width:24%;
    background:#050d19;
    height:100%;
    line-height:45px;
}
.match-live-box .bd-scroll-box .item-zb a{
    width:62px;
    height:20px;
    background:#1f2630;
    color:#4c5b76;
    display:inline-block;
    line-height:22px;
    border-radius:3px;
}
.match-live-box .bd-scroll-box .item-zb a i{
    display:inline-block;
    width:8px;
    height:8px;
    background:url(../../images/ico_play_small_@3x.png) no-repeat;
    background-size:cover;
    margin-left:3px;
}
.match-live-box .bd-scroll-box a.item-zb0{
    background:#1f2630;
    color:#4c5b76;
}
.match-live-box .bd-scroll-box a.item-zb1{
    background:#4566a8;
    color:#fff;
}
.match-live-box .bd-scroll-box a.item-zb2{
    background:#2f3644;
    color:#fff;
}
.match-live-box .bd-scroll-box a.item-zb3{
    background:#2f3644;
    color:#fff;
}

</style>
<template>
<div class="season-tab">
    <childnav></childnav>    
    <div class="season-tab-box">
            <div class="match-live-box">
               <div class="live-box-con">
                   <div class="item-box item-box-fl">
                      <div class="item-ceil-fl">
                           <div class="item-child-hed">
                                <span class="item-child item-child-hed-b" id="match-offline-2">{{matchname}}</span>
                            </div>
                            <div class="item-child-box">
                                <img src="../../images/media-holder.png" class="media-holder">
                                <iframe id="js_sub_web" v-bind:src="videoUrl" frameBorder=0 scrolling=no width="100%"  height="100%" class="dianbo-img"></iframe>
                            </div>
                      </div>
                   </div>
                   <div class="item-box item-box-fr">
                       <div class="loading-1">
                           <img src="../../images/loading.png">
                       </div>
                       <div class="hd-list" id="match-offline-d">
                           <span class="prev"><i></i></span>
                           <span class="next"><i></i></span>
                           <div class="bd-box-list">
                               <div class="bd-list" id="match-offline-e">
                                   <li v-for="listoff in dataOffList" data-team="{{$index+1}}" v-bind:class="[$index+1=== 1 ? 'on':'']" track-by="$index"><span style="display:inline-block;height:35px;">{{listoff.round}}</span></li>
                                </div>
                           </div>
                        </div>
                        <div class="bd-scroll-box">
                            <ul v-for="listT in dataOffList" data-tbox="{{$index+1}}" v-bind:class="[$index+1=== 1 ? 'on':'']"  track-by="$index">
                                <li v-for="listTT in listT.list" track-by="$index">
                                    <span class="item-time">
                                        <span class="item-time1">{{listTT.dataTime | timeData1}}</span>
                                        <span class="item-time2">{{listTT.dataTime | timeData2}}</span>
                                    </span>
                                    <span class="item-name1">{{listTT.leftTeam}}</span>
                                    <span v-if="listTT.matchSwitch==0 || listTT.matchSwitch==1" class="item-vs">vs</span>
                                    <span v-else class="item-vs">{{listTT.leftScore}}:{{listTT.rightScore}}</span>
                                    <span class="item-name2">{{listTT.rightTeam}}</span>
                                    <span class="item-zb">
                                        <a v-if="listTT.matchSwitch==0" href="javascript:;" class="item-zb0">未开始</a>
                                        <a v-if="listTT.matchSwitch==2" href="javascript:;" v-on:click="videoCZFn(videoUrl)" class="item-zb1">直播中<i></i></a>
                                        <a v-if="listTT.matchSwitch==1 && listTT.matchUrl" v-on:click="videoCFn(listTT)"  href="javascript:;" class="item-zb2">赛事回顾<i></i></a>
                                        <a v-if="listTT.matchSwitch==1 && !listTT.matchUrl" href="javascript:;" class="item-zb3">已结束</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
               </div>
            </div>
    </div>
</div> 
 
<!--
<div class="mode-match-offline-3" v-if="isTeltk">
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
</div>
-->
</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');
var $ = require('jQuery');
var common = require('../../js/common.js');

var teltk =require('./teltk');

module.exports = {
    data: function() {
        return {
            dataOffList:[],
            dataWeekOffList:[],
            dataOffNow:1,
            defaultIndex:0,
            channelid:wsCache.get('HEROC').channelid,
            datapdstate:'',
            datapduid:gload_conf.uid,
            isTeltk:false,
            datapdsubscribe:'0',
            matchname:'',
            matchid:wsCache.get('HEROC').matchid,
            videoUrl:''
           
        };
    },
    created:function(){
        $(".loading-1").show()
 
    },
    ready: function() {
        var self = this;
        $(".match-live-box").height($(".main-nav").height()-74);
        $(".bd-scroll-box").height($(".match-live-box").height()-35);
       // this.pdMatchIdFn(self.matchid);
       this.dataFn();

    },
    components:{
        'childnav':nav
    },
    methods: {
        pdMatchIdFn:function(str){
            var self = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:"GET",
                dataType:"json",
                data:{category:"boolmatchid",matchid:str},
                success:function(data){
                    self.datapdsubscribe = data.subscribe;
                    self.datapdstate = data.state;
                }
            })
        },
        sliderFn:function(){
            var self = this;
            $("#match-offline-e li").length<=3?$("#match-offline-d .next i,#match-offline-d .prev i").css("display","none"):'';
            $("#match-offline-e li").each(function(i){$("#match-offline-e li").slice(i*3,i*3+3).wrapAll("<ul></ul>")});
            tool.default.TouchSlide({slideCell:"#match-offline-d",mainCell:".bd-list",prevCell:".prev",nextCell:".next",pnLoop:"false",defaultIndex:self.defaultIndex});
            $("#match-offline-e li").click(function(){
                var $this = $(this),_team = $this.data("team");
                $this.parents("#match-offline-e").find("li").removeClass("on");
                $this.addClass("on");
               $(".bd-scroll-box").find("ul[data-tbox="+_team+"]").css("display","block").siblings().css("display","none")
            });
        },
        dataFn:function(){
            var self = this;
            var gPost = "POST";
            var data = {
                match_id : self.matchid,
                gameid : gload_conf.gameid
            };
            $.ajax({
                url:common.getBaseUrl()+'/live.lg',
                type:gPost,
                dataType:"json",
                data:data,
                beforeSend:function(){
                    $(".loading-1").show()
                },
                success:function(data){
                    if(data.code){
                        self.dataOffNow = data.data.now;
                        self.matchname = data.data.match_info.name;
                        self.defaultIndex = data.data.defaultIndex;
                        self.videoUrl = data.data.match_info.video_url;
                        self.dataOffList = self.dataOffList.concat(data.data.dataList);
                        setTimeout(function(){self.sliderFn();$(".loading-1").hide()},50); 
                    }else{

                    }
                    
                }
            })
        },
        videoCFn:function(el){
            console.log(el)
            $(".item-child-box iframe").remove();
            $(".item-child-box").append('<iframe id="js_sub_web" src="'+common.getBaseUrl()+"/match/video.lg?"+el.matchUrl+'" frameBorder=0 scrolling=no width="100%"  height="100%" class="dianbo-img"></iframe>');
        },
        videoCZFn:function(el){
            var self = this;
            $(".item-child-box iframe").remove();
            $(".item-child-box").append('<iframe id="js_sub_web" src="'+el+'" frameBorder=0 scrolling=no width="100%"  height="100%" class="dianbo-img"></iframe>');
        },
        take:function(objts){
            var self = this;
            if(objts ==1 ){
                //取消订阅
                self.isTeltk=false;
                $.ajax({
                    url:common.getBaseUrl(),
                    type:"GET",
                    dataType:"json",
                    data:{category:"subscribeA",uId:"1000000",matchid:self.matchid,state:0},//用户id，赛事id
                    success:function(data){

                        //取消成功，更新状态
                        alert('取消成功');
                        self.datapdsubscribe = 0;
                       

                    }

                });
                


            }else if(objts == 0){
                //订阅 
                self.isTeltk=true;


            }
        }

    }
};
</script>
