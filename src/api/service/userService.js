/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */

import request from '../request'

/**
 * 获得用户最近的刷题记录
 * @param {用户标记} paramMap
 */
function getLeetcodeUserRecentlyExercisesInfo(paramMap) {
  var promiseData = request.get('/leetcodeinfo/recentlyExercisesInfo', paramMap)
  console.log(promiseData)
  return promiseData
}

/**
 * 导出service方法
 */
export default { getLeetcodeUserRecentlyExercisesInfo }
