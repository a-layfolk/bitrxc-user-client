// pages/rooms_detail/index.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roomInfo: {},
    array: ["8:00-10:00", "10:00-12:00", "14:00-16:00", "16:00-18:00", "20:00-22:00"],
    objectArray: [
      {
        id: 0,
        name: "8:00-10:00"
      },
      {
        id: 1,
        name: "10:00-12:00"
      },
      {
        id: 2,
        name: "14:00-16:00"
      },
      {
        id: 3,
        name: "16:00-18:00"
      },
      {
        id: 4,
        name: "20:00-22:00"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {room_id} = options;
    console.log(room_id);

    // 发起房间详情的请求
    this.getRoomDetail();
  },

  // 获取房间详情
  getRoomDetail() {
    request({
      url: "http://localhost:8000/room"
    })
    .then(result => {
      this.setData({
        roomInfo: result.data.message
      })
    })
  },

  // 绑定选择器 
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})