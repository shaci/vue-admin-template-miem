<template>
  <div class="job-opening">
    <h3>Свободные вакансии в проекте</h3>
    <el-table class="job-opening__table"
      :data="projectData.job_openings">
      <!-- <el-table-column
        prop="role"
        label="Роль"
        :min-width="11"
        width="180"
        >
      </el-table-column> -->
      <!-- <el-table-column
        prop="amount"
        label="Кол-во"
        :min-width="11"> -->
        <el-table-column
          prop="role"
          label="Роль"
          :min-width="11"
          width="200"
          >
        </el-table-column>
        <el-table-column
          prop="amount"
          label="Кол-во"
          :min-width="6">
      </el-table-column>
      <el-table-column
        label="Изученные предварительно ключевые дисциплины"
        :min-width="28">
        <template slot-scope="scope">
          <pre>{{ scope.row.prev_disciplines.map( ($) => { return `- ${$}`}).join("\n") }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="Необходимые дополнительно для выполнения проекты дисциплины"
        :min-width="33">
        <template slot-scope="scope">
          <pre>{{ scope.row.disciplines.map( ($) => { return `- ${$}`}).join("\n") }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label=""
        :min-width="17">
        <template slot-scope="scope">
          <el-button type="primary"
            @click="handleAssign(scope.$index, scope.row)">Записаться</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'JobOpening',
  props: {
    projectData: {
      type: Object
    }
  },
  methods: {
    handleAssign(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss">
.job-opening {
  overflow: auto;
  pre {
    margin: 0;
    white-space: pre-wrap;

    // word-wrap: break-word;
  }
  h3 {
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    font-weight: 600;
    color: #303133;
    margin-bottom: 20px;
  }
  .job-opening__table {
      width: 100%;
      min-width: 900px;
      background: #FFFFFF;
      border: 1px solid #DFE0EB;
      // box-sizing: border-box;
      border-radius: 4px;

      table {
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */
        th {
          font-weight: 600;
          color: #606266;
          padding-top: 30px;
          padding-bottom: 30px; // на макете 9px
          border-bottom: 1px solid #E4E7ED;
        }
        td {
          font-weight: 500;
          color: #303133;
          padding-top: 21px;
          padding-bottom: 15px;
          border-bottom: 1px solid #E4E7ED;
        }

      }

      table th:first-child, table td:first-child {
        padding-left: 20px;//62px;
      }

      table td:last-child {
        text-align: center;
      }

    // table {
    //   background: #FFFFFF;
    //   border: 1px solid #DFE0EB;
    //   box-sizing: border-box;
    //   border-radius: 4px;
    // }
  }

}
</style>
