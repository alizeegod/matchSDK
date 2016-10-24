<template>
    <div class="swiper">
        <swiper v-bind:options="swiperOption">
          <!-- 幻灯内容 -->
          <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide>
          <!-- ... -->
          <!-- 以下配置均为可选（使用具名slot来确定并应用一些操作控件元素） -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template>
<style soped>
.swiper{
	width: 100%;
}
</style>
<script>
var Vue = require('Vue');
// var AwesomeSwiper = require('vue-awesome-swiper');
require('../../../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css');
// var $ = require('jQuery');

var store = require('../../store/store.js');
var actions = require('../../store/actions.js');

var swiper = Vue.extend({
	  name: 'swiper',
      data: function() {
        return {
          swiperOption: {
            // 可以自定义配置一个别名，用于找到当前实例化后的swiper对象以便进行一些操作
            name: 'currentSwiper',
            // 所有配置均为可选（同Swiper配置）
            autoplay: 3000,
            direction : 'vertical',
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            scrollbar:'.swiper-scrollbar',
            mousewheelControl : true,
            observeParents:true,
            // if you need use plugins in the swiper, you can config like this
            debugger: true,
            // swiper callbacks
            onTransitionStart: function(swiper){
              console.log(swiper)
            },
            // more Swiper config ...
            // ...
          }
        }
      },
      // example code (if you need to get the current swiper object, find the swiper object in current component(vm) childrens)
      // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象
      computed: {
        swiper: function() {
          return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
        }
      },
      mounted: function() {
        // you can use current swiper object to do something(swiper methods)
        console.log('this is current swiper object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
      }
});

module.exports = swiper;
</script>
