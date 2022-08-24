/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp 组件来自自定义：Loading.vue
 * @Date 2022-08-08 base-project
 */
import { createApp, reactive } from 'vue'
import myLoad from '../components/base/Loading.vue'

/**
 * 定义一个消息弹窗对象
 * （1）第一个属性：显示与否
 * （2）第二个属性：弹窗标题
 */
const msg = reactive({
  show: false,
  title: '拼命加载中...',
})

// 创建一个挂载的div节点对象
const $loading = createApp(myLoad, { msg }).mount(document.createElement('div'))

/**
 * 创建一个load对象
 * 包含两个方法：
 * （1）show方法：显示方法：显示加载loading的内容
 * （2）hide方法：隐藏方法：隐藏加载loading的内容
 */
const load = {
  show(title) {
    // 控制显示loading的方法
    msg.show = true
    msg.title = title
    document.body.appendChild($loading.$el)
  },
  hide() {
    // 控制loading隐藏的方法
    msg.show = false
  },
}
// 将结果对象导出
export { load }

/**
 * @Deprecated 以下导出弃用
 */
// export default {
//     install(app) {
//         // console.log(app);
//         // Vue.prototype.$http = axios
//         app.config.globalProperties.$loading = load
//     }
// }
