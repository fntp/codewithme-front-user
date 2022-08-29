<!-- 
/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */
 -->
 <template>
    <div id="App">
      <div class="affix-container">
        <el-affix target=".affix-container" :offset="20">
          <el-col :span="8">
            <el-card class="header-navigation" shadow="hover">
              <el-image class="header-navigation-logo" :src="imageUrl"/>
              <div class="header-navigation-menuHeader">
                 <div v-for="number in 4" :key="number" class="text item">{{ '题库'}}</div>
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
      props: {
        msg: String,
      },
      setup() {
        const imageUrl = 'https://sinsyedu.oss-cn-hangzhou.aliyuncs.com/img/logo.png';
        return {imageUrl}
      },
    }
  </script>
  
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
  </style>