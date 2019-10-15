<template>
  <div class="workflow">
    <div class="workflow__row workflow__row--header">
      <div class="workflow__column">
        <div class="workflow__image workflow__image--trello"></div>
        <h2>Trello</h2>
        <a>https://trello.com/b/UrvrCe4N/19112...</a>
      </div>
      <div class="workflow__column">
        <div class="workflow__image workflow__image--gitlab"></div>
        <h2>Gitlab</h2>
        <A>https://docs.gitlab.com/ee/user/operati...</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Workflow'
}
</script>

<style lang="scss" scoped>
.workflow {
  background-color: #FFFFFF;
  // box-sizing: border-box;
  // border-radius: 4px 0px 0px 4px;
  .workflow__row {
    display: flex;
  }
  .workflow__column {
    width: 50%;
    padding-left: 10px;
    padding-top: 17px;
    padding-bottom: 17px;
    border-top: 1px solid #DFE0EB;
    border-left: 1px solid #DFE0EB;
  }
  .workflow__image {
    width: 52px;
    height: 52px;
    background-repeat: no-repeat;
    background-position: center center;
    flex-shrink: 0;
  }
  .workflow__image--trello {
    background-image: url('~@/assets/views_images/st-project-view/components/workflow/trello.png');
  }
  .workflow__image--gitlab {
    background-image: url('~@/assets/views_images/st-project-view/components/workflow/gitlab.png');
  }
  .workflow__row--header {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
    h2 {
      margin-left: 20px;
    }
    a {
      margin-left: 50px;
      color: #0486FE;
    }
    .workflow__column {
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; // на всякий случа
      a { // https://css-tricks.com/flexbox-truncated-text/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; // на всякий случай
      }
    }
  }
  // padding-left: 10px;
  // padding-top: 17px;

}
</style>
