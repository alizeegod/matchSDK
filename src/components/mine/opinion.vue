<style soped>
.opinion{
  width: 100%;
} 
.opinion_til{
  color: #cccccc;
  font-size: 20px;
  width: 95%;
  margin: 0 auto;
  line-height: 2;
}
.opmain{
    width: 95%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    background: #161A23; 
}
.opmain textarea{
  width: 100%;
  height: 100px;
  background: #161A23;
  border: 0;
  outline: none;
  font-size: 14px;
  color: #999999;
  display: block;
}
.opmain_bot{
    width: 100%;
    margin-top: 10px;
    position: relative;
}
.opmain_add_img{
    width: 80%;
}
.opmain_add_btn{
    display: block;
    width: 60px;
    height: 60px;
    background: url(../../images/opinion-ico.png) no-repeat;
    background-size: 100% 100%;
}
.opmain_len{
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 16px;
    color: #565e6d;
}
.opmain_commit{
  background: #161A23;
  border-radius: 5px;
  border: 0;
  outline: none;
  color: #999999;
  height: 40px;
  line-height: 40px;
  width: 120px;
  margin-left: 2.5%;
  margin-top: 10px;
  font-size: 24px;
}
.opmain_commit.active{
  background: #309ed9;
  color: #fff;
}
</style>
<template>
<div class="opinion">
  <h3 class="set_til">{{opiniontil}}</h3>
  <h3 class="opinion_til">{{opiniontip}}</h3>
  <div class="opmain">
    <textarea v-model="message" placeholder="请描述你的问题或意见" maxlength="300"></textarea>
    <div class="opmain_bot">
        <div class="opmain_add_img" style="display:none;">
            <i class="opmain_add_btn" @click="addImg"></i>
        </div>
        <p class="opmain_len">{{msgLen}}/300</p>
    </div>
  </div>
  <button class="opmain_commit" @click="commit" :class="isActive ? 'active' : ''">提交</button>
</div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');


var opinion = Vue.extend({
    name: 'opinion',
    data: function() {
        return {
            opiniontil:'意见反馈',
            opiniontip:'问题与意见',
            message: ''
        };
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
    computed: {
        msgLen: function(){
            return this.message.length;
        },
        isActive: function(){
            if (this.message == '') {
                return false;
            } else {
                return true;
            }
        }
    },
    ready: function() {
        console.log(this.msgLen)
    },
    methods: {
        addImg: function(){

        },
        commit: function(){
            let _this = this;
            if (_this.message == '') {
                actions.alert(store,{show:true,msg:'请描述你的问题或意见'})
            } else {
                $.ajax({
                    url: ROOTPATH + '/match/feedback.lg' + QUERY,
                    type:'POST',
                    dataType:'json',
                    data:{content:_this.message},
                    beforeSend:function(){
                        $(".loading-1").show();
                    },
                    success:function(data){
                        //返回1 提交成功
                        //返回0 提交失败
                        $(".loading-1").hide();
                        if(data.code==1){
                            
                            actions.alert(store,{show:true,msg:data.msg})
                        }else if(data.code==0){
                            actions.alert(store,{show:true,msg:data.msg})
                        }
                    }
                });  
            }
        }
    }
});

module.exports = opinion;
</script>