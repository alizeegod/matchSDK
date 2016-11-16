<style>
.match-rules,.match-rules *,.match-rules:after,.match-rules:before{
    box-sizing: border-box;
}
.match-rules{
    background: #050d19;
    font-size: 17px;
}
.match-rules >p {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #e1e1e1;
    background: #1a212e;
}
.match-rules-box{
    padding: 15px 10px;
}
.match-rules-box p{
    font-size: 15px;
    color: #ccc;
    line-height: 24px;
}
</style>
<template>

<div class="match-rules">
    <p>比赛规则说明</p>
    <div class="match-rules-box">
        {{{dataruesC}}}
    </div>
</div>
 
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var common = require('../../js/common.js');

module.exports ={
    data: function() {
        return {
            dataruesC:'',
            matchid:wsCache.get('HEROC').matchid
        };
    },
    ready: function() {
        this.rulesmatchidFn();
    },
    methods: {
        rulesmatchidFn:function(){
            var self = this;
            var gPost = "POST";
            var data = {
                match_id : self.matchid,
                gameid : gload_conf.gameid
            };
            $.ajax({
                url:common.getBaseUrl()+'/match/detail.lg',
                type:gPost,
                dataType:"json",
                data:data,
                beforeSend:function(){
                    console.log("数据正在加载.....")
                },
                success:function(data){
                    self.dataruesC = data.data.match.rules;
                }
            })
        }
        
    }
}

</script>
