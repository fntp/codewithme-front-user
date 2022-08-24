/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */

/**
 * 获得本地存储的content的方法
 * @param {关键key} keywords 传入的关键key
 * @returns 返回一个JSON化后的对象
 */
function getStore(keywords) {
  if (keywords) {
    return localStorage.getItem(keywords)
  }
  return null
}

/**
 * localStorage本身就是一个本地内存存储器
 * 存储的时候运行时可以直接从内存去取
 * 关闭浏览器后会持久化到本地存储
 * 存储对象方法
 * @param {关键key} keyword
 * @param {关键内容} content
 */
function setStore(keyword, content) {
  if (!keyword) return
  localStorage.setItem(keyword, JSON.stringify(content))
}

/**
 * 删除对象方法
 * @param {关键key} keyword
 */
function removeStore(keyword) {
  if (!keyword) return
  localStorage.removeItem(keyword)
}

/**
 * 此处需要注意，如果想使用上面定义的方法，就需要将这些方法通过export导出，这样在别的view中导入的时候就能识别得到这个js中定义的内容
 */
export {
  /**
   * set方法，可以等同于set+update方法，设置本地localStorage的存储内容
   */
  setStore,
  /**
   * get方法，获取本地localStorage的存储内容
   */
  getStore,
  /**
   * 删除方法，删除本地localStorage的存储内容
   */
  removeStore,
}
