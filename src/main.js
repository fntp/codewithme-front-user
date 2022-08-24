/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios封装
import { installPlugins } from '../src/plugins'
// 创建Vue应用-Application
const app = createApp(App).use(store).use(router)
// 安装插件，这样以后所有需要全局引入的组件和文件，我们只需要在plugins/index.js中引入就可以了
installPlugins(app)
// 最后挂载在App节点上
app.mount('#app')
// 挂载注意事项：一下配置来自HttpRequest.js中封装的Axios
