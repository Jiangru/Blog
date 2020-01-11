// 公用方法
/**
 * @description 节流函数
 * @param fn 需要节流的方法
 * @param delay 多久执行一次
 */
export const throttle = (fn, delay = 300) => {
  let prev = Date.now()
  return function() {
    const that = this
    const args = arguments
    const now = Date.now()
    if (now - prev >= delay) {
      fn.apply(that, args)
      prev = Date.now()
    }
  }
}

/**
 * @description 防抖函数
 * @param fn 需要防抖的方法
 * @param delay 多少时间内只能执行一次
 */
export const debounce = (fn, delay = 300) => {
  let timer = null;
  return function() {
    const that = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(that, args)
    }, delay)
  }
}

export default {
  throttle,
  debounce
}