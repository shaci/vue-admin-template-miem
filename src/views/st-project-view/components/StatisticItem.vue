<template>
  <div class="statistic">
    {{ number }} {{text}} {{imageLink}}
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

}
</style>
