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
    text-align: center;
}
.ms-content .one-ms{
    padding: 10px 0;
    padding-left: 40px;
    white-space: nowrap;
}
.ms-content .ms-round{
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0 -2px;
}
.ms-content .ms-round .ms-row-title{
    width: 200px;
    height: 36px;
    text-align: left;
    line-height: 36px;
    font-size: 14px;
    color: #cccccc;
}
.ms-content .one-match{
    position: relative;
    width: 200px;
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
    width: 160px;
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
    padding: 10px 40px;
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


.toe {
    word-wrap: normal;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: visible;
    text-overflow: ellipsis;
}

</style>
<template>
<div class="season-tab">
    <childnav></childnav>
    <div class="season-tab-box">
    <div class="schedule-box">
        <div class="ms-control clearfix" v-show="msType == 3 ? false : true">
            <a href="javascript:" :class="{'active': msType == 2}" @click="msdataFn(2)">胜者组</a>
            <a href="javascript:" :class="{'active': msType == 1}" @click="msdataFn(1)">败者组</a>
        </div>
        <div class="matchschedule" id="iscroll">
            <div class="ms-content" :class="msClass">
                <div class="one-ms normal-group">
                    <div class="ms-round" v-for="(index,mslist) in mslists" :class="'ms-row-'+(index >= isType ? isType : (index + 1))">
                        <h3 class="ms-row-title">{{mslist.title}}</h3>
                        <div class="one-match" v-for="row in mslist.row" :class="isFinal == index ? 'final' : ''">
                            <div class="players" v-link="{path:row.linkvideo}">
                                <a class="player" :class="row.result == 0 ? 'player-winner' : ''">
                                    <span class="player-name toe">{{row.team[0].name}}</span>
                                    <span class="player-score">{{row.team[0].score}}</span>
                                </a>
                                <div class="player-content" :class="row.result != 2 ? 'over' : ''">
                                    <a class="match-video-link">{{row.inf | timeData3}}</a>
                                </div>
                                <a class="player" :class="row.result == 1 ? 'player-winner' : ''">
                                    <span class="player-name toe">{{row.team[1].name}}</span>
                                    <span class="player-score">{{row.team[1].score}}</span>
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

</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');

var $ = require('jQuery');
var IScroll = require('iscroll');
var common = require('../../js/common.js');


var lineSchedule = Vue.extend({
    name: 'lineSchedule',
    data: function() {
        return {
            channelid:wsCache.get('HEROC').channelid,
            matchname:wsCache.get('HEROC').matchname,
            matchid:wsCache.get('HEROC').matchid,
            mslists:[],
            msType:'',
            msClass: '',
            name:'lineSchedule'
           
        };
    },
    created:function(){

 
    },
    computed:{
        isFinal: function(){  //判断是否为最后一轮比赛
            return this.mslists.length - 1;
        },
        isType: function(){    //比赛模式计算
            if (this.msType == 1) {
                this.msClass = 'loser';
                return this.mslists.length - 2;
            } else if (this.msType == 2) {
                this.msClass = 'win';
                return this.mslists.length - 1;
            } else {
                this.msClass = '';
                return ;
            }
        }
    },
    ready: function() {
        var _this = this;
        _this.msdataFnId(_this.matchid);
       // _this.msdataFn();//默认返回胜者组
        
       
        
    },
    components:{
        'childnav':nav
    },
    methods: {
        msdataFnId:function(id){
            var _this = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:"GET",
                dataType:"json",
                //msType://'1'代表双败淘汰赛败者组，'2'代表双败淘汰赛胜者组，'3'代表单败淘汰赛
                data:{category:"knockoutO",matchid:id},
                success:function(data){
                    if(data.status == "SUCCESS"){
                        _this.msType = data.mstype;
                        if(data.msg == 3){
                            _this.msdataFn(3)   
                        }else{
                            _this.msdataFn(2) 
                        }
                        
                    }else{
                        
                    }
                   

                }
            }); 

        },
        msdataFn:function(str){
            var _this = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:"GET",
                dataType:"json",
                //msType://'1'代表双败淘汰赛败者组，'2'代表双败淘汰赛胜者组，'3'代表单败淘汰赛
                //msid  赛事id
                data:{category:"lineSchedule",matchid:_this.matchid,msType:str},
                success:function(data){
                    _this.mslists = _this.mslists.concat(data.mslists)
                    let msLength = _this.mslists.length;
                    $(".ms-content").width(msLength*200);
                    $(".matchschedule").height($(window).height()-110);
                    setTimeout(function(){
                         var myScroll = new IScroll('#iscroll',{
                            scrollX: true, scrollY: true, freeScroll: true,click: true
                        });
                    },50);

                }
            });

        }

    }
});

module.exports = lineSchedule;

</script>
