<style soped>
.bind-content{
    width: 100%;
}
.bind-title{
    width: 100%;
   height: 50px;
  text-align: center;
  line-height: 50px;
  background: #1A212E;
  color: #e1e1e1;
  font-size: 20px;
}
.bind-if p{
  margin-left: 20px;
  margin-top: 15px;
  color: #e1e1e1;
  font-size: 16px;
  line-height: 1.5;
}
.bind-form{
  margin-left: 20px;
  color: #e1e1e1;
  font-size: 16px; 
}
.bind-form label{
  width: 100px;
  line-height: 40px;
  display: block;
  float: left;
}
.bind-form input{
  width: 235px;
  height: 40px;
  line-height: 40px;
  display: block;
  border: 0;
  background: #a9b3bf;
  color: #000;
  padding-left: 15px;
  float: left;
  outline: none;
}
.bind-form .bind-yzm,.bind-form .bind-iphone{
  margin: 15px 0;
  overflow: hidden;
}
.bind-form .bind-yzm input{
  width: 105px;
}
.bind-form .bind-yzm span{
  display: block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  float: left;
  background: #2F9ED9;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-left: 30px;
  border-radius: 5px;
}
.bind-btn{
  width: 350px;
  margin-top: 15px;
  overflow: hidden;
}
.bind-btn a{
  display: block;
  width: 80px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-decoration: center;
  border-radius: 5px;
  text-align: center;
}
.bind-btn a:nth-of-type(1){
  float: left;
  background: #2F9ED9;
}
.bind-btn a:nth-of-type(2){
  float: right;
  color: #555555;
  background: #a9b3bf;
}
</style>
<template>
  <div class="bind-content">
    <h3 class="bind-title">{{bindtil}}</h3>
    <div class="bind-if">
        <p v-if="isbing">你当前绑定的手机号:{{userMsg.iphone}}</p>
        <p v-else>绑定手机号</p>
    </div>
    <form action="post" class="bind-form">
        <div class="bind-iphone">
            <label>新的手机号：</label>
            <input number name="userIphone" v-model="from.userIphone">
        </div>
        <div class="bind-yzm">
            <label>短信验证码：</label>
            <input number name="userCode" v-model="from.userCode">
            <span id="bind-tel-code">获取验证码</span>
        </div>
        <div class="bind-btn">
            <a v-on:click="sureBtnTel" title="确定">完成</a> 
            <a v-on:click="closeBtnTel">取消</a>
        </div>
    </form>
  </div>
</template>

<script>
var Vue = require('Vue');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

import tool from '../../js/tool';

var bind = Vue.extend({
    name: 'bind',
    data: function() {
        return {
            bindtil:'修改绑定手机号',
            from :{
                userIphone:'',
                userCode:'',
            }
        };
    },
    store: store,
    vuex: {
        getters: {
            userMsg: function() {
                return store.state.userMsg;
            }
        },
        actions: actions
    },
    computed: {
        isbing: function(){
            if (this.userMsg.iphone == null) {
                return false;
            } else {
                return true;
            }
        }
    },
    ready: function() {

        var _this = this;
        // 应用状态修改示例
        actions.set(store,{id:'4',iphone:'15097553633'})
        
        new tool.verification("bind-tel-code",{
            'endTime' : '0',
            'startTime': '60',
            'outColor' : '#fff',
            'outFontSize' : '16px',
            'outBackground' : '#7F7F7F',
            'outText' : '秒后重发',
            callBack : function(){
                // ajax回调
                console.log('ajax报名');
                $.ajax({
                    url:'http://10.0.11.19/svn/match/2.0/src/json/a.json',
                    type:'GET',
                    dataType:'jsonp',
                    jsonp:'callback',
                    jsonpCallback:'jsonp'+new Date().getTime(),
                    data:{useriphone: _this.from.userIphone},
                    success:function(data){
                        //返回0 发送成功
                        //返回1 该号码已注册
                        //返回2 发送失败
                        console.log(data.msg);
                        if(data.msg=="1"){
                            console.log(data.lists)
                            alert("发送成功")
                        }else if(data.msg=="2"){
                            alert('该号码已注册')
                        }else if(data.msg=="3"){
                            alert('发送失败') 
                        }
                    }
                });
            }
        })
    },
    methods: {
        sureBtnTel: function(event){
            var _this = this;
              
            if(!tool.tel($("input[name=userIphone]"))){return}
            if(!tool.yzm($("input[name=userCode]"))){return}
                
            //$.ajax
            $.ajax({
                url:'http://10.0.11.19/svn/match/2.0/src/json/a.json',
                type:'GET',
                dataType:'jsonp',
                jsonp:'callback',
                jsonpCallback:'jsonp'+new Date().getTime(),
                // data:{userid: _this.userCon.id},
                success:function(data){
                    //返回0 注册成功
                    //返回1 该号码已注册
                    //返回2 验证码不对
                    console.log(data.msg);
                    if(data.msg=="1"){
                        console.log(data.lists)
                        alert("注册成功")
                    }else if(data.msg=="2"){
                        alert('该号码已注册')
                    }else if(data.msg=="3"){
                        alert('验证码不对') 
                    }
                }
            });  
        },
        closeBtnTel: function(event){
          
        }
    }
});

module.exports = bind;
</script>
