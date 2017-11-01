// (function (doc, win) {
//   var docEl = doc.documentElement
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
//   var recalc = function () {
//     var clientWidth = docEl.clientWidth
//     if (!clientWidth) return
//     docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
//   }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)

window.onresize = function dpr () {
  var d = document
  const desWidth = 750
  var _dpr = (1 / window.devicePixelRatio)
  _dpr = 1
  const _MaxWidth = 414 * window.devicePixelRatio
  const userAgent = navigator.userAgent
  var widthStr = 'device-width'
  var isMobile = true
  var iWidth = 0
  var _html = d.getElementsByTagName('html')[0]
  if (userAgent.toLowerCase().indexOf('iphone') === -1 && userAgent.toLowerCase().indexOf('android') === -1) {
    isMobile = false // iWidth = _MaxWidth;
    widthStr = iWidth + 'px'
  }
  d.querySelector('[name="viewport"]').setAttribute('content',
    'width=' + widthStr + ' , initial-scale=' + _dpr + ', maximum-scale=' + _dpr + ', minimum-scale=' + _dpr + ', user-scalable' + '=no')
  iWidth = Math.min(d.documentElement.clientWidth, window.innerWidth)
  if (!isMobile) iWidth = _MaxWidth
  _html.style.fontSize = (((100 * iWidth) / desWidth)) + 'px'
  _html.dataset.dpr = 1 // window.devicePixelRatio;
}
window.onresize()
