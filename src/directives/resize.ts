import type { DirectiveBinding } from 'vue'
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value: clientArr = [1920, 954] } = binding
    const [Width, Height] = clientArr
    let time = 0
    const debounce = () => {
      const innerWidth = window.innerWidth / Width
      const innerHeight = window.innerHeight / Height
      const scale = innerWidth > innerHeight ? innerHeight : innerWidth
      el.style.transform = `scale(${scale})  translate(-50%, -50%)`
    }
    window.onresize = () => {
      if (time) clearTimeout(time)
      time = setTimeout(() => {
        debounce()
        clearTimeout(time)
      }, 300)
    }

    debounce()
  }
}