<template>
  <div class="project-view">
    <el-row class="project-view__title">
      <el-col :offset="2" :span="11" :xs="11" :sm="11" :lg="11">
        <p>Проект #208, практико-ориентированный</p>
        <h1>Компактный квантовый генератор случайных чисел<br>Compact Quantum Random Number Generator</h1>
      </el-col>
    </el-row>
    <el-row class="project-view__general-info">
      <el-col :offset="2" :span="13" :xs="13" :sm="13" :lg="13">
        <h2>
          Общая информация о проекте
        </h2>
      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :offset="2" :span="14" :xs="14" :sm="14" :lg="14">
        <div class="general-information">
          <h3>Цель проекта</h3>
          <p>Разработать прототип квантового генератора случайных чисел на основе спонтанной эмиссии лазера, обусловленной случайными фазовыми флуктуациями</p>
          <h3>Краткая аннотация проекта (общая информация о проекте)</h3>
          <p>На основе фотонной интегральной схемы разработать источник случайных чисел, работающий на принципе флуктуации фазы оптического излучения лазера. Такие флуктуации обусловлены тем, что в лазерах, кроме стимулированных, проходят и спонтанные процессы. Таким образом, генерируемое оптическое поле включает спонтанные флуктуации фазы. Излучение подается на планарную оптическую схему, состоящую из трёх интерферометров Маха-Цендера. В то время как два крайних интерферометра служат перестраиваемыми делителями луча, необходимыми для настройки всей схемы, центральный несбалансированный интерферометр переводит флуктуации фазы во флуктуации интенсивности излучения. Последние регистрируются фотоприемником, который, в свою очередь, преобразует флуктуации интенсивности во флуктуации тока. Далее, значения тока оцифровываются при помощи АЦП для использования генерации случайных битов.</p>
          <h3>Ожидаемые результаты</h3>
          <h4>Проектные: </h4>
          <ul>
            <li>Прототип квантового генератора случайных чисел</li>
          </ul>
          <h4>Образовательные (в увязке с требованиями ОС НИУ ВШЭ):</h4>
          <ul>
            <li>Развитие знаний, умений и навыков, связанных с применением профессиональных инструментов.</li>
            <li>Развитие способности применения профессиональных инструментов для решения проблем в профессиональной деятельности.</li>
            <li>Развитие способности оценки потребности в ресурсах и планирование их использования при решении задач в профессиональной деятельности</li>
            <li>Развитие способности работы с информацией из различных источников для решения профессиональных задач, в том числе отбора и анализа информации для решения других проектных задач</li>
            <li>Развитие способности работать в команде, в том числе принятия командных ролей и ответственности за результаты коллективного труда</li>
            <li>Развитие способности выполнения экспериментальных исследований объектов профессиональной деятельности в области ИКТСС по заданным методикам и обработки результатов исследований с применением современных информационных технологий и технических средств.</li>
            <li>Развитие способности ответственно принимать решения в нестандартных ситуациях профессиональной деятельности, проявлять творческий подход и инициативу.</li>
          </ul>
          <h3>Карта компетенции</h3>
          <p>
            ИКТСС: УК-1 - СК-Б1; УК-3 - СК-Б4; УК-4 - СК-Б5; УК-5 - СК-Б6; УК-7 - СК-Б8; ПК-2 - ИК-Б1.1_5.2.НИД_7.2.(ИКТСС); ПК-7 - ИК-Б1.1_4.1_4.3_4.6.ПД8_АД (ИКТСС); ПК-18 - СЛК–Б7; ПК-23 - СЛК–Б4; ПК-24 - СЛК–Б3 ИнжЭ: СК-1 - СК-М1; СК-5 - СК-М5; СК-6 - СК-М6; ПК5, ПК6, ПК9, ПК12, ПК13, ПК18, ПК19
          </p>
          <h3>Ресурсное обеспечение</h3>
          <p>
            Необходимые ресурсы для реализации проекта (материалы, доступ к лабораториям, оборудование, внешние консультации и т.д.): Оборудование Базовой кафедры квантовой оптики и телекоммуникаций, расходные материалы
          </p>
          <h3>Форма и способы промежуточного контроля</h3>
          <p>
            Определяется проектной документацией.
          </p>
          <h3>Форма представления результатов</h3>
          <p>
            Определяется проектной документацией. На завершающей стадии проекта предусмотрена презентация результатов проекта.
          </p>
        </div>
      </el-col>
      <el-col :offset="1" :span="5" :xs="5" :sm="5" :lg="5">
        <article class="project-member">
          <h2>Руководитель направления</h2>
          <div class="project-member__photo">
              <img src="@/assets/views/st-project-view/components/project-member/users/9/user9.jpg" />
          </div>
          <p class="project-member__fio">
            Гольцман Григорий Наумович,<br> профессор ДЭИ
          </p>
          <div class="project-member__decor"></div>
          <p>
            <b>Телефон:</b><br>
            +7 (499) 246-1202<br>
            +7 (495) 772-9590
          </p>
          <p>
            <b>Электронная почта:</b><br> ggoltsman@hse.ru
          </p>
          <a href="http://google.com">Профиль на сайте ВШЭ</a>
        </article>
        <article class="project-member">
          <h2>Руководитель проекта</h2>
          <div class="project-member__photo">
            <img src="@/assets/views/st-project-view/components/project-member/users/10/user10.jpg" />
          </div>
          <p class="project-member__fio">
            Грачев Николай Николаевич,<br> профессор ДЭИ
          </p>
          <div class="project-member__decor"></div>
          <p>
            <b>Телефон:</b><br>
            +7 (499) 246-1202<br>
            +7 (495) 772-9590
          </p>
          <p>
            <b>Электронная почта:</b><br> ngrachev@hse.ru
          </p>
          <a href="http://google.com">Профиль на сайте ВШЭ</a>
        </article>
      </el-col>
    </el-row> -->
    <el-row class="project-view__description">
      <el-col :offset="2" :span="14" :xs="14" :sm="14" :lg="14">
        <panel-general-information :project-data="project" />
      </el-col>
      <el-col :offset="1" :span="5" :xs="5" :sm="5" :lg="5">
        <template v-for="(value) in project.project_leaders">
            <panel-project-member :project-data="value" />
        </template>
      </el-col>
    </el-row>
    <el-row class="project-view__general-info project-view__general-info--inproject">
      <el-col :offset="2" :span="13" :xs="13" :sm="13" :lg="13">
        <h2>
          Работа в проекте
        </h2>
      </el-col>
    </el-row>
    <el-row class="project-view__job-opening">
      <el-col :offset="2" :span="20" :xs="20" :sm="20" :lg="20">
        <job-opening :project-data="project" />
      </el-col>
    </el-row>
    <el-row class="project-view__members">
      <el-col :offset="2" :span="13" :xs="13" :sm="13" :lg="13">
        <h3>
          Студенты, записанные в проект
        </h3>
      </el-col>
    </el-row>
    <!-- <el-row type="flex">
      <template v-for="(value, index) in filteredMembers">
        <el-col class="project-view__members-cell" v-if="index % 2" :span="10" :xs="10" :sm="10" :lg="10">
          <panel-project-member dense-panel :project-data="value" />
        </el-col>
        <el-col class="project-view__members-cell" v-else :offset="2" :span="10" :xs="10" :sm="10" :lg="10">
          <panel-project-member dense-panel :project-data="value" />
        </el-col>
      </template>
    </el-row> -->
    <el-row type="flex" v-for="(value, index) in filteredMembersMultiple">
      <template v-for="(value, index) in value">
        <el-col class="project-view__members-cell" v-if="index % 2" :span="10" :xs="10" :sm="10" :lg="10">
          <panel-project-member dense-panel :project-data="value" />
        </el-col>
        <el-col class="project-view__members-cell" v-else :offset="2" :span="10" :xs="10" :sm="10" :lg="10">
          <panel-project-member dense-panel :project-data="value" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PanelProjectMember from './components/PanelProjectMember'
