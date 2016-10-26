<style>
/*.match-list-zd{
    margin-top: 15px;
    margin-bottom: 15px;
    color: #fff;
    padding: 15px;
    background: #1c2236;
    position: relative;
    overflow: hidden;
    font-size: 13.82px;
}

.match-list-zd img.item-pic{
    width: 55.707%;
    max-width: 100%;
    min-height: 150px;
    float: left;
}
.match-list-zd .item-info{
    float:left;
    margin-left:7px;
}
.match-list-zd .item-info > p{
    margin-bottom: 10px;
}
.match-list-zd .item-txt{
   letter-spacing: 1px;
}
.match-list-zd .time{
    font-size:13px;
    line-height:13px;
    color: #cccccc;
}
.match-list-zd .item-time i{
    width: 10px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_4_@3x.png);
    background-size: 100% auto;
}
.match-list-zd .item-djs-time i{
    width: 12px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_1_@3x.png);
    background-size: 100% auto;
}
.match-list-zd .item-djs-time{
    color: #f56300;
}
.match-list-zd .item-jsd-time{
    color: #fdbd2f;
}
.match-list-zd .item-jsd-time i{
    width: 12px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_3_@3x.png);
    background-size: 100% auto;
}
.match-list-zd .item-rmb{
    font-size: 12px;
    line-height: 12px;
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
}
.match-list-zd .item-btn{
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
.match-list-zd .item-zbz-btn{
    background:#db2323;
}
.match-list-zd .item-jjks-btn{
    background:#d78933;
}
.match-list-zd .item-yjs-btn{
    background:#666;
    color: #db2323;
}
.match-match-con{
    color: #fff
}
.max-flex, .max-flex *, .max-flex :after, .max-flex :before,.max-match-flex,.max-match-flex *, .max-match-flex :after, .max-match-flex :before {
    box-sizing: border-box;
}

.max-match-flex{
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    color:#fff;
}
.max-match-flex li{
    flex: 1;
    width: 0;
    flex-basis: 0;
    max-width: 100%;
    display: block;
    position: relative;
    padding:15px 15px 20px 15px;

    margin-right: 1px;
    margin-bottom: 15px;
}
.max-match-flex li.ceil{
    background: #1c2236;  
}
.max-match-flex li:nth-child(2n) {
    margin-right: 0;
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
.max-match-flex .item-time i{
    width: 10px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_4_@3x.png);
    background-size: 100% auto;
}
.max-match-flex .item-time i{
    width: 10px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_4_@3x.png);
    background-size: 100% auto;
}
.max-match-flex .item-djs-time{
    color: #fdbd2f;
}
.max-match-flex .item-djs-time i{
    width: 12px;
    height: 13px;
    display: inline-block;
    vertical-align: -1px;
    margin-right: 10px;
    background-image: url(../../images/match_ico_3_@3x.png);
    background-size: 100% auto;
}
.max-match-flex .item-btn{
    width:60px;
    height:20px;
    float:right;
    display:block;
    text-align:center;
    border-radius:2px;
    line-height:20px;
    font-size:12px;
    background:#46af36;
}
.max-match-flex .item-ybm-btn{
    background: #46af36
}
.max-match-flex .item-yjs-btn{
    background: #666
}

.match-match-list .match-link-more{
    display: block;
    text-align: center;
    font-style: 12px;
    color: #fff;
    line-height: 12px;
    padding: 20px; 
}

.gl2_list_news {
    padding: 10px;
    color: #fff;
}
.gl_news {
    background: #0B0F17;
    padding-left: 10px;
}
.loadscroll {
    text-align: center;
    font-size: 12px;
    padding: 10px 0 30px 0;
    color: #6D7887;
    width: 100%;
}	*/
</style>

<template>
<div style="width:100px;height:100px;background:red" >{{raceway}}</div>
	<!-- <div class="match-list-zd" v-for="list in stickTop | filterBy '1' in 'dataTop'">
        <i class="item-ico item-ico{{ list.channel }}"></i>
        <img v-bind:src=list.picimg alt="" class="item-pic">
        <div class="item-info">
            <p class="item-txt">{{ list.name }}</p>
            {{{ list.starttime | formatDate list.endtime }}}
            <p class="item-a item-rmb"><i></i>奖金：{{ list.bonus }}元</p>
        </div>
    </div> -->
    <!-- <div id="match-list-mains">
        <li class="ceil" v-for="list in stickTop " track-by="$index">
            <div class="card-item" > 
               <i class="item-ico item-ico{{ list.channel }}"></i>
               <img v-bind:src=list.picimg alt="{{ list.name }}" class="item-pic">
               <span class="item-txt">
                   <span class="item-tit">{{ list.name }}</span>
                   <span class="item-num">{{ list.number }}人参加</span>
               </span>
               <span class="item-info" data-id="{{list.id}}">
               {{{ list.starttime | formatDate1 list.endtime }}}
               </span>
            </div>
        </li>
    </div> -->
    <div class="loadscroll subtitle-color" id="mover">上拉显示更多</div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

    var Page = 1;//初始化页面
    var PageSize = 12;//初始化每页显示条数
    var raceway = 0;//初始化类型
    var pageTotal = '';

