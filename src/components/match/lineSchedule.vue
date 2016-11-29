<style>
.schedule-box{
    padding-top: 72px;
}
.matchschedule{
    width: 100%;
    height: 300px;
    color: #fff;
    overflow: hidden;
}
.matchschedule p{
    width: 150%;
    font-size: 40px;
}
.ms-content{
    min-width: 100%;
    margin: 0 auto;
    padding-left:20px;
  /*  text-align: center;*/
}
.ms-content .one-ms{
    padding: 10px 0;
    white-space: nowrap;
}
.ms-content .ms-round{
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0 -2px;
}
.ms-content .ms-round .ms-row-title{
    width: 150px;
    height: 36px;
    text-align: left;
    line-height: 36px;
    font-size: 14px;
    color: #cccccc;
}
.ms-content .one-match{
    position: relative;
    width: 150px;
}
.ms-content .one-match:nth-of-type(2n-1):before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 50%;
    color: #7B99AD;
    border-style: solid;
    border-width: 0;
    right: 20px;
    bottom: -1px;
    border-right-width: 1px;
    border-top-width: 1px;
}
.ms-content .one-match:nth-of-type(2n-1):after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    bottom: -2px;
}
.ms-content .one-match:nth-of-type(2n):before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 50%;
    color: #7B99AD;
    border-style: solid;
    border-width: 0;
    right: 20px;
    top: 0;
    border-right-width: 1px;
    border-bottom-width: 1px;
}
.ms-content .one-match:nth-of-type(2n):after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 0;
}
.ms-content.win .ms-round:nth-last-child(2) .one-match:before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 40px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 50%;
    margin-top: -0.5px;
}
.ms-content.win .ms-round:nth-last-child(2) .one-match:after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 40px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 50%;
    margin-top: -0.5px;
}
.ms-content .one-match.final:before,.ms-content .one-match.final:after{
    width: 0;
    height: 0;
    border-right-width: 0;
    border-top-width: 0;
}
.ms-content .ms-row-1 .one-match{
    height: 80px;
}
.ms-content .ms-row-2 .one-match{
    height: 160px;
}
.ms-content .ms-row-3 .one-match{
    height: 320px;
}
.ms-content .ms-row-4 .one-match{
    height: 640px;
}
.ms-content .ms-row-5 .one-match{
    height: 1280px;
}
.ms-content .ms-row-6 .one-match{
    height: 2560px;
}
.ms-content .ms-row-7 .one-match{
    height: 5120px;
}
.ms-content .players{
    position: absolute;
    left: 0;
    top: 50%;
    width: 110px;
    height: 60px;
    box-sizing: border-box;
    margin-top: -30px;
    z-index: 1;
}
.ms-content .player{
    display: block;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    background: #151E2A;
    color: #fff;
    text-align: center;
}
.ms-content .player.player-winner{
    color: #3e9efe;
}
.ms-content .player-name {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 75%;
    padding-left: 5%;
    text-align: left;
}
.ms-content .player-score {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 15%;
    padding-right: 5%;
    text-align: right;
}
.ms-content .player-content {
    position: relative;
    display: block;
    height: 16px;
    line-height: 16px;
    text-align: center;
    background-color: #263646;
    font-size: 12px;
}
.ms-content .player-content.over{
    background-image: url(../../images/ico_jt_p1.png);
    background-size: auto 14px;
    background-position: center center;
    background-repeat: no-repeat;
}
.ms-content .player-content.over a{
    color: transparent;
}
.ms-content.loser .ms-row-1 .one-match{
    height: 80px;
}
.ms-content.loser .ms-row-2 .one-match{
    height: 80px;
}
.ms-content.loser .ms-row-3 .one-match{
    height: 160px;
}
.ms-content.loser .ms-row-4 .one-match{
    height: 160px;
}
.ms-content.loser .ms-row-5 .one-match{
    height: 320px;
}
.ms-content.loser .ms-row-6 .one-match{
    height: 320px;
}
.ms-content.loser .ms-row-7 .one-match{
    height: 640px;
}
.ms-content.loser .ms-row-8 .one-match{
    height: 640px;
}
.ms-content.loser .ms-row-9 .one-match{
    height: 1280px;
}
.ms-content.loser .ms-row-10 .one-match{
    height: 1280px;
}
.ms-content.loser .ms-row-1 .ms-row-title{
    margin-bottom: 19px;
}
.ms-content.loser .ms-row-3 .ms-row-title{
    margin-bottom: 0;
}
.ms-content.loser .ms-row-4 .ms-row-title{
    margin-bottom: -19px;
}
.ms-content.loser .ms-row-5 .ms-row-title{
    margin-bottom: -19px;
}
.ms-content.loser .ms-row-6 .ms-row-title{
    margin-bottom: 19px;
}
.ms-content.loser .ms-round:nth-last-child(1) .one-match,.ms-content.loser .ms-round:nth-last-child(2) .one-match{
    transform: translateY(-19px);
}
.ms-content.loser .ms-round:nth-of-type(2n-1) .one-match:before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 21px;
    color: #7B99AD;
    border-style: solid;
    border-width: 0;
    right: 0;
    top: 50%;
    margin-top: -59px;
    border-left-width: 1px;
    border-bottom-width: 1px;
}
.ms-content.loser .ms-round:nth-of-type(2n-1) .one-match:after{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 40px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 50%;
    margin-top: -0.5px;
}
.ms-content.loser .ms-round:nth-last-child(1) .one-match:before,.ms-content.loser .ms-round:nth-last-child(1) .one-match:after{
    width: 0;
    height: 0;
    border-left-width: 1px;
    border-bottom-width: 1px;
}
.ms-content.loser .ms-round:nth-last-child(2) .one-match:before{
    content: ' ';
    position: absolute;
    box-sizing: border-box;
    display: block;
    width: 40px;
    height: 1px;
    background: #7B99AD;
    right: 0;
    top: 50%;
    margin-top: -0.5px;
}
.ms-content.loser .ms-round:nth-last-child(2) .one-match:after{
    width: 0;
    height: 0;
}
.ms-control{
    padding: 10px 0;
}
.ms-control a{
    font-size: 11px;
    color: #fff;
    padding: 5px 10px;
    background: #222A37;
    display: block;
    float: left;
    margin-right: 30px;
    border-radius: 4px;
}
.ms-control a.active{
    background: #4566A8;
}
.match-video-link{
    color: #fff;
}


