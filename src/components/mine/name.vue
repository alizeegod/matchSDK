<style soped>
  li,ul{list-style: none}
  .name{
    width: 100%;
    position: relative;
  }
  .set_til{
    height: 56px;
    text-align: center;
    line-height: 56px;
    background: #1a212e;
    color: #fff;
    font-size: 24px;
    font-weight: normal;
  }
  .name_title{
    font-size: 24px;
    color: #fff;
    line-height: 2;
    margin-left: 6.6%;
    margin-top: 20px;
  }
  .name_main ul{
    width: 100%;
    overflow: hidden;
  }
  .name_main ul li{
    display: block;
    box-sizing: border-box;
    width: 20%;
    float: left;
    border: 3px solid #999999;
    position: relative;
    margin: 20px 6.6%;
  }
  .name_main ul li.active{
    border: 3px solid #2F9ED9;
  }
  .name_main ul li .name_img_bg{
    width: 100%;
    display: block;
  }
  .name_main ul li .name_img{
    width: 90%;
    display: block;
    position: absolute;
    top: 14%;
    left: 50%;
    margin-left: -45%;
  }
 .name_main ul li p{
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  color: #999;
  width: 92%;
  position: absolute;
  left: 50%;
  margin-left: -46%;
 }
 .name_main ul li p:nth-of-type(2){
    bottom: 0;
 }
 .name_main ul li p:nth-of-type(1){
    bottom: 48px;
    height: auto;
    line-height: 1;
 }
 .name_main ul li i{
  display: block;
  background: url(../../images/name_ico.png) no-repeat;
  background-size: 100% 100%;
  width: 71px;
  height: 48px;
  position: absolute;
  right: 0;
  bottom: 0;
 }
 .name_main ul li.active i{
  background: url(../../images/name_ico_on.png) no-repeat;
  background-size: 100% 100%;
 }
</style>
<template>
    <div class="name">
        <h3 class="set_til"><span></span>{{nametil}}</h3>
        <div class="name_main">
            <p class="name_title">{{nametip}}</p>
            <ul id="name-ul">
              <li v-for="(index,namedata) in namedatas" :class="namedata.ischecked ? 'active' : ''" @click="change(namedata.ischecked,index,$event)">
                <a>
                    <img :src="namedata.name_image"  class="name_img" />
                    <img src="../../images/name_img_bg.png" class="name_img_bg" />
                    <span class="name_ico"></span>
                    <p>{{namedata.name_who}}</p>
                    <p>{{namedata.name_time}}</p>
                    <i></i>
                </a>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
var Vue = require('Vue');
var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');
var Mock = require('mockjs');

Mock.mock('http://name.cn',{
    "array|1-10":[{
        'name_image': 'http://10.0.11.19/svn/match/2.0/src/images/name_img.png',
        'name_who':'排位赛-冷血杀神冠军',
        'name_time':'2016.05.21获得',
        'ischecked': true
    }]
});
var name = Vue.extend({
    name: 'name',
    data: function() {
        return {
          nametil:'修改称号',
          nametip:'称号最多选两个：',
          namedatas:'',
          ischecked: false
        };
    },
    store: store,
    vuex: {
        getters: {
            alertConfig: function() {
                return store.state.alertConfig;
            }
        },
        actions: actions
    },
    created: function(){
        var _this = this;
        $.ajax({
            url: 'http://name.cn',
            dataType: 'json',
            success: function(data) {
                _this.namedatas = data.array;
            }
        })
    },
    computed: {
        
    },
    ready: function() {
      
    },
    methods: {
        change: function(ischecked,index,event){
            console.log(event.target)
            console.log(ischecked)
            let actLength = $("#name-ul li").filter(".active").length;
            console.log(actLength)
            if (ischecked == true) {
                this.namedatas[index].ischecked = false;
            } else if (ischecked == false && actLength >= 2) {
                alert("最多只能选择两个称号")
            } else if (ischecked == false && actLength < 2) {
                this.namedatas[index].ischecked = true;
            }
        }
    }
});

module.exports = name;
</script>
