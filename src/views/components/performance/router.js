const PerformanceTest = () => import('@/views/components/performance/PerformanceTest')
const PerformanceTestHome = () => import('@/views/components/performance/home/PerformanceTestHome')
const EditPerformanceTest = () => import('@/views/components/performance/test/EditPerformanceTest')
const PerformanceTestList = () => import('@/views/components/performance/test/PerformanceTestList')
const PerformanceTestReportList = () => import('@/views/components/performance/report/PerformanceTestReportList')
const PerformanceChart = () => import('@/views/components/performance/report/components/PerformanceChart')
const PerformanceReportView = () => import('@/views/components/performance/report/PerformanceReportView')
const PerformanceReportCompare = () => import('@/views/components/performance/report/PerformanceReportCompare')

export default {
  path: "/performance",
  name: "performance",
  redirect: "/performance/home",
  components: {
    content: PerformanceTest
  },
  children: [
    {
      path: 'home',
      name: 'perHome',
      component: PerformanceTestHome,
    },
    {
      path: 'test/create',
      name: "createPerTest",
      component: EditPerformanceTest,
    },
    {
      path: "test/edit/:testId",
      name: "editPerTest",
      component: EditPerformanceTest,
      props: {
        content: (route) => {
          return {
            ...route.params
          }
        }
      }
    },
    {
      path: "test/:projectId",
      name: "perPlan",
      component: PerformanceTestList
    },
    // {
    //   path: "project/:type",
    //   name: "perProject",
    //   component: MsProject
    // },
    {
      path: "report/:type",
      name: "perReport",
      component: PerformanceTestReportList
    },
    {
      path: "chart",
      name: "perChart",
      component: PerformanceChart
    },
    {
      path: "report/view/:reportId",
      name: "perReportView",
      component: PerformanceReportView
    },
    {
      path: "report/compare/:reportId",
      name: "ReportCompare",
      component: PerformanceReportCompare,
    },
  ]
}