import PanelGeneralInformation from './components/PanelGeneralInformation'

import JobOpening from './components/JobOpening'

import { getProjectData } from '@/api/project'

export default {
  name: 'ProjectView',
  components: {
    PanelProjectMember,
    PanelGeneralInformation,
    JobOpening
  },
  data() {
    return {
      project: {},
      listLoading: true,
    }
  },
  created() {
    this.filteredMembers = []
    this.filteredMembersMultiple = []
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProjectData().then(response => {
        this.project = response.data
        this.listLoading = false

        this.filterProjectMembers(response.data.project_members)
        // console.log(this.project)
      })
    },
    filterProjectMembers(project_members) {
      const statuses = ['direction_head', 'project_head', 'consultant']
      this.filteredMembers = project_members.filter( ($) => {
        if (statuses.indexOf($.status) === -1) {
          return true
        }
        return false
      })
      let tmpArray = []
      this.filteredMembers.forEach((value, index) => {
        tmpArray.push(value)
        if ((index % 2) || (index === this.filteredMembers.length - 1)) {
          this.filteredMembersMultiple.push(tmpArray)
          tmpArray = []
        }
        // console.log(">>>>>>>>>")
        // console.log(value)
        // console.log(index)
        // console.log(">>>>>>>>>")
      })
      console.log(this.filteredMembers)
      console.log(this.filteredMembersMultiple)
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-view {
    // общие стили для h1, h2, h3
    h2 {
      font-size: 19px;
      line-height: 23px;
      font-weight: 600;
    }
    h3 {
      font-size: 15px;
      line-height: 18px;
      font-weight: 600;
      color: #303133;
    }
    background-color: #f5f7fa;// #ecf2fa;
    min-height: 2696px; // temp
    background-image: url('~@/assets/views_images/st-project-view/bg.png');
    background-repeat: no-repeat;
    background-position: center top;
    // background-size: 100%;
    .project-view__title {
      margin-bottom: 51px;
      padding-top: 58px;
      color: #ffffff;
      font-weight: 600; // semibold
      p {
        font-size: 19px;
        line-height: 23px;
        margin-bottom: 7px;
      }
      h1 {
        font-size: 26px;
        line-height: 31px;
      }
    }
    .project-view__general-info {
      margin-bottom: 30px;
      h2 {
        color: #ffffff;
        padding-bottom: 12px;
        border-bottom: 1px solid #E4E7ED;
      }
      &.project-view__general-info--inproject {
        h2 {
          color: #303133;
        }
      }
    }
    .project-view__description, .project-view__job-opening {
        margin-bottom: 45px;
    }
    .project-view__members {
      margin-bottom: 20px;
    }
    .project-view__members-cell {
      display: flex;
    }
  }

  // .general-information {
  //   background-color: #ffffff;
  //   border-radius: 25px;
  //   padding-left: 30px;
  //   padding-top: 30px;
  //   padding-bottom: 5px;
  //
  //   padding-right: 40px;
  //   // продублируем, вдруг захотим в отдельный компонент вынести
  //   h3 {
  //     font-size: 15px;
  //     line-height: 18px;
  //     font-weight: 600;
  //     margin-bottom: 10px;
  //   }
  //   h4 {
  //     font-size: 15px;
  //     line-height: 22px;
  //     font-weight: 600;
  //   }
  //   p, ul {
  //     font-size: 15px;
  //     line-height: 22px;
  //     font-weight: 500;
  //     color: #303133;
  //   }
  //   p {
  //     margin-bottom: 30px;
  //   }
  //   ul {
  //     margin: 0;
  //     padding-left: 15px;
  //     list-style: none;
  //     margin-bottom: 15px;
  //   }
  //   ul:last-of-type {
  //     margin-bottom: 30px;
  //   }
  //   ul li::before {
  //     content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  //     color: #4066FF; /* Change the color */
  //     font-weight: bold; /* If you want it to be bold */
  //     display: inline-block; /* Needed to add space between the bullet and the text */
  //     width: 1em; /* Also needed for space (tweak if needed) */
  //     margin-left: -1em; /* Also needed for space (tweak if needed) */
  //   }
  //
  // }

  // .project-member {
  //   // height: 500px;
  //   font-size: 15px;
  //   line-height: 18px;
  //   letter-spacing: 0.055em;
  //   font-weight: 500;
  //
  //   background-color: #ffffff;
  //   margin-bottom: 30px;
  //   padding-top: 30px;
  //   padding-bottom: 38px;
  //   text-align: center;
  //   h2 {
  //     margin-bottom: 20px;
  //     font-size: 15px;
  //     line-height: 18px;
  //     /* identical to box height */
  //     letter-spacing: 0.055em;
  //     color: #606266;
  //     font-weight: 600;
  //     text-transform: uppercase;
  //   }
  //
  //   .project-member__photo {
  //     width: 106px;
  //     height: 106px;
  //     background-color: #ffffff;
  //     overflow: hidden;
  //     border-radius: 50%;
  //     margin: 0 auto 19px auto;
  //     // для изображения
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;  /* Centering y-axis */
  //     align-items :center; /* Centering x-axis */
  //   }
  //
  //   .project-member__fio {
  //     margin-bottom: 15.5px;
  //   }
  //
  //   .project-member__decor {
  //     height: 1px;
  //     width: 60%;
  //     margin: 0 auto;
  //     background-color: #E4E7ED;
  //     margin-bottom: 15.5px;
  //   }
  //   p {
  //     margin-bottom: 10px;
  //     b {
  //       font-weight: 600;
  //     }
  //   }
  //   a {
  //     font-weight: 600;
  //     color: #0486FE;
  //     text-decoration: underline;
  //   }
  // }

  @media (min-width: 1494px) { // 1440px - ширина фона + 54px - ширина sidebar
    .project-view {
      background-size: 100%;
      // background-size: cover;
    }
  }
</style>
