/** @format */

import ElementPlus from 'element-plus'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as icons from '@element-plus/icons-vue'

/**
 * @author fntp
 * @time 2022-08-10 CodeWithMe
 * 安装插件集结地
 * 所有插件都在这里进行安装后的统一配置
 * 本项目脚手架使用Vue3-cli搭建，Vue-cli5版本
 * 使用npm管理项目整体依赖
 * npm导入依赖包后需要在这里进行配置才能使用全局的依赖
 * 这样一来，后续
 * 需要全局引入的组件和文件，我们只需要在plugins/index.js中引入就可以了
 * 本项目引入了代码风格检查，不需要可以自行删除，建议保留约束代码规范
 * @param {*} app vue实例
 */
export function installPlugins(app) {
  // 安装element-ui
  app.use(ElementPlus, {
    locale: zhLocale,
    size: 'small',
  })
  // 安装图标库
  for (var icon in icons) {
    app.component(icon, icons[icon])
  }
}
