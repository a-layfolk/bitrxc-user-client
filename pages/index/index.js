//Page Object
import { request } from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList: []
    
  },
  //options(Object)
  onLoad: function(options){
    // wx.request({
    //   url: "http://localhost:8000/swiper",
    //   success: (res) => {
    //     this.setData({
    //       swiperList: res.data.message
    //     })
    //   }
    // })
    request({
      url: "http://localhost:8000/swiper"
    })
    .then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })

  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});