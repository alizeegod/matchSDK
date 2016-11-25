<style soped>
.team{
    color: #e1e1e1;
    font-size:13px;
}
.team .team-hed{
    height: 40px;
    background: #1a212e;
    color: #e1e1e1;
    font-size: 17px;
    line-height: 40px;
    text-align: center;
}
.team .team-main{
    
    padding:15px;
}
.team-name,.team-usephoto{
    width: 100%;
    overflow: hidden;
}
.team-name .team-logo{
    width: 10%;
    float:left;
}
.team-txt{
    width: 90%;
    float: right;
    padding-left:10px;
    padding-bottom: 25px
}
.team-txt .team-txt-item1{
    font-size:15px;
    color:#608be9;
    padding-bottom: 5px;
}
.team-txt .team-txt-item2{
    color:#e1e1e1;
    font-size:13px;
    padding-bottom: 5px;
    min-height: 50px;
}
.team-txt .team-txt-item3{
    color:#9db5e6;
    font-size:13px;
}
.team-txt .team-txt-item3 span{
    margin-right: 20px;
}
.team-usephoto ul{
    margin-right: -38px;
    overflow: hidden;
}
.team-usephoto li{
    width: 16.66666%;
    float: left;
    padding-right: 38px;
}

.team-usephoto li p{
    font-size: 12px;
    color: #999;
    padding: 10px 0;
    text-align: center;
}
.team-usephoto li img{
    width: 100%;
}
.team-video .team-video-p{
    position: relative;
    padding-left: 6px;
    line-height: 18px;
}
.team-video .team-video-p::before{
    content: "";
    position: absolute;
    left:0;
    top:0;
    width: 3px;
    height: 16px;
    background: #608be9;
}
.team-video-list{
    width: 100%;
    overflow: hidden;
    padding-top: 20px;
}
.team, .team *, .team :after,.team :before{
    box-sizing: border-box;
}
.team-video-list ul li{
    width: 25%;
    padding-right: 15px;
    float: left;
    position: relative;
    color: #ccc;
    font-size: 11px;
    margin-bottom: 15px;
}
.team-video-list ul{
    margin-right: -15px;
    overflow: hidden;
}
.team-video-list ul li div{
    position: relative;
    margin-bottom: 10px;
}
.team-video-list ul li img{
    width: 100%;
    height: 100%;
}
.team-video-list ul li p{
    width: 100%;
    overflow: hidden;
    height: 30px;
    line-height: 16px;
    text-align: center;
}
.team-video-list ul i{
    width: 40px;
    height: 40px;
    background: url(../../images/ico_play_@3x.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:50%;
    top:50%;
    margin: -20px 0 0 -20px;
}
</style>
<template>
        <div class="team" v-if="teamshow">
           <div class="team-hed">
               战队介绍
           </div>
           <div class="team-main">
           <div class="team-zd-js">
              <div class="team-name">
                   <img v-bind:src=teamLogo alt="" class="team-logo">
                   <div class="team-txt">
                       <p class="team-txt-item1">{{teamName}}</p>
                       <p class="team-txt-item2">{{teamDesc}}</p>
                       <p class="team-txt-item3" v-if="steamBest">最好成绩： <span v-for="teama in teamBest">{{teama}}</span></p>
                   </div>
              </div>
               <div class="team-usephoto">
                   <ul>
                       <li v-for="teamb in teamPlayer" track-by="$index">
                           <img v-bind:src=teamb.image_url>
                           <p>{{teamb.name}}</p>
                       </li>
                   </ul>
               </div>
            </div>
           <div class="team-video" v-if="steamVideo">
               <p class="team-video-p">战队视频</p>
               <div class="team-video-list">
                   <ul >
                       <li v-for="team in teamVList" track-by="$index" data-rel="{{team.video_url}}">
                           <div>
                               <img v-bind:src=team.cover_url alt="">
                               <i></i>
                           </div>
                           <p>{{team.name}}</p>
                       </li>
                   </ul>
               </div>
            </div>
       </div>
    </div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');

var common = require('../../js/common.js');

module.exports = {
    data: function() {
        return {
            steamVideo:false,
            teamshow:false,
            steamBest:false,
            teamBest:[],
            teamPlayer:[],
            teamVList:[],
            teamDesc:'',
            teamName:'',
            teamLogo:'',

        };
    },
    ready: function() {
         var self = this;
        $(".team-video-list li div").height($(".team-video-list li img").width()*178/268)
         
    },
    route:{
        activate:function(transition){
          var self = this;
          var arr1 = [];
          var arr2 = [];
          var gPost = "POST";
          var data = {
              club_id : transition.to.params.id,
              gameid : gload_conf.gameid
          };
          self.teamFn(data,gPost);
          self.teamvideoFn(data,gPost)
          transition.next()
        }
    },
    methods: {
      teamFn:function(d,g){
         var self = this;
          $.ajax({
            url:common.getBaseUrl()+'/match/team.lg'+ QUERY,
            type:g,
            dataType:'json',
            data:d,
            beforeSend:function(){
                $(".loading-1").show()
            },
            success:function(data){
              if(data.code==0){
                self.teamshow = true;
                self.teamDesc = data.data.desc;
                self.steamBest = data.data.best.length > 0 ? true : false;
                self.teamBest = data.data.best.split('|');
                self.teamLogo = data.data.logo;
                self.teamName = data.data.name;
                self.teamPlayer = self.teamPlayer.concat(data.data.player);
                $(".loading-1").hide();
              }else{
                self.teamshow = false;
                common.tips("暂无战队介绍");
              }
            }  
           }) 
     },
     teamvideoFn:function(d,g){
        var self = this;
          $.ajax({
            url:common.getBaseUrl()+'/match/teamvideo.lg'+ QUERY,
            type:'POST',
            dataType:'json',
            data:d,
            beforeSend:function(){
                $(".loading-1").show()
            },
            success:function(data){
              if(data.code==0){
                self.steamVideo = true;
                self.teamVList = self.teamVList.concat(data.data.list);
                $(".loading-1").hide();
              }else{
                self.steamVideo = false;
                common.tips("暂无战队介绍");
              }
            }  
           })
     }
        
    }
}

</script>
