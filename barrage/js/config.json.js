// 实现简单的弹幕配置
;(function(window, document) {
  'use strict';
  var barrageConfig = {
    //  弹幕对象
    barrageObject: {
      // 弹幕布景对象id
      id: 'barrage',
      // 弹幕布景对象宽度设置
      width: '',
      // 弹幕布景对象高度设置
      height: '',
      // 补充，待续...
    },
    barrageConfig: {
      // 弹幕顶部功能配置
      top: true,
      // 弹幕底部功能配置
      bottom: true,
      // 弹幕字体颜色功能配置
      color: true,
      // 弹幕字体大小功能配置
      fontSize: '',
      // 补充，待续...
    }
  };
  window.barrageConfig =  barrageConfig;
})(window, document);
