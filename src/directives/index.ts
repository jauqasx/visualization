import resize from "./resize";
import type { App } from 'vue'
const directive = {
  resize
}
type T = keyof typeof directive;
export default {
  install(app: App<Element>) {
    Object.keys(directive).forEach((key: string) => {
      app.directive(key, directive[key as T])
    })
  }
}