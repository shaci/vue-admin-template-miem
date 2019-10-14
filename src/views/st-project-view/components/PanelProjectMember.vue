<template>
  <div>
    <article class="project-member" v-if="!densePanel" :class="{'project-member--consultant' : projectData.status == 'consultant'}">
      <template v-if="projectData.status != 'consultant'">
        <h2>{{projectData.status_text}}</h2>
        <div class="project-member__photo">
            <img :src="require(`@/assets/views_images/st-project-view/components/project-member/users/${projectData.image}`)"/>
            <!-- https://github.com/vuejs/Discussion/issues/202#issuecomment-355938213 -->
        </div>
        <p class="project-member__fio">
          {{projectData.last_name}} {{projectData.first_name}} {{projectData.middle_name}},<br> {{projectData.position}}
        </p>
        <div class="project-member__decor"></div>
        <p>
          <b>Телефон:</b><br>
          <template v-for="(value, index) in projectData.phone">
            {{value}}<br v-if="index != projectData.phone.length - 1">
          </template>
        </p>
        <p>
          <b>Электронная почта:</b><br>
          <template v-for="(value, index) in projectData.email">
            {{value}}<br v-if="index != projectData.phone.length - 1">
          </template>
        </p>
        <a :href="projectData.hse_link">Профиль на сайте ВШЭ</a>
      </template>
      <template v-else>
        <b>{{projectData.status_text}}</b><br>
        <p>{{projectData.last_name}} {{projectData.first_name}} {{projectData.middle_name}}</p>
      </template>
    </article>
    <article class="project-member-dense" v-if="densePanel">
      <div class="project-member-dense__general">
        <div class="project-member-dense__photo">
          <img :src="require(`@/assets/views_images/st-project-view/components/project-member/users/${projectData.image}`)"/>
        </div>
        <p class="project-member-dense__fio">{{projectData.last_name}} {{projectData.first_name}}</p>
        <p class="lighter">
          {{projectData.status_text}}<br>
          {{projectData.group}}
        </p>
      </div>
      <div class="project-member-dense__contacts">
        <p class="project-member-dense__phone">
          <b>Телефон:</b><br>
          <template v-for="(value, index) in projectData.phone">
            {{value}}<br v-if="index != projectData.phone.length - 1">
          </template>
        </p>
        <p>
          <b>Электронная почта:</b><br>
          <template v-for="(value, index) in projectData.email">
            {{value}}<br v-if="index != projectData.phone.length - 1">
          </template>
        </p>
      </div>
    </article>
</div>
</template>

<script>

export default {
  name: 'PanelProjectMember',
  props: {
    projectData: {
      type: Object
    },
    densePanel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.project-member-dense {
  display: flex;
  padding: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #DFE0EB;
  border-right: 1px solid #DFE0EB;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.055em;
  font-weight: 500;
  b {
    font-weight: 600;
  }
  .lighter {
    color: #797F93;
  }
  div {
    width: 50%;
    position: relative;
  }
  .project-member-dense__general {
    padding-left: 100px;
    min-height: 80px;
  }
  .project-member-dense__phone {
    margin-bottom:5px;
  }
  .project-member-dense__photo {
    position: absolute;
    width: 80px;
    height: 80px;
    left: 0px;
    top: 0px;
    background-color: #E2DDDD;
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Centering y-axis */
    align-items :center; /* Centering x-axis */
    overflow: hidden;
    border-radius: 50%;
  }
  .project-member-dense__fio {
    font-weight: 600;
    margin-bottom: 5px;
  }
}

.project-member {
  // height: 500px;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.055em;
  font-weight: 500;

  border-radius: 5px;

  background-color: #ffffff;
  margin-bottom: 30px;
  padding-top: 30px;
  padding-bottom: 38px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  &.project-member--consultant {
    box-shadow: none;
    background-color: transparent;
    padding: 0;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    letter-spacing: 0.055em;
    color: #606266;
    font-weight: 600;
    text-transform: uppercase;
  }

  .project-member__photo {
    width: 106px;
    height: 106px;
    background-color: #E2DDDD;//#ffffff;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 19px auto;
    // для изображения
    display: flex;
    flex-direction: column;
    justify-content: center;  /* Centering y-axis */
    align-items :center; /* Centering x-axis */
  }

  .project-member__fio {
    margin-bottom: 15.5px;
  }

  .project-member__decor {
    height: 1px;
    width: 60%;
    margin: 0 auto;
    background-color: #E4E7ED;
    margin-bottom: 15.5px;
  }
  p {
    margin-bottom: 10px;
    b {
      font-weight: 600;
    }
  }
  a {
    font-weight: 600;
    color: #0486FE;
    text-decoration: underline;
  }
}
</style>
