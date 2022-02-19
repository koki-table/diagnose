import anime from 'animejs/lib/anime.es.js'

// eslint-disable-next-line no-unused-vars
const logo = document.getElementById('logo')
// const startAnimation = document.getElementById('startAnimation')

window.onload = function() {
  // timelineデフォルトのパラメーターを設定
  let timeline = anime.timeline({
    targets: '.st0',
    direction: 'normal',
    loop: false
  })
  // 線画部分のアニメーションを設定
  timeline.add({
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    fill: ['transparent', 'transparent'], // 塗りつぶしを透明のままにする
    duration: 300,
    delay: function(el, i) {
      return i * 150
    }
  })
  // 塗りつぶしのアニメーションを設定
  timeline.add(
    {
      easing: 'easeInOutSine',
      fill: ['transparent', '#000000'],
      duration: 500
    },
    '-=200'
  ) // ひとつ前のアニメーションが終わる200ミリ秒前に開始する

  setTimeout(function() {
    document.getElementsByClassName('loading-anime')[0].classList.add('end')
  }, 1800)
}

// document.querySelector('.loading-anime').addEventListener('load', function() {
//   setTimeout(function() {
//     document.getElementsByClassName('loading-anime')[0].classList.add('end')
//   }, 1600)
// })
