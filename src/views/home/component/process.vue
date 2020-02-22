<template lang="pug">
  .canvas-process
    canvas(id="process")
</template>
<script>
/**
 * @description 进度条构造函数
 */
function progressbar(ctx) {
  this.widths = 0
  this.hue = 0
  
  this.draw = function() {
    ctx.fillStyle = 'hsla('+ this.hue +', 100%, 40%, 1)'
    ctx.fillRect(25,80,this.widths,25)
    var grad = ctx.createLinearGradient(0,0,0,130)
    grad.addColorStop(0,"transparent")
    grad.addColorStop(1,"rgba(0,0,0,0.5)")
    ctx.fillStyle = grad
    ctx.fillRect(25,80,this.widths,25)
  }
}
/**
 * @description 小碎片构造函数
 */
function particle(ctx, bar) {
  this.x = 23 + bar.widths
  this.y = 82
  
  // 水平位移差
  this.vx = 0.8 + Math.random() * 1
  this.v = Math.random() * 5
  this.g = 1 + Math.random() * 3
  this.down = false
  
  this.draw = function(){
    ctx.fillStyle = 'hsla('+ (bar.hue + 0.3) +', 100%, 40%, 0.7)'
    var size = Math.random() * 2
    ctx.fillRect(this.x, this.y, size, size)
  }
}
export default {
  name: 'canvasProcess',
  data() {
    return {
      counter: 0,
      particles: [],
      particle_no: 25,
      w: 400,
      h: 200,
      bar: null,
      ctx: null   // canvas实例对象
    }
  },
  mounted() {
    var canvas = document.getElementById('process')
    this.ctx = canvas.getContext("2d");
    canvas.width = this.w;
    canvas.height = this.h;
    this.bar = new progressbar(this.ctx)
    this.animloop()
  },
  methods: {
    reset() {
      this.ctx.clearRect(0,0,this.w,this.h)
      this.ctx.fillStyle = "transparent"
      this.ctx.fillRect(0,0,this.w,this.h)
      this.ctx.fillStyle = "#171814"
      this.ctx.fillRect(25,80,350,25)
    },
    draw() {
      this.reset();
      this.counter++
      
      this.bar.hue += 0.8;
      
      this.bar.widths += 2;
      if(this.bar.widths > 350){
        if(this.counter > 215){
          this.reset();
          this.bar.hue = 0;
          this.bar.widths = 0;
          this.counter = 0;
          this.particles.splice(0, this.particles.length)
        } else{
          this.bar.hue = 126;
          this.bar.widths = 351;
          this.bar.draw();
        }
      } else{
        this.bar.draw();
        for(var i = 0; i < this.particle_no; i += 10){
          this.particles.push(new particle(this.ctx, this.bar));
        }
      }
      this.update();
    },
    update() {
      for(var i = 0; i < this.particles.length; i++){
        var p = this.particles[i];
        p.x -= p.vx;
        if (p.down === true) {
          p.g += .1;
          p.y += p.g;
        } else {
          if(p.g < 0){
            p.down = true;
            p.g += 0.1;
            p.y += p.g;
          } else{
            p.y -= p.g;
            p.g -= 0.1;
          }
        }
        p.draw();
      }
    },
    animloop() {
      this.draw();
      requestAnimationFrame(this.animloop);
    }
  },
}
</script>
<style lang="scss" scoped>
.canvas-process {
  #process {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>