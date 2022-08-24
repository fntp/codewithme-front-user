/** @format */

import en from './en'
import zh from './zh'
import { createI18n } from 'vue-i18n'

export function installI18n(app) {
  // 国际化配置
  const messages = {
    en,
    zh,
  }
  const i18n = createI18n({
    fallbackLocale: 'zh',
    globalInjection: true,
    legacy: false,
    locale: process.env.VUE_APP_LOCALE,
    messages,
  })
  app.use(i18n)
}
