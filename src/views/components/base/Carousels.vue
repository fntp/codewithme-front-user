<!-- 
/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-09-07 base-project
 */
 -->
<template>
  <div class="index-carousels">
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
            <el-image :src="imageUrl" />
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:"Carousels",
    setup() {
        const imageUrl = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        return {imageUrl}
    },
}
</script>

<style lang="scss" scoped>
    // 设置宽度高度
    .el-carousel__item{
        width: 100%;
    }
    .el-carousel__item h3 {
      display: flex;
      color: #475669;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
</style>