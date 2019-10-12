<template>
  <div class="project-view">
    <div class="project-view__text">view project</div>
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
    min-height: 2696px; // temp
    background-image: url('~@/assets/views/st-project-view/bg.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
  }

  @media (min-width: 1440px) { // 1440px - ширина фона + 54px - ширина sidebar
    .project-view {
      // background-size: cover;
    }
  }
</style>
