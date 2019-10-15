<template>
  <div class="statistic">
    <div class="statistic__number">
      {{ number }}
    </div>
    <div class="statistic__text">
      {{text}}
    </div>
    <div class="statistic__image" :style="{'background-image': 'url(' + require(`@/assets/views_images/st-project-view/components/statistic-item/${imageLink}`) + ')'}"></div>
  </div>
</template>

<script>

export default {
  name: 'StatisticItem',
  props: {
    number: {
      type: String,
      default: '0'
    },
    text: {
      type: String,
      default: 'Статистика'
    },
    imageLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.statistic {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 13px;
  padding-top: 14px;
  padding-bottom: 120px;
  .statistic__image {
    position: absolute;
    width: 80px;
    height: 80px;
    // background-color: red;
    left: 13px;
    bottom: 13px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   width: 72px;
  //   height: 72px;
  //   // background-color: red;
  //   left: 13px;
  //   bottom: 13px;
  //   background-image: url('~@/assets/views_images/st-project-view/components/workflow/trello.png');
  // }
}
.statistic__number {
  margin-bottom: 4px;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */
  font-weight: 600;
  color: #303133;
}
.statistic__text {
  // margin-bottom: 35px;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  font-weight: 500;
  color: #606266;
}
</style>
