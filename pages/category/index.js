// pages/category/index.js
import { request } from "../../request/index.js";

Page({

  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的菜单数据
    rightMenuList: [],
    // 被点击的左侧菜单
    currentIndex: 0
  },

  // 接口返回数据
  Cates: [],



  onLoad: function (options) {
    this.getCates();
  },

  // 获取分类数据
  getCates() {
    request({
      url: "http://localhost:8000/category"
    })
    .then(result => {
      this.Cates = result.data.message;

      // 构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v => v.cat_name);

      // 构造右侧的详细数据
      let rightMenuList = this.Cates[0].child;

      this.setData({
        leftMenuList,
        rightMenuList
      })
    })
  },

  // 左侧菜单的点击事件
  handleItemTap(e) {
    console.log(e);
    const { index } = e.currentTarget.dataset;
    let rightMenuList = this.Cates[index].child;
    this.setData({
      currentIndex: index,
      rightMenuList
    })
  }
})