
var Hammer = require('./hammer.js');
var obj = $("#app");
 var now = gload_conf.timestamp;

var common = {
    isTipsShow :false,
    isDevelop : true,//开发或者生产环境
    sandbox : false,//杀向模式，false关闭，true开启
    getBaseUrl : function(){
       // return common.isDevelop ? 'http://172.18.1.135/vue-match3/src/json/a' : '';
	   //return common.isDevelop ? 'http://10.0.11.46/scp/match/2.0-rc/src/json/a.php' : '';
       return common.isDevelop ? gload_conf.api : '';
    },
    fromData:function(){
        now = parseInt(now)*1000;
        setInterval(function(){
            now+=10;
        },10);

        setInterval(todayAlbumTimeCountJob,1000);//置顶一秒一次倒计时
        setInterval(toAlbumTimeCountJob,1000);//不置顶一秒一次倒计时

        //10毫秒到一次
        function todayAlbumTimeCountJob(){
            var albumIds = new Array();
            var stateIds = new Array();
            var racetypeIds = new Array();
            stateId=[];
            racetypeId=[];
            var lis = $("div[id^='MatchShowLi|floor1|']");
            for(var j=0;j<lis.length;j++){
                var li = lis[j];
                var albumId = $(li).attr("id").split("|")[2];
                var stateId = $(li).attr("id").split("|")[3];
                var racetypeId = $(li).attr("id").split("|")[4];
                albumIds.push(albumId);
                stateIds.push(stateId);
                racetypeIds.push(racetypeId);
            }
            //如果id不存在则返回fasle
            if(albumIds.length<=0){
                return;
            }
            for(var i = 0;i<albumIds.length;i++){
               
                var albumId = albumIds[i];
                var stateId = stateIds[i];
                var racetypeId = racetypeIds[i];
                var li = $("div[id^='MatchShowLi|floor1|"+albumId+"|"+stateId+"|"+racetypeId+"']");
                var startTime = parseInt($(li).attr("starttime"))*1000;
                var endTime = parseInt($(li).attr("endtime"))*1000;
                var bmstartTime = parseInt($(li).attr("bmstarttime"))*1000;

                var text;
                var text24;
                var  startMo= rightZeroStr(new Date(startTime).getMonth()+1);//开始时间月
                var  startD= rightZeroStr(new Date(startTime).getDate());//开始时间日
                var  startH= rightZeroStr(new Date(startTime).getHours());//开始时间时
                var  startM= rightZeroStr(new Date(startTime).getMinutes());//开始时间分
                var textstart = "<b>"+startMo+"</b>月<b>"+startD+"</b>日<b>"+startH+"</b>:<b>"+startM+"</b>";

                if(startTime>now){//开始时间大于现在时间
                    text24 = timeBetweenText24(now,startTime);
                    if(text24 == 1){
                        $(li).find("span.p-countdown").removeClass("item-djs-time item-jsd-time").html("<i></i>比赛时间: "+textstart);
                    }else{
                        //等待比赛开始
                        text = timeBetweenText(now,startTime);
                        $(li).find("span.p-countdown").addClass("item-djs-time").html("<i></i>开始倒计时: "+text);
                    }
                    if(racetypeId == 1){
                        if(stateId==4 || stateId==3 || stateId==0){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                        }else if(stateId==1){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("比赛中");
                        }else if(stateId==2){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                        }
                    }else{
                        if($(li).attr("id").split("|")[5]==0){//未报名
                            if(stateId==4){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|4|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-bmyjs-btn").html("报名结束");
                            }else if(stateId==0){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                            }else if(stateId==1){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                            }else if(stateId==2){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                            }else if(stateId==3){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|3|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-djbm-btn").html("点击报名");
                            }


                        }else{//已报名
                            if(stateId==0){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                            }else if(stateId==1){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                            }else if(stateId==2){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                            }else{
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|1");
                                $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已报名");                                
                            }

                        }
                        
                    }   
                }else if(now>endTime){//现在时间大于结束时间
                    //比赛结束
                    $(li).find("p.p-countdown").removeClass("item-djs-time item-jsd-time").html("<i></i>比赛时间: "+textstart);
                    $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                }else{
                    $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"");
                    //正在拍卖
                    text = timeBetweenText(now,endTime);
                    $(li).find("p.p-countdown").removeClass("item-djs-time").addClass("item-jsd-time").html("<i></i>结束倒计时: "+text);
                    $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                }
            }

        }
        function toAlbumTimeCountJob(){
            var albumIds = new Array();
            var stateIds = new Array();
            var racetypeIds = new Array();
            var enrollIds = new Array();
            stateId=[];
            racetypeId=[];
            enrollId=[];
            var lis = $("li[id^='MatchShowLi|floor2|']");
            for(var j=0;j<lis.length;j++){
                var li = lis[j];
                var albumId = $(li).attr("id").split("|")[2];
                var stateId = $(li).attr("id").split("|")[3];
                var racetypeId = $(li).attr("id").split("|")[4];
                var enrollId = $(li).attr("id").split("|")[5];
                albumIds.push(albumId);
                stateIds.push(stateId);
                racetypeIds.push(racetypeId);
                enrollIds.push(enrollId);
            }
            //如果id不存在则返回fasle
            if(albumIds.length<=0){
                return;
            }
            for(var i = 0;i<albumIds.length;i++){
               
                var albumId = albumIds[i];
                var stateId = stateIds[i];
                var racetypeId = racetypeIds[i];
                var enrollId = enrollIds[i];
                var li = $("li[id^='MatchShowLi|floor2|"+albumId+"|"+stateId+"|"+racetypeId+"|"+enrollId+"']");
                var startTime = parseInt($(li).attr("starttime"))*1000;
                var endTime = parseInt($(li).attr("endtime"))*1000;
                var bmstartTime = parseInt($(li).attr("bmstarttime"))*1000;
                var bmendTime = parseInt($(li).attr("bmendtime"))*1000;

                var text;
                var text24;
                var  startMo= rightZeroStr(new Date(startTime).getMonth()+1);//开始时间月
                var  startD= rightZeroStr(new Date(startTime).getDate());//开始时间日
                var  startH= rightZeroStr(new Date(startTime).getHours());//开始时间时
                var  startM= rightZeroStr(new Date(startTime).getMinutes());//开始时间分
                var textstart = "<b>"+startMo+"</b>月<b>"+startD+"</b>日<b>"+startH+"</b>:<b>"+startM+"</b>";

                if(startTime>now){//开始时间大于现在时间
                    text24 = timeBetweenText24(now,startTime);
                    if(text24 == 1){
                        $(li).find("span.p-countdown").removeClass("item-djs-time item-jsd-time").html("<i></i>比赛时间: "+textstart);
                    }else{
                        //等待比赛开始
                        text = timeBetweenText(now,startTime);
                        $(li).find("span.p-countdown").addClass("item-djs-time").html("<i></i>开始倒计时: "+text);
                    }
                    if(racetypeId == 1){
                        if(stateId==4 || stateId==3 || stateId==0){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                        }else if(stateId==1){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("比赛中");
                        }else if(stateId==2){
                            $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                            $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                        }
                    }else{
                        if($(li).attr("id").split("|")[5]==0){//未报名
                            if(stateId==4){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|4|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-bmyjs-btn").html("报名结束");
                            }else if(stateId==0){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                            }else if(stateId==1){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                            }else if(stateId==2){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                            }else if(stateId==3){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|3|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-djbm-btn").html("点击报名");
                            }


                        }else{//已报名
                            if(stateId==0){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|0|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-jjks-btn").html("即将开始");
                            }else if(stateId==1){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                            }else if(stateId==2){
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                                $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                            }else{
                                $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|3|"+$(li).attr("id").split("|")[4]+"|1");
                                $(li).find(".item-info > a").attr("class","").addClass("item-ybm-btn").html("已报名");                                
                            }

                        }
                        
                    }     
                }else if(now>endTime){//现在时间大于结束时间
                    $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|2|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                    //比赛结束
                    $(li).find("span.p-countdown").removeClass("item-djs-time item-jsd-time").html("<i></i>比赛时间: "+textstart);
                    $(li).find(".item-info > a").attr("class","").addClass("item-yjs-btn").html("已结束");
                }else{
                    //console.log($(li).attr("id").split("|")[0])
                    $(li).attr("id",""+$(li).attr("id").split("|")[0]+"|"+$(li).attr("id").split("|")[1]+"|"+$(li).attr("id").split("|")[2]+"|1|"+$(li).attr("id").split("|")[4]+"|"+$(li).attr("id").split("|")[5]+"");
                    //正在拍卖
                    text = timeBetweenText(now,endTime);
                    $(li).find("span.p-countdown").removeClass("item-djs-time").addClass("item-jsd-time").html("<i></i>结束倒计时: "+text);
                    $(li).find(".item-info > a").attr("class","").addClass("item-zbz-btn").html("直播中");
                }
            }

        }
        function rightZeroStr(v) {
            if (v < 10) {
                return "0" + v;
            }
            return v + "";
        }
        //时间差
        function timeBetweenText(fromDate,toDate){
            return timeOffsetText(toDate - fromDate,0)
        }
        function timeOffsetText(timeOffset,flag){
            var dayOfMil = (24 * 60 * 60 * 1000);
            var hourOfMil = 60 * 60 * 1000;
            var minOfMil = 60 * 1000;
            var secOfMil = 1000;

            var hourOffset = timeOffset % dayOfMil;
            var minuteOffset = hourOffset % hourOfMil;
            var seccondOffset = minuteOffset % minOfMil;

            var hours = Math.floor(timeOffset / hourOfMil);
            var minutes = Math.floor(minuteOffset / minOfMil);
            var secconds = Math.floor(seccondOffset / secOfMil);

            if(flag == 0){
                return "<b>"+rightZeroStr(hours)+"</b>时<b>"+rightZeroStr(minutes) +"</b>分<b>"+rightZeroStr(secconds)+"</b>";
            }else if(flag == 1){
                return "<b>"+rightZeroStr(hours)+"</b>时<b>"+rightZeroStr(minutes) +"</b>分<b>"+rightZeroStr(secconds)+"</b>";
            }else{
                return "<b>"+rightZeroStr(hours)+"</b>时<b>"+rightZeroStr(minutes)+"</b>";
                
            }
        }
        //24时间差
        function timeBetweenText24(fromDate,toDate){
            return timeOffsetText24(toDate - fromDate,0)
        }
        function timeOffsetText24(timeOffset,flag){
            var dayOfMil = (24 * 60 * 60 * 1000);
            var hourOfMil = 60 * 60 * 1000;
            var minOfMil = 60 * 1000;
            var secOfMil = 1000;

            var hourOffset = timeOffset % dayOfMil;
            var minuteOffset = hourOffset % hourOfMil;
            var seccondOffset = minuteOffset % minOfMil;

            var hours = Math.floor(timeOffset / hourOfMil);
            var minutes = Math.floor(minuteOffset / minOfMil);
            var secconds = Math.floor(seccondOffset / secOfMil);

            if(hours > 24){
                return 1;
            }
        }        
    },
    scroll( fn ) {
        var beforeScrollTop = document.body.scrollTop,
            fn = fn || function() {};
        window.addEventListener("scroll", function() {
            var afterScrollTop = document.body.scrollTop,
                delta = afterScrollTop - beforeScrollTop;
            if( delta === 0 ) return false;
            fn( delta > 0 ? "down" : "up" );
            beforeScrollTop = afterScrollTop;
        }, false);
    },
    tips(txt,hasBtn){
        if(common.isTipsShow){
            return ;
        }
        var $handle = $("#pop2");
        if(hasBtn){
            $handle.find(".pop_btn").show();
        }else{
            $handle.find(".pop_btn").hide();
        }
        $handle.find(".pop_p2").html(txt);
        $handle.show("fast");
        common.isTipsShow = true;
        setTimeout(function(){
            $handle.animate({"opacity":0},"slow",function(){
                $handle.hide().css("opacity",1);
                common.isTipsShow = false;
            });
        },2000);
    },
    init:function(){
        common.fromData();

    }


}

module.exports = common;