var matchlist = Vue.extend({
    ready(){
       
    },
    data(){

    },
    props:['tabs'],
    methods:{

    }
})

// module.exports = matchlist;

// import Vue from 'Vue'
// import $ from 'jQuery'
// import hammer from '../../js/hammer'
//     var Page = 1;//初始化页面
//     var PageSize = 12;//初始化每页显示条数
//     var raceway = 0;//初始化类型
//     var pageTotal = '';
// 	export default {
// 		ready(){
// 			this.setTime()
// 			//console.log($("#hidRac").val())
// 			this.LoadMoreData($("#hidRac").val())
// 		},
// 		data(){
// 			return {
// 				stickTop:[],
// 				raceway:this.raceway
// 			}
// 		},
// 		props: ['tabBtn'],
// 		methods:{
// 			doto(raceway){
// 				let _self = this;
// 				//console.log(raceway)
// 				//_self.$set('racewayx',raceway)
// 				// raceway  赛事途径 0.全部 1.hpl赛事 2.线上赛
// 				// dataTop  置顶  0.无置顶 1.置顶
// 				// channel  分类  1.hpl  2.线上赛
// 				// name     名称  
// 				// number   参加人数
// 				// starttime开始时间
// 				// endtime  结束时间
// 				// bonus    奖金
//                 $.ajax({
// 	                url:"http://172.18.1.135/vue-match1/src/json/a",
// 	                type:"GET",
// 	                dataType:"json",
// 	                data:{gameList:"gamelist",raceWay:raceway,Page:Page},
// 	                success:function(data){
// 	                	pageTotal = Number(data.totalpage);
// 	                      _self.stickTop = data.datalist;
// 	                }
//                 })

// 			},
// 			setTime:function(){
// 	           setTimeout(function () {
// 	                $("#match-list-main li").length % 2 == 1?($("#match-list-main").append("<li></li>")):"";
// 	                $("#match-list-main li").each(function(i){
// 	                //console.log($("#match-list-main li"))
// 	                 $("#match-list-main li").slice(i*2,i*2+2).wrapAll('<ul class="max-match-flex"></ul>')
// 	                })
// 	                $(".max-match-flex li img").height($(".max-match-flex li").width()*161/279)

// 	            },100)
// 	        },
// 	        LoadMoreData:function(raceway){// 上啦加载更多
// 	        	var vm = this;
// 		        var _key = 1;
// 		        var hammertime = new Hammer(document.getElementById("match-list-mains"));
// 		        hammertime.on("panstart panup panend",function(e){
// 		            if(_key == 1){
// 		                var windowHeight = document.documentElement.clientHeight,
// 		                bodyscrollTop = document.body.scrollTop,
// 		                pageHeight = document.documentElement.scrollHeight;
// 		                if(bodyscrollTop >= (pageHeight-windowHeight)){
// 		                    if(e.eventType == 2){//表意input_move 
// 		                        $("#mover").html("加载中。。。。")
// 		                    }else if(e.type == "panend"){//事件名称
// 		                         _key = 0;
// 		                         if(Page<pageTotal){//当前页数 小于总页数
// 		                            setTimeout(function(){
// 		                                Page = Page+1;
// 		                                $.ajax({
// 									        url:"http://172.18.1.135/vue-match1/src/json/a",
// 									        type:"GET",
// 									        dataType:"json",
// 									        data:{gameList:"gamelist",raceWay:raceway,Page:Page},
// 									        success:function(data){
// 									            pageTotal = Number(data.totalpage);
// 									            for(var i in data.datalist){
//                                                     vm.stickTop.push(data.datalist[i])
//                                                 }
// 									        }
// 									    })
// 		                                $("#mover").text("上啦显示更多");
// 		                                _key = 1;
// 		                            },200)

// 		                         }else{
// 		                            $("#mover").text("没哟更多了")
// 		                         }
// 		                    }
// 		                }

// 		            }
// 		        })
// 		    }
// 		}
// 	}
</script>