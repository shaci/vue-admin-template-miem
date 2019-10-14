<template>
  <div class="job-opening">
    <h3>Свободные вакансии в проекте</h3>
    <el-table
      :data="projectData.job_openings"
      style="width: 100%">
      <el-table-column
        prop="role"
        label="Роль"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Кол-во"
        width="180">
      </el-table-column>
      <el-table-column label="Изученные предварительно ключевые дисциплины">
        <template slot-scope="scope">
          <pre>{{ scope.row.prev_disciplines.map( ($) => { return `- ${$}`}).join("\n") }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="Необходимые дополнительно для выполнения проекты дисциплины">
        <template slot-scope="scope">
          <pre>{{ scope.row.disciplines.map( ($) => { return `- ${$}`}).join("\n") }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="">
        <template slot-scope="scope">
          <el-button
            size="mini"
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

<style lang="scss" scoped>
.job-opening {
  h3 {
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    font-weight: 600;
    color: #303133;
  }
}
</style>