.toe {
    word-wrap: normal;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: visible;
    text-overflow: ellipsis;
}
.videoTc{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    left:0;
    top:0;
    z-index:9999999;
    display: none;
}
.videoTc .videoTc-box i{
    width: 26px;
    height: 26px;
    background: url(../../images/ico_gb_@3x.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: -18px;
    top: -18px;
    z-index:100;
}
.videoTc .videoTc-box{
    position: relative;
    min-width: auto;
    min-height: auto;
}
.videoTc .videoTc-box .media-holder {
    position: relative;
    min-width: 145px;
    min-height: 80px;
    width: 100%;
    display: block;
}
.videoTc .videoTc-con{
    width:50%;
    position:relative;
    left:50%;
    top:0;
    margin-left:-25%;
    height:100%;
}
</style>
<template>
<div class="season-tab">
    <childnav></childnav>
    <div class="season-tab-box">
        <div class="schedule-box">
            <div class="matchschedule" id="iscroll">
                <div class="ms-content" :class="msClass">
                    <div class="ms-control clearfix" v-show="poptypeid == 2 ? false : true">
                        <a href="javascript:" :class="{'active': popp == 2}" @click="msdataFn(2)">胜者组</a>
                        <a href="javascript:" :class="{'active': popp == 1}" @click="msdataFn(1)">败者组</a>
                    </div>
                    <div class="one-ms normal-group">
                        <div class="ms-round" v-for="(index,mslist) in mslists" :class="'ms-row-'+(index >= isType ? isType : (index + 1))">
                            <h3 class="ms-row-title">{{mslist.title}}</h3>
                            <div class="one-match" v-for="row in mslist.list" :class="isFinal == index ? 'final' : ''">
                                <div class="players">
                                    <a href="javascript:;" class="player" :class="row.leftScore > row.rightScore ? 'player-winner' : ''">
                                        <span class="player-name toe">{{row.leftTeam}}</span>
                                        <span class="player-score">{{row.leftScore}}</span>
                                    </a>
                                    <div class="player-content" :class="row.video_url ? 'over' : ''" v-on:click="videoTc(row.video_url)">
                                        <a href="javascript:;" class="match-video-link">{{row.dataTime | timeData3}}</a>
                                    </div>
                                    <a href="javascript:;" class="player" :class="row.leftScore < row.rightScore ? 'player-winner' : ''">
                                        <span class="player-name toe">{{row.rightTeam}}</span>
                                        <span class="player-score">{{row.rightScore}}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
<div class="videoTc">
    <div class="videoTc-con">
        <div class="videoTc-box">
            <i></i>
            <img src="../../images/media-holder.png" class="media-holder">
        </div>    
    </div>
</div>
</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');

var $ = require('jQuery');
var IScroll = require('iscroll');
var common = require('../../js/common.js');


module.exports = {
    data: function() {
        return {
            matchid:wsCache.get('HEROC').matchid,
            poptypeid:wsCache.get('HEROC').poptypeid,
            mslists:[],
            mstype:'',
            msClass: '',
            popp : ''
        };
    },
    created:function(){
    },
    computed:{
        isFinal: function(){  //判断是否为最后一轮比赛
            return this.mslists.length - 1;
        },
        isType: function(){    //比赛模式计算
             var self = this;
            if (self.popp == 1) {
                self.msClass = 'loser';
                return self.mslists.length - 2;
            } else if (self.popp == 2) {
                self.msClass = 'win';
                return self.mslists.length - 1;
            } else {
                self.msClass = '';
                return ;
            }
        }
    },
    ready: function() {
        var self = this;
        if(self.poptypeid==2){
            self.popp=3
        }else if(self.poptypeid==1){
            self.popp=2
        }
        self.msdataFn(self.popp);
        $(".videoTc-box i").click(function(){
            $(".videoTc").hide();
            $(".videoTc-box iframe").remove();
        })
    },
    components:{
        'childnav':nav
    },
    methods: {
        msdataFn:function(str){
            var self = this;
           self.popp=str;
            $.ajax({
                url:common.getBaseUrl()+'/match/matchschedule.lg'+QUERY,
                type:"POST",
                dataType:"json",
                data:{match_id:self.matchid,type:str},
                beforeSend:function(){
                    $(".loading-1").show()
                },
                success:function(data){
                    self.mslists = [];
                    self.mslists = self.mslists.concat(data.data);
                    let msLength = self.mslists.length;
                    $(".ms-content").width(msLength*150);
                    $(".matchschedule").height($(window).height()-72);
                    setTimeout(function(){
                        var myScroll = new IScroll('#iscroll',{
                            scrollX: true, scrollY: true, freeScroll: true,click: true
                        });
                        $(".loading-1").hide()
                    },50);

                }
            });
        },
        videoTc:function(o){
            if(o){
                $(".videoTc").show();
                $(".videoTc-box").append('<iframe id="js_sub_web" src="'+common.getBaseUrl()+"/match/video.lg?"+o+'" frameBorder=0 scrolling=no width="100%" height="100%" class="dianbo-img1" name="iframe_btn"></iframe>');
                setTimeout(function(){
                   $(".videoTc-box").css({"height":$("#js_sub_web").height(),"top":"50%","margin-top":"-"+$("#js_sub_web").height()/2+"px"}) 
                },100)
            } 
        }
    }
}

</script>
