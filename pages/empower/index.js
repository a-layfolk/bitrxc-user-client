// pages/empower/index.js
Page({

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 处理授权
  handleGetUserInfo(e) {
    const { userInfo } = e.detail;
    wx.setStorageSync("userInfo", userInfo);

    // 返回上级页面
    wx.navigateBack({
      delta: 1
    });
  }
})