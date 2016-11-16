<style>

.line-team-int{
    padding-top: 72px;

}
.line-team-int dl{
    text-align: center;
    background: #050d19;
}
.line-team-int a{
    color: #fff;
}
.line-team-int dl dt,.line-team-int dl dd{
    width: 100%;
    height: 46px;
    line-height: 46px;
}
.line-team-int dt span{
    width: 20%;
    float: left;
    display: block;
    color: #426678;
    font-size: 13px;
}
.line-team-int dl dd:nth-child(2n){
    background: #111a2b;
}
.line-team-int dd a > span{
    width: 20%;
    float: left;
    height: 100%;
    font-size: 12px;
}
.line-team-int dd span.item1{
    color: #7b99ad;
    font-size: 16px;
}
.line-team-int span.item1{
    display: inline-block;
    
    height: 100%;
}
.line-team-int span.level{
    display:inline-block;
    width:30px;
    height:100%;
    text-align:right;
}
.line-team-int span.icon-level{
    font-size: 0;
    margin:0 3px;
    display:inline-block;
    line-height:100%;
}
.line-team-int span.icon-level0{
    width: 8px;
    height: 2px;
    background: #6184bd;
    vertical-align: middle;
}
.line-team-int span.icon-level1{
    width: 5px;
    height: 5px;
    border:#3c9026 solid 2px;
    transform: rotate(45deg);
    border-bottom: 0;
    border-right:0; 
    vertical-align: text-bottom; 
}
.line-team-int span.icon-level2{
    width: 5px;
    height: 5px;
    border:#a02d38 solid 2px;
    transform: rotate(45deg);
    border-top: 0;
    border-left:0; 
    vertical-align: text-bottom;   
}
.line-team-int span.num-level{
    font-size: 10px;
}
.line-team-int span.num-level0{
    color: transparent;
}
.line-team-int dd span.item2 img{
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    width: 24px;
}
.line-team-int dd span.item4{
    color: #34a247;
}
.line-team-int dd span.item5 i{
    display: inline-block;
    width: 7px;
    height: 7px;
    border:#a4a4a4 solid 2px;
    transform: rotate(45deg);
    border-left: 0;
    border-bottom: 0;
}
</style>
<template>
<div class="season-tab">
    <childnav></childnav> 
    <div class="season-tab-box">
        <div class="line-team-int">
        <dl>
            <dt>
               <span v-for="team in zdjf">{{team.text}}</span> 
            </dt>
            <dd v-for="list in lineteamintList" track-by="$index">
                <a  v-link="'/match/team/' + list.club_id">
                     <span class="item1">
                         <span class="level">{{$index+1}}</span>
<!--                          <span class="icon-level icon-level{{list.corpsrank}}"></span>
                         <span class="num-level num-level{{list.corpsrank}}">{{list.corpsgd}}</span> -->
                     </span>
                     <span class="item2"><img v-bind:src=list.logo>{{list.name}}</span>
                     <span>{{list.win}}/{{list.lose}}</span> 
                     <span class="item4">{{list.integrate}}分</span>
                     <span class="item5"><i></i></span> 
                </a>
            </dd>
        </dl>
        </div>
    </div>
    
</div>    
</template>

<script>
var Vue = require('Vue');
var nav = require('./nav.vue');
var $ = require('jQuery');
var common = require('../../js/common.js');


module.exports = {
    data: function() {
        return {
           lineteamintList:[],
           matchid:wsCache.get('HEROC').matchid,
           channelid:wsCache.get('HEROC').channelid,
           zdjf:[{"text":"排名"},{"text":"战队"},{"text":"胜/负"},{"text":"积分"},{"text":""}],
           matchname:wsCache.get('HEROC').matchname
        }
    },
    ready: function() {
        this.lineteamint();
    },
    components:{
        'childnav':nav
    },
    methods: {
        lineteamint:function(){
            var self = this;
            var data = {
                match_id : self.matchid,
                gameid : gload_conf.gameid
            };
             $.ajax({
                url:common.getBaseUrl()+'/match/ranking.lg',
                type:'POST',
                dataType:'json',
                data:data,
                success:function(data){
                    self.lineteamintList = self.lineteamintList.concat(data.data)
                }
             })
        }
    }
};
</script>
