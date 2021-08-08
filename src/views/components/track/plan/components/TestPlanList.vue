<template>
  <el-card class="table-card">
    <template v-slot:header>
      <ms-table-header @search="initTableData" @create="testPlanCreate"
                       create-tip="创建测试计划" :condition.sync="condition"/>
    </template>
    <el-table
      border
      class="adjust-table"
      :data="tableData"
      >
      <el-table-column
        prop = "id"
        label="ID"
      >
      </el-table-column>
      <el-table-column
        prop = "name"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop = "stage"
        label="迭代"
      >
      </el-table-column>
      <el-table-column
        prop = "executor"
        label="执行人"
      >
      </el-table-column>
      <el-table-column
        prop = "create_at"
        label="时间"
      >
      </el-table-column>
      <el-table-column
        prop = "progress"
        label="测试进度"
      >
      </el-table-column>
      <el-table-column
        min-width="180"
        label="操作">
        <template v-slot:default="scope">
          <div>

            <ms-table-operator :edit-permission="['PROJECT_TRACK_REVIEW:READ+EDIT']"
                               :delete-permission="['PROJECT_TRACK_REVIEW:READ+DELETE']"
                               @editClick="handleEdit(scope.row)"
                               @deleteClick="handleDelete(scope.row)">
            </ms-table-operator>
          </div>

        </template>
      </el-table-column>

    </el-table>
    <ms-table-pagination :change="initTableData" :current-page.sync="currentPage" :page-size.sync="pageSize"
                         :total="total"/>
  </el-card>
</template>

<script>
import MsCreateBox from '../../../settings/CreateBox';
import MsTablePagination from '../../../../components/common/pagination/TablePagination';
import MsTableHeader from "../../../common/components/MsTableHeader";
import MsDialogFooter from "../../../common/components/MsDialogFooter";
import MsTableOperatorButton from "../../../common/components/MsTableOperatorButton";
import MsTableOperator from "../../../common/components/MsTableOperator";
import PlanStatusTableItem from "../../common/tableItems/plan/PlanStatusTableItem";
import PlanStageTableItem from "../../common/tableItems/plan/PlanStageTableItem";
import TestReportTemplateList from "../view/comonents/TestReportTemplateList";
import TestCaseReportView from "../view/comonents/report/TestCaseReportView";
import MsDeleteConfirm from "../../../common/components/MsDeleteConfirm";
import {TEST_PLAN_CONFIGS} from "../../../common/components/search/search-components";
import {
  _filter,
  _sort,
  deepClone,
  getLabel,
  getLastTableSortField,
  saveLastTableSortField
} from "@/common/js/tableUtils";
import {TEST_PLAN_LIST} from "@/common/js/constants";
import {Test_Plan_List} from "@/views/components/common/model/JsonData";
import HeaderCustom from "@/views/components/common/head/HeaderCustom";
import HeaderLabelOperate from "@/views/components/common/head/HeaderLabelOperate";
import MsTag from "@/views/components/common/components/MsTag";
import MsTestPlanScheduleMaintain from "@/views/components/track/plan/components/ScheduleMaintain";
import {getCurrentProjectID, hasPermission} from "@/common/js/utils";

export default {
  name: "TestPlanList",
  components: {
    MsTag,
    HeaderLabelOperate,
    HeaderCustom,
    MsDeleteConfirm,
    TestCaseReportView,
    TestReportTemplateList,
    PlanStageTableItem,
    PlanStatusTableItem,
    MsTestPlanScheduleMaintain,
    MsTableOperator, MsTableOperatorButton, MsDialogFooter, MsTableHeader, MsCreateBox, MsTablePagination
  },
  data() {
    return {
      tableData:[
        {
          id:1,
          name:'测试1',
          stage:'执行开发',
          executor:'甘子1',
          create_at:'2021-08-08 00:00:00',
          progress:100,
        },
        {
          id:2,
          name:'测试2',
          stage:'执行开发',
          executor:'甘子2',
          create_at:'2021-08-08 00:00:00',
          progress:100,
        },

        {
          id:3,
          name:'测试3',
          stage:'执行开发',
          executor:'甘子3',
          create_at:'2021-08-08 00:00:00',
          progress:100,
        },

        {
          id:4,
          name:'测试4',
          stage:'执行开发',
          executor:'甘子4',
          create_at:'2021-08-08 00:00:00',
          progress:100,
        },
        {
          id:5,
          name:'测试5',
          stage:'执行开发',
          executor:'甘子5',
          create_at:'2021-08-08 00:00:00',
          progress:100,
        },

      ],
      condition: {},
      currentPage: 1,
      pageSize: 10,
      total: 20,
    };
  },
  methods:{
    testPlanCreate() {
      alert('创建');
    },
    initTableData(){
      return [
        {
          stage:2,
        },
        {
          stage:3,
        }
      ]
    },
    customHeader() {
      return;
    },
    handleEdit(testPlan) {
      return;
    },
    handleDelete(testPlan) {
      return;
    },
  }
};
</script>

<style scoped>

.table-page {
  padding-top: 20px;
  margin-right: -9px;
  float: right;
}

.el-table {
  cursor: pointer;
}

.schedule-btn >>> .el-button {
  margin-left: 10px;
  color:#85888E;
  border-color: #85888E;
  border-width: thin;
}
</style>
