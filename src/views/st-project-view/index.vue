<template>
  <div class="project-view">
    <el-row class="project-view__title">
      <el-col :offset="2" :span="11" :xs="11" :sm="11" :lg="11">
        test test
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectView',
}
</script>

<style lang="scss" scoped>
  .project-view {
    background-color: #f5f7fa;// #ecf2fa;
    min-height: 12696px; // temp
    background-image: url('~@/assets/views/st-project-view/bg.png');
    background-repeat: no-repeat;
    background-position: center top;
    // background-size: 100%;
  }

  @media (min-width: 1494px) { // 1440px - ширина фона + 54px - ширина sidebar
    .project-view {
      background-size: 100%;
      // background-size: cover;
    }
  }
</style>
