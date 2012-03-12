/**
 * Author: linqian.zl@taobao.com
 */
define(function(require) {

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

    if (!isClickableTarget(target)) {
      return;
    }
    

    try {
      doc.body.scrollTop = 0;
      doc.documentElement.scrollTop = 0;
    } catch(e) {}
  }

  function isClickableTarget(ele) {
    // TODO: 只处理点击两侧

    // 只处理到 html 路径小于 4 的节点双击
    var LEN_2_HTML = 5;
    
    var htmlEle = doc.documentElement;
    var cnt = 0;

    while(ele != htmlEle && (ele = ele.parentElement)) {
      ++cnt;
    }

    return cnt < LEN_2_HTML;
  }

  function init() {
    bindDbClick();
  }

  init();
});
