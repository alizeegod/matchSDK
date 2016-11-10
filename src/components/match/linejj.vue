<style>
.line-event{
    padding-top:72px;
}

.matchintro{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    border: 1px solid #3A4861;
}
.mi-title,.mp-title,.mt-title{
    width: 96%;
    height: 28px;
    margin: 6px auto;
    line-height: 28px;
}
.mi-title h3,.mt-title h3,.mp-title h3{
    float: left;
    font-size: 16px;
    color: #e1e1e1;
    position: relative;
    line-height: 16px;
    font-weight: normal;
    padding-left: 10px;
}
.mi-title h3:before,.mt-title h3:before,.mp-title h3:before{
    content: '|';
    position: absolute;
    left: 0px;
    border-left: 4px solid #648EDA;
    color: transparent;

}
.mi-title a{
    float: right;
    font-size: 12px;
    line-height: 12px;
    color: #848ea4;
}
.mi-title a i{
    display: inline-block;
    width: 12px;
    height: 12px;
    font-size: 10px;
    border-radius: 7px;
    line-height: 12px;
    text-align: center;
    margin-right: 5px;
    border: 1px solid #848ea4;
}
.mi-con{
    width: 94%;
    margin: 10px auto;
}
.mi-con p{
    font-size: 14px;
    color: #aaaaaa;
    line-height: 1.6;
}
.mi-bot{
    width: 94%;
    margin: 0 auto;
}
.mi-bot p{
    float: left;
    font-size: 12px;
    color: #9db5e6;
}
.mi-bot p:nth-of-type(1) i{
    display: inline-block;
    width: 12px;
    height: 16px;
    margin-top: -3px;
    margin-right: 10px;
    vertical-align: middle;
    background-image: url(../../images/ico_time_@3x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.mi-bot p:nth-of-type(2){
    margin-left: 50px;
}
.mi-bot p:nth-of-type(2) i{
    display: inline-block;
    width: 12px;
    height: 16px;
    margin-top: -3px;
    margin-right: 10px;
    vertical-align: middle;
    background-image: url(../../images/ico_loc_@3x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.matchprize{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    overflow: hidden;
    border: 1px solid #3A4861;
}

.mp-con{
    width: 95%;
    margin: 30px auto 10px;
    color: #fff;
    position: relative;
}
.mp-item{
    overflow: hidden;
    width:20%;
    float: left;
}
.mp-item .mp-ranking{
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #e1e1e1;
}
.mp-item .mp-prize{
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #fad83a;
}
.mp-item img{
    width: 60%;
    display: block;
    margin: 20px auto;
}
.mp-con .prev{
    position: absolute;
    left:0;
    top:40%;
    width: 16px;
    height: 28px;
    background: url(../../images/ico_jt_@3x_2.png) no-repeat;
    background-size: 100% 100%;
    z-index:2;
}
.mp-con .next{
    position: absolute;
    right:0;
    top:40%;
    width: 16px;
    height: 28px;
    background: url(../../images/ico_jt_@3x_1.png) no-repeat;
    background-size: 100% 100%;
    z-index:2;
}


.matchteam{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    border: 1px solid #3A4861;
}

.mt-con{
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
}
.mt-con .mt-item{
    width: 12%;
    float: left;
    margin: 10px 4%;
}
.mt-con .mt-item img{
    display: block;
    width: 100%;
}
.mt-con .mt-item p{
    color: #e1e1e1;
    width: 100%;
    text-align: center;
    font-size: 13px;
    line-height: 2;
}


</style>
<template>
<div class="season-tab">
    <childnav></childnav>
    <div class="season-tab-box">
      <div class="line-event">
             <div class="matchintro" v-for="list in eventprofilelist">
                <section class="mi-title clearfix">
                    <h3>赛事简介</h3>
                    <a v-link=""><i>!</i><span>查看规则</span></a>
                </section>
                <section class="mi-con"><p>{{list.text}}</p></section>
                <section class="mi-bot clearfix">
                    <p><i></i><em>比赛时间：</em><span>{{list.time | timeData3}}开始</span></p>
                    <p v-if="channelid==13"><i></i><em>线上赛：</em><span>{{list.address}}</span></p>
                    <p v-else><i></i><em>线下赛：</em><span>{{list.address}}</span></p>
                </section>
            </div>
            <div class="matchprize" v-if="awardlist.length>0">
                <section class="mp-title clearfix">
                    <h3>赛事奖励</h3>
                </section>
                <section class="mp-con"  id="match-mp-con">
                    <span class="prev"></span>
                    <span class="next"></span>
                    <div class="bd" style="width:90%;margin:0 auto;overflow:hidden;">
                        <div class="bd-hd">
                            <li class="mp-item" v-for="list in awardlist">
                                <p class="mp-ranking">{{list.awardname}}</p>
                                <img :src="list.awardicon">
                                <p class="mp-prize">{{list.awardwp}}</p>
                            </li>
                        </div>    
                    </div>
                </section>
            </div>
            <div class="matchteam" v-if="teamlist.length>0">
                <section class="mt-title clearfix">
                    <h3>参赛队伍</h3>
                </section>
                <section class="mt-con">
                    <div class="mt-item" v-for="list in teamlist" v-link="{path:'/match/team/'+list.teamid}">
                        <img :src="list.teamicon">
                        <p>{{list.teamname}}</p>
                    </div>
                </section>
            </div>

        </div>
    </div>

</div>    




</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');
var $ = require('jQuery');

var common = require('../../js/common.js');

var linejj = Vue.extend({
    name: 'linejj',
    data: function() {
        return {
            matchname:wsCache.get('HEROC').matchname,
            channelid:wsCache.get('HEROC').channelid,
            eventprofilelist:[],
            awardlist:[],
            teamlist:[],
            matchid:wsCache.get('HEROC').matchid
        };
    },
    components:{
        'childnav':nav
    },
    ready: function() {
        this.lineteamint();
        if($(".season-tab-box").height() > ($(window).height()-63)){
            common.scroll(function(direction){
                if(direction=="down"){
                    $(".season-tab-hed1,.season-tab-hed").css("top","-62px");
                }else{
                    $(".season-tab-hed1,.season-tab-hed").css("top","0");
                }
            }); 
        } 
    },
    methods: {
        lineteamint:function(){
            var vm = this;
            $.ajax({
                url:common.getBaseUrl(),
                type:'GET',
                dataType:'json',
                data:{category:"lineEvent",matchid:vm.matchid},
                success:function(data){
                    vm.eventprofilelist = vm.eventprofilelist.concat(data.eventprofile);
                    vm.awardlist = vm.awardlist.concat(data.awardList);
                    vm.teamlist = vm.teamlist.concat(data.teamList);
                }
            });
            setTimeout(function(){
                $(".mp-con li").length<=5?$("#match-offline-d .next").css("display","none"):'';
                $(".mp-con li").each(function(i){$(".mp-con li").slice(i*5,i*5+5).wrapAll("<ul></ul>")});
                tool.default.TouchSlide({slideCell:"#match-mp-con",mainCell:".bd-hd",prevCell:".prev",nextCell:".next",pnLoop:"false"});
            },50)
        }
    }
});

module.exports = linejj;
</script>