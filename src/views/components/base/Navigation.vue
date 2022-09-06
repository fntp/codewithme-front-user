<!-- 
/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */
 -->
 <template>
    <div>
      <div class="affix-container">
        <el-affix target=".affix-container" :offset="20">
          <el-col :span="8">
            <el-card class="header-navigation" shadow="hover">
              <el-image class="header-navigation-logo" :src="imageUrl"/>
              <div class="header-navigation-menuHeader">
                 <div v-for="number in 4" :key="number" class="text item">{{ '题库'}}</div>
              </div>
              <div class="header-navigation-search">
                <el-input v-model="input2" class="searchInput" placeholder="Please Input" />
              </div>
              <div class="header-navigation-icon-message">
                <el-icon class="icon-message" :size="30">
                  <Message />
                </el-icon>
              </div>
              <div class="header-navigation-icon-avatar">
                <el-avatar :size="45" src="https://empty" @error="errorHandler">
                  <img
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  />
                </el-avatar>
              </div>
            </el-card>
          </el-col>
        </el-affix>
      </div>
    </div>      
  </template>
  
  <script>
    export default {
      name: 'Navigation',
      // 定义组件内部属性参数
      props: {
        imageUrl: {
          type: String,
          default: "https://sinsyedu.oss-cn-hangzhou.aliyuncs.com/img/logo.png",
          required: false
        },
        searchText: {
          type: String,
          default: "",
          required: false
        }
      },
      setup(props) {
        const imageUrl = "https://sinsyedu.oss-cn-hangzhou.aliyuncs.com/img/logo.png"
        const searchText = ""
        return {imageUrl,searchText}
      },
    }
  </script>
  
  <!-- 组件定制化样式 -->
  <style lang="scss" scoped>
    .affix-container {
      height: 1440px;
      border-radius: 4px;
      /* background: var(--el-color-primary-light-9); */
      display:flex;
      justify-content:center;
    }
    .header-navigation{
      width: 1000pt;
      height: 60pt;
      border-radius: 15px;
      margin: 0 auto;
      position: relative;
    }
    ::v-deep .header-navigation-logo{
      height: 80pt;
      width: 250pt;
      margin-top: -30px;
      padding: 0%;
    }
  
    /**
     * 菜单文字样式
     */
    .text {
      font-size: 21px;
      font-family: 'Source Han Sans CN-Regular';
      color: #9E9E9E;
    }
    .item {
      width: 50px;
      height: 40px;
      margin-left: 50px;
      display:inline;
    }
    .header-navigation-menuHeader{
      margin-top: -70px;
      margin-left: 300pt;
    }
    .header-navigation-search{
      position: absolute;
      right: 178px;
      top: 25px;
    }
    .searchInput{
      height: 35px;
      width: 220px;
      border-radius: 8px;
    }
    .header-navigation-icon-message{
      position: absolute;
      right: 118px;
      top: 27px;
    }
    .header-navigation-icon-avatar{
      position: absolute;
      right: 48px;
      top: 20px;
    }
  </style>