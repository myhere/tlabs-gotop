/**
 * Author: linqian.zl@taobao.com
 */
define(function(require) {
//LabsJS.define(function(require) {

  var doc = document;

  function bindDbClick() {
    var S = window.KISSY;

    if (S) {
      S.Event.on(doc.body, 'dblclick', dbClickHandler)
    } else {
      $ = require('jquery-1.6.1');
      $(doc.body).dblclick(dbClickHandler)
    }
  }

  function dbClickHandler(evt) {
    var target = evt.target;
    // if (target.tagName !== 'BODY') {
    //   return;
    // }
    
    // TODO: 只处理点击两侧

    try {
      doc.body.scrollTop = 0;
      doc.documentElement.scrollTop = 0;
    } catch(e) {}
  }

  function init() {
    bindDbClick();
  }

  init();
});

//@ sourceURL=double_click_gotop.js
