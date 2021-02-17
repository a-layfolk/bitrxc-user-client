// pages/order/index.js
import { request } from "../../request/index.js";

Page({

  data: {
    orderList: []
  },


  onLoad: function (options) {
    this.getOrderList();
  },

  // 请求订单数据
  getOrderList() {
    request({ url: "http://localhost:8000/order" })
    .then( result => {
      this.setData({
        orderList: result.data.message
      })
    });
  }

})