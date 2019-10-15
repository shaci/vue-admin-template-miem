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
    <div class="workflow__row">
      <div class="workflow__column workflow__column--dense">
        Последние обновления
      </div>
      <div class="workflow__column workflow__column--dense">
        Последние обновления
      </div>
    </div>
    <div class="workflow__row workflow__row--body" v-for="index in minLength" :key="index">
      <div class="workflow__column" :class="{'workflow__column--notop' : index == 1}">
        <span class="workflow__column__text">
          {{projectData.workflow.trello[index-1].text}}
        </span>
        <span class="workflow__column__time">
          {{projectData.workflow.trello[index-1].time}}
        </span>
      </div>
      <div class="workflow__column" :class="{'workflow__column--notop' : index == 1}">
        <span class="workflow__column__user">
          {{projectData.workflow.gitlab[index-1].user}}
        </span>
        <span class="workflow__column__text">
          {{projectData.workflow.gitlab[index-1].text}}
        </span>
        <span class="workflow__column__time">
          {{projectData.workflow.gitlab[index-1].time}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Workflow',
  props: {
    projectData: {
      type: Object
    }
  },
  created() {
    console.log('sss')
    console.log(this.projectData)
  },
  computed: {
    maxLength() {
      if (this.projectData.workflow && this.projectData.workflow.trello && this.projectData.workflow.gitlab) {
        const trelloLength = this.projectData.workflow.trello.length
        const gitlabLength = this.projectData.workflow.gitlab.length
        const res = trelloLength > gitlabLength ? trelloLength : gitlabLength
        return res
      }
      return 0
    },
    // пока тупо такую заглушку сделаем
    minLength() {
      if (this.projectData.workflow && this.projectData.workflow.trello && this.projectData.workflow.gitlab) {
        const trelloLength = this.projectData.workflow.trello.length
        const gitlabLength = this.projectData.workflow.gitlab.length
        const res = trelloLength > gitlabLength ? gitlabLength : trelloLength
        return res
      }
      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.workflow {
  background-color: #FFFFFF;
  border-bottom: 1px solid #DFE0EB;
  border-right: 1px solid #DFE0EB;
  // box-sizing: border-box;
  // border-radius: 4px 0px 0px 4px;
  .workflow__row {
    display: flex;
  }
  .workflow__column {
    display: flex;
    width: 50%;
    padding-left: 10px;
    padding-top: 17px;
    padding-bottom: 17px;
    border-top: 1px solid #DFE0EB;
    border-left: 1px solid #DFE0EB;
  }
  .workflow__column--notop {
    border-top: none;
  }
  .workflow__column--dense {
    padding-top: 0px;
    padding-bottom: 0px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    color: #797F93;
    border-top: none;
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
  .workflow__row--body {
    .workflow__column {
      padding-top: 15px;
      padding-bottom: 15px;
      flex-wrap: wrap;
    }
  }
  .workflow__column__text, .workflow__column__user {
    font-size: 15px;
    line-height: 18px;
    color: #303133;
    font-weight: 500;
  }
  .workflow__column__text {
    margin-bottom: 6px;
  }
  .workflow__column__user {
    width: 100%;
  }
  .workflow__column__time {
    margin-top: auto;//6px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
    color: #797F93;
    width: 100%;
  }

  .workflow__row--body:first-child {
    .workflow__column {
      border-top: none;
    }
  }
  // padding-left: 10px;
  // padding-top: 17px;

}
</style>
