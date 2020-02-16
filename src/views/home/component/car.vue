<template lang="pug">
  .canvas-car
    canvas(id="car" width="300" height="200")
</template>
<script>
/**
 * @description 小汽车轮胎构造函数
 */
function tyre(ctx) {
  this.x = 130
  this.y = 180
  this.r = 10
  this.draw = function() {
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fillStyle = '#000'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r - 6, 0, Math.PI * 2, false);
    ctx.fillStyle = '#fff'
    ctx.fill()
  }
}
/**
 * @description 小车模型
 */
function carMode(ctx) {
  this.x = 130
  this.y = 180
  this.r = 11
  this.draw = function() {
    ctx.beginPath()
    ctx.moveTo(this.x - 20, this.y)
    ctx.lineTo(this.x - 10, this.y)
    // 后轮胎处
    ctx.arc(this.x, this.y, this.r, Math.PI, Math.PI * 2, false);
    ctx.lineTo(this.x + 40, this.y)
    // 前轮胎处
    ctx.arc(this.x + 50, this.y, this.r, Math.PI, Math.PI * 2, false);
    ctx.lineTo(this.x + 71, this.y)
    // 车头曲线
    ctx.arc(this.x + 45, this.y, this.r + 15, 0, -Math.PI / 2, true);
    // 车顶曲线
    ctx.arc(this.x + 20, this.y - 16, this.r + 16, -Math.PI / 9, -Math.PI / 1.1, true);
    ctx.lineTo(this.x - 4, this.y - 23)
    // 车尾曲线
    ctx.arc(this.x, this.y - 6, this.r + 6, -Math.PI / 1.6, -Math.PI, true);
    ctx.lineTo(this.x - 20, this.y)
    ctx.closePath()
    ctx.fillStyle = '#F49C48'
    ctx.fill()
    // 画后车窗
    ctx.beginPath()
    ctx.moveTo(this.x + 18, this.y - 22)
    ctx.lineTo(this.x + 18, this.y - 36)
    ctx.arc(this.x + 18, this.y - 22, this.r + 3, -Math.PI / 2, -Math.PI, true)
    ctx.closePath()
    ctx.fillStyle = '#48B3F4'
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = '#747575'
    ctx.stroke()
    // 画前车窗
    ctx.beginPath()
    ctx.moveTo(this.x + 20, this.y - 22)
    ctx.lineTo(this.x + 20, this.y - 36)
    ctx.arc(this.x + 20, this.y - 16, this.r + 9, -Math.PI / 2, -Math.PI / 10, false)
    ctx.closePath()
    ctx.fillStyle = '#48B3F4'
    ctx.fill()
    ctx.strokeStyle = '#747575'
    ctx.stroke()
    // 画门把手
    ctx.beginPath()
    ctx.moveTo(this.x + 20, this.y - 18)
    ctx.lineTo(this.x + 24, this.y - 18)
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.fillStyle = '#000'
    ctx.stroke()
    // 画车灯
    ctx.beginPath()
    ctx.moveTo(this.x + 65, this.y - 10)
    ctx.lineTo(this.x + 63, this.y - 14)
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#FCEA6E'
    ctx.stroke()
  }
}
/**
 * @description 公路
 */
function road(ctx) {
  this.x = 0
  this.y = 170
  // 白色块的起始位置
  this.startX = -10
  // 马路中间白色块的数量
  this.rectNo = 16
  // 空白间隔
  this.gutter = 20
  // 白色块长度
  this.rectW = 20
  this.draw = function() {
    // 画马路背景
    ctx.beginPath()
    ctx.fillStyle = '#717171'
    ctx.fillRect(this.x, this.y - 20, 300, 200)
    ctx.closePath()
    for (var i = 0; i < this.rectNo; i++) {
      ctx.beginPath()
      ctx.moveTo(this.startX + (this.rectW * i) + this.gutter + 10, this.y + 5)
      ctx.strokeStyle = '#EEECEC'
      ctx.lineTo(this.startX + (this.rectW * (i + 1)) + this.gutter, this.y + 5)
      ctx.lineWidth = 6
      ctx.lineCap = 'butt'
      ctx.stroke()
    }
  }
}
/**
 * @description 山脉
 */
