<style soped>
.matchprize{
    width: 98%;
    padding: 15px 0;
    margin: 10px auto;
    overflow: hidden;
    border: 1px solid #3A4861;
}
.mp-title{
    width: 94%;
    height: 28px;
    margin: 6px auto;
    line-height: 28px;
}
.mp-title h3{
    float: left;
    font-size: 26px;
    color: #e1e1e1;
    position: relative;
}
.mp-title h3:before{ 
    content: '|';
    position: absolute;
    left: -14px;
    border-left: 3px solid #648EDA;
    color: transparent;
}
.mp-con{
    width: 90%;
    margin: 30px auto 10px;
    color: #fff;
}
.mp-item{
    overflow: hidden;
}
.mp-item .mp-ranking{
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #e1e1e1;
}
.mp-item .mp-prize{
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #fad83a;
}
.mp-item img{
    width: 60%;
    display: block;
    margin: 20px auto;
}
.mp-con .swiper-button-prev{
    left: -25px;
}
.mp-con .swiper-button-next{
    right: -25px;
}
.mp-con .swiper-container{
    overflow: initial;
}
</style>
<template>
    <div class="matchprize">
        <section class="mp-title clearfix">
            <h3>赛事奖励</h3>
        </section>
        <section class="mp-con">
            <swiper :options="swiperOption">
                <!-- 幻灯内容 -->
                <swiper-slide class="mp-item" v-for="matchprize in matchprizes">
                    <p class="mp-ranking">{{matchprize.ranking}}</p>
                    <img :src="matchprize.imgurl">
                    <p class="mp-prize">{{matchprize.prize}}</p>
                </swiper-slide>
                <!-- ... -->
                <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
    </div>
</template>
<script>
var Vue = require('Vue');
var $ = require('jQuery');
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper';

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var matchprize = Vue.extend({
    name: 'matchprize',
    data: function() {
        return {
            swiperOption: {
                // 如果你后续需要找到当前实例化后的swiper对象以对其进行一些操作的话，可以自定义配置一个名字
                name: 'currentSwiper',
                // 所有配置均为可选（同Swiper配置）
                // autoplay: 3000,
                slidesPerView: 5,
                direction : 'horizontal',
                freeMode: true,
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                observeParents:true,
                // if you need use plugins in the swiper, you can config in here like this
                debugger: true,
                // swiper callbacks
                onTransitionStart: function(swiper){
                  console.log(swiper)
                }
                // more Swiper config ...
                // ...
            }
        };
    },
    props: ['matchprizes'],
    components: {
        swiper,
        swiperSlide
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
    ready: function() {
        
    },
    methods: {
        
    }
});

module.exports = matchprize;
</script>
