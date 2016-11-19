<style>
.season-tab{
    color: #fff;
}
.season-tab-hed{
    width: 100%;

}
.season-tab-1{
    width: 100%;
    position: fixed;
    left: 50px;
    top: 0;
    z-index:100;
    transition: top .5s ease-in;
}
.season-tab-hed p:nth-child(1),.season-tab-hed1 p:nth-child(1){
    background: #1a212e;
    height: 31px;
    line-height: 31px;
    text-align: center;
    font-size: 16px;

}
.season-tab-hed p:nth-child(2),.season-tab-hed1 p:nth-child(2){
    background: #2f3644;
    height: 33px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;

}
.season-tab-hed p:nth-child(2) a,.season-tab-hed1 p:nth-child(2) a{
    flex: 1;
    width: 0;
    flex-basis: 0;
    max-width: 100%;
    color: #fff;
    position: relative;
}
.season-tab-hed1 p:nth-child(2){
    height: 30px;
}
.season-tab-hed1 p:nth-child(2) a span{
    height: 28px;
    display: inline-block;
    
    color: #aaa;
}
.season-tab-hed1 p:nth-child(2) a.v-link-active span{
    color: #608be9;
    border-bottom: #608be9 solid 2px;
}

.season-tab-hed p:nth-child(2) a.v-link-active{
    background: #4566a8;
}
.season-tab-hed p:nth-child(2) a i{
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 3px;
    z-index: 2;
    background: #1a212e;
}
.season-tab-hed p:nth-child(2) a.item1 em{
    display: inline-block;
    width: 16px;
    height: 11px;
    background-image: url(../../images/nav_ico_1_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed p:nth-child(2) a.item2 em{
    display: inline-block;
    width: 12px;
    height: 11px;
    background-image: url(../../images/nav_ico_2_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed p:nth-child(2) a.item3 em{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(../../images/nav_ico_3_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed p:nth-child(2) a.item4 em{
    display: inline-block;
    width: 12px;
    height: 11px;
    background-image: url(../../images/nav_ico_nor_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed1 p:nth-child(2) a.item5 em{
    display: inline-block;
    width: 12px;
    height: 11px;
    background-image: url(../../images/nav_ico_nor_1_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed1 p:nth-child(2) a.v-link-active.item5 em{
    background: url(../../images/nav_ico_pre_1_@3x 2.png);
    background-size: 100% 100%;
}
.season-tab-hed1 p:nth-child(2) a.item6 em{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(../../images/nav_ico_nor_2_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed1 p:nth-child(2) a.v-link-active.item6 em{
    background: url(../../images/nav_ico_pre_2_@3x 2.png);
    background-size: 100% 100%;
}
.season-tab-hed1 p:nth-child(2) a.item7 em{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(../../images/nav_ico_nor_3_@3x.png);
    background-size: 100% 100%;
    vertical-align: -1px;
    margin-right: 5px;
}
.season-tab-hed1 p:nth-child(2) a.v-link-active.item7 em{
    background: url(../../images/nav_ico_pre_3_@3x 2.png);
    background-size: 100% 100%;
}	
</style>
<template>
<div class="season-tab-1">
    <div v-if="typeid == 1 && channelid==1" class="season-tab-hed">
        <p>{{matchname}}</p>
        <p>
            <a class="item1" v-link="{path:'/match/lineLive/'+matchid}"><em></em>视频直播<i></i></a>
            <!-- <a class="item2" v-link="{path:'/match/lineTeamInt/'+matchid}"><em></em>战队积分<i></i></a> -->
            <a class="item2" v-link="{path:'/match/lineSchedule/'+matchid}"><em></em>战队积分<i></i></a>
            <a class="item3" v-link="{path:'/match/linejj/'+matchid}"><em></em>赛事介绍<i></i></a>  
        </p>
    </div>
    <div v-if="typeid == 0"  class="season-tab-hed1">
        <p>{{matchname}}</p>
        <p>
            <a class="item5" v-link="{path:'/match/lineProc/'+matchid}"><span><em></em>比赛进度</span></a>
            <a class="item6" v-link="{path:'/match/linejj/'+matchid}"><span><em></em>介绍</span></a>
            <a class="item7" v-link="{path:'/match/lineComment/'+matchid}"><span><em></em>评论{{totalNum ? '('+totalNum+')' : ''}}</span></a>

        </p>
    </div>
    <div v-if="typeid == 1 && channelid==0" class="season-tab-hed">
        <p>{{matchname}}</p>
        <p>
            <a class="item1" v-link="{path:'/match/lineLive/'+matchid}"><em></em>视频直播<i></i></a>
            <a class="item2 item4" v-link="{path:'/match/lineSchedule/'+matchid}"><em></em>赛程<i></i></a>
            <a class="item3" v-link="{path:'/match/linejj/'+matchid}"><em></em>赛事介绍<i></i></a>  
        </p>
    </div>
</div>	
</template>
<script>
var common = require('../../js/common.js');
module.exports = {
    data:function(){
        return {
            matchname:wsCache.get('HEROC').matchname,
            channelid:wsCache.get('HEROC').channelid,
            matchid:wsCache.get('HEROC').matchid,
            typeid:wsCache.get('HEROC').typeid,
            totalNum:''
        }
    },
    methods:{
        commentNumFn:function(){
            var self = this;
            var data = {category:"commentNum",matchid:self.matchid};
            $.ajax({
                url : common.getBaseUrl(),
                type : "GET",
                dataType : "json",
                data : data,
                success:function(data){
                    self.totalNum = data.num;
                    self.totalNum >= 100 ? (self.totalNum="99+") : self.totalNum;
                }
            })
        }

    },
  //  props:['tonum'],
    ready:function(){
        var self = this;
        //self.commentNumFn();
        self.totalNum = this.$parent.totalNum;
        $(".season-tab-1").width($(window).width()-50);
        setTimeout(function(){
            if(($(".season-tab-box").height() > ($(window).height()-63)) && self.$parent.name != "lineSchedule"){
                common.scroll(function(direction){
                    if(direction=="down"){
                        $(".season-tab-1").css("top","-62px");
                    }else{
                        $(".season-tab-1").css("top","0");
                    }
                }); 
            }
        },20)
    }
}
</script>