function mountain(ctx) {
  this.x = 0
  this.y = 150
  this.draw = function() {
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x, this.y - 30)
    ctx.lineTo(this.x + 20, this.y - 60)
    // 山顶
    ctx.arc(this.x + 35, this.y - 55, 15, -Math.PI / 1.2, -Math.PI / 9, false)
    ctx.lineTo(this.x + 65, this.y - 30)
    // 山坳
    ctx.arc(this.x + 70, this.y - 30, 5, Math.PI / 1.2, Math.PI / 9, true)
    ctx.lineTo(this.x + 90, this.y - 80)
    // 山顶
    ctx.arc(this.x + 100, this.y - 72, 13, -Math.PI / 1.2, -Math.PI / 9, false)
    ctx.lineTo(this.x + 135, this.y - 20)
    // 山坳
    ctx.arc(this.x + 140, this.y - 23, 5, Math.PI / 1.2, Math.PI / 9, true)
    ctx.lineTo(this.x + 165, this.y - 50)
    // 山顶
    ctx.arc(this.x + 175, this.y - 42, 13, -Math.PI / 1.2, -Math.PI / 9, false)
    ctx.lineTo(this.x + 195, this.y - 25)
    // 山坳
    ctx.arc(this.x + 205, this.y - 23, 5, Math.PI / 1.2, Math.PI / 9, true)
    ctx.lineTo(this.x + 225, this.y - 60)
    // 山顶
    ctx.arc(this.x + 235, this.y - 52, 13, -Math.PI / 1.2, -Math.PI / 9, false)
    ctx.lineTo(this.x + 258, this.y - 25)
    // 山坳
    ctx.arc(this.x + 265, this.y - 23, 5, Math.PI / 1.2, Math.PI / 9, true)
    ctx.lineTo(this.x + 300, this.y - 70)
    // 山顶
    ctx.arc(this.x + 315, this.y - 72, 13, -Math.PI / 1.2, -Math.PI / 9, false)
    ctx.lineTo(this.x + 345, this.y - 20)
    // 山坳
    ctx.arc(this.x + 350, this.y - 23, 5, Math.PI / 1.2, Math.PI / 9, true)
    ctx.lineTo(this.x + 355, this.y - 30)
    ctx.lineTo(this.x + 355, this.y)
    const grd = ctx.createLinearGradient(this.x, this.y, this.x, this.y - 80);
    grd.addColorStop(0, "#71A523");
    grd.addColorStop(1, "#A9E156"); 
    ctx.fillStyle = grd
    ctx.closePath()
    ctx.fill()
    // ctx.stroke()
  }
}
export default {
  name: 'canvasCar',
  data() {
    return {
      tyre: null,   // 轮胎实例
      carObj: null, // 车的实例
      roadObj: null, // 马路实例
      carCtx: null // 车canvas实例对象
    }
  },
  mounted() {
    var car = document.getElementById('car')
    this.carCtx = car.getContext('2d')
    // 马路
    this.roadObj = new road(this.carCtx)
    // 轮胎模型
    this.tyre = new tyre(this.carCtx)
    this.tyre.draw()
    this.tyre.x = 180
    this.tyre.draw()
    // 小车模型
    this.carObj = new carMode(this.carCtx)
    this.carObj.draw()
    // 山脉模型
    this.mountainObj = new mountain(this.carCtx)
    this.mountainObj.draw()
    this.init()
  },
  methods: {
    reset() {
      // 清空马路模块的图
      this.carCtx.clearRect(0, 0, 300, 200)
      this.roadObj.draw()
      this.tyre.x = 130
      this.tyre.draw()
      this.tyre.x = 180
      this.tyre.draw()
      this.mountainObj.draw()
      this.carObj.draw()
    },
    draw() {
      this.roadObj.startX -= 1
      this.mountainObj.x -= 1
      if (this.roadObj.startX <= -30) {
        this.roadObj.startX = -10
      }
      if (this.mountainObj.x <= -55) {
        this.mountainObj.x = 0
      }
      this.reset()
    },
    init() {
      this.draw()
      requestAnimationFrame(this.init)
    }
  }
}
</script>
<style lang="scss" scoped>
  .canvas-car {
    #car {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid darkgoldenrod;
    }
  }
</style>