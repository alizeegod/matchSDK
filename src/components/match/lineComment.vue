<style>
	.match-comment-box,.match-comment-box *,.match-comment-box:after,.match-comment-box:before{
	    box-sizing: border-box;
    }
    .match-comment-box{
    	position: relative;
    	font-size: 12px;
    	padding: 0 0 40px 21px;
    	overflow:hidden;
    }
    .match-comment-box .mh-father-comment{
    	overflow:hidden;
    }
    .pop_guide_task{
    	width: 100%;
    	height: 100%;
    	z-index: 9999;
    	position: fixed;
    	top: 0;
    	left: 0;
    	display: none;
    	bottom: 0;
    	right: 0;
    }
    .pop{
    	background: #303131;
    	border-radius: 5px;
    	color: #DDDDDD;
    	font-size: 15px;
    	position: absolute;
    	z-index: 999;
    	width: 80%;
    	transform: translate(-50%,-50%);
    	-webkit-transform: translate(-50%,-50%);
    	top: 50%;
    	left: 50%;
    	padding: 10px;
    }
    .pop p{
    	text-align: center;
    }
    .pop_btn{
    	width: 40%;
    	padding: 1.5% 0px;
    	background: #5193FF;
    	color: #fff;
    	border-radius: 5px;
    	display: block;
    	margin: 0 auto;
    	text-align: center;
    	margin-top: 10px;
    	margin-bottom: 10px;
    }
</style>
<template>
	<div class="season-tab">
	    <childnav v-ref:commentnum></childnav>
	    <div class="season-tab-box" style="padding-top:61px">
            <div class="prank-con  match-comment-box" v-drapload drapload-key="ascroll" drapload-initialize="true" drapload-down="down_a()">
	            <list-component v-ref:alist v-bind:comments="comments"></list-component>
            </div>
            <input-component v-ref:input></input-component>
	    </div>
	    
	</div>
</template>
<script>
	var Vue = require('Vue');
    var nav = require('./nav.vue');
    var listMod = require('./listMod.vue');
    var inputMod = require('./inputMod.vue');
    var $ = require('jQuery');
    var common = require('../../js/common.js');
    var zepto = require('../../js/zepto.min.js');
    var store = require('../../store/store.js');
    var actions = require('../../store/actions.js');

    module.exports ={
        data:function(){
        	return {
        		myId:gload_conf.uid,
        		nickName:gload_conf.rolename,
        		avatar:gload_conf.avatar,
        		totalNum:0,
        		comments:[],
        		listLoading:false,
        		loading:false,
        		startNums:0,
        		listLength:50,
        		scrollMore:1,
        		pageEnd:false,
        		page:0,
        		linkMore:"",
        		showMore:false,
        		replyPerson:"",
        		replyName:""
        	}
        },
        store: store,
        vuex: {
        	getters: {
        		userMsg: function() {
        			return store.state.userMsg;
        		},
        		alertConfig: function() {
        			return store.state.alertConfig;
        		}
        	},
        	actions: actions
        },
        components:{
        	"list-component":listMod,
        	"input-component":inputMod,
        	"childnav":nav
        },
        events:{
        	'addTotalNum':function(num){
        		if(this.totalNum >= 100){
        			this.totalNum="99+";
                }else{
                    this.totalNum= parseInt(this.totalNum) + parseInt(num);
        		}
        		this.$refs.commentnum.totalNum= this.totalNum;
        		actions.set(store,{comment:this.totalNum});
        		wsCache.set('COMMENTA',{comment : this.totalNum});
            },
        	'openReply':function(el,item){
                var $input = this.$refs.input;
                $input.curEl = el;
                if(item){
                	$input.replyEl = item;
                }else{
                	$input.replyEl = {};
                }
                $input.openPannel();
        	},
        	'openReport':function(){

        	},
        	'addComents':function(tem){
        		var _this = this;
        		_this.$refs.alist.comments.unshift(tem);
        	}
        },
        loadListData: function (fn) {
            var me = this.vue;
            $.ajax({
                url:common.getBaseUrl()+'/match/comment.lg'+QUERY,
                type:"POST",
                dataType:"json",
                data:{pagesize:me.listLength,page:me.page,match_id:wsCache.get('HEROC').matchid},
                success: function (data) {
                    fn(data)
                }
            });
        },
        methods:{
        	openInput:function(){
                this.$refs.input.curEl = {};
                this.$refs.input.openPannel();
        	},
        	openReply:function(el,curEl){
                var con = curEl?("回复"+curEl.rolename+"："):"";
                this.replyPerson = curEl?curEl.id:"";
                this.replyname = curEl?curEl.rolename:"";
        	},
        	cancelReply:function(el){

        	},
        	openReport:function(index,isHot){

        	},
            down_a: function () {
                var me = this;
                me.page += 1;
                me.$options.loadListData(function (data) {
                    if(data.code==0){
                        me.comments = me.comments.concat(data.data.list);
                        if(me.totalNum==0){
                            me.totalNum = data.data.total;
                            me.totalNum > 100 ? (me.totalNum="99+") : me.totalNum;
                        }
                        me.$startNums += me.listLength;
                        me.listLoading = false;
                        actions.set(store,{comment:me.totalNum});
                        
                        me.$nextTick(function () {
                            $(".loading-1").hide();
                        })
                        if(me.page>=data.data.totalpage){
                            me.ascroll.noData();
                        }
                        me.ascroll.resetload(true)
                    }else if(data.code < 0){
                        me.ascroll.noData();
                        me.ascroll.resetload(true)
                        $(".loading-1").hide();
                        
                        return ;
                    }
                });
                
            },
            touchMove:function(o){
                var startX,startY,moveEndX,moveEndY,X,Y;
                $(o).on("touchstart", function(e) {
                    e.preventDefault();
                    startX = e.originalEvent.changedTouches[0].pageX,
                    startY = e.originalEvent.changedTouches[0].pageY;
                });
                $(o).on("touchmove", function(e) {
                    e.preventDefault();
                    moveEndX = e.originalEvent.changedTouches[0].pageX,
                    moveEndY = e.originalEvent.changedTouches[0].pageY,
                    X = moveEndX - startX,
                    Y = moveEndY - startY;
                 
                    if ( Y > 0) {
                        console.log("top 2 bottom");
                    }else if ( Y < 0 ) {
                        console.log("bottom 2 top");
                    }
                });
            }

        },
        ready:function(){
            var me = this;
                me.$options.vue = me;
            var rH = document.documentElement.clientHeight - 102;
            $(".season-tab-box .prank-con").height(rH);
        }
    }
</script>