import MsProject from "@/views/components/settings/workspace/MsProject";

export default {
  path: "/api",
  name: "api",
  redirect: "/api/home",
  components: {
    content: () => import('@/views/components/api/ApiTest')
  },
  children: [
    {
      path: 'home',
      name: 'fucHome',
      component: () => import('@/views/components/api/homepage/ApiTestHomePage'),
    },
    {
      path: 'home_obsolete',
      name: 'fucHome',
      component: () => import('@/views/components/api/home/ApiTestHome'),
    },
    {
      path: "test/:type",
      name: "ApiTestConfig",
      component: () => import('@/views/components/api/test/ApiTestConfig'),
      props: (route) => ({id: route.query.id})
    },
    {
      path: "test/list/:projectId",
      name: "ApiTestList",
      component: () => import('@/views/components/api/test/ApiTestList'),
    },
    // {
    //   path: "project/:type",
    //   name: "fucProject",
    //   component: MsProject,
    // },
    {
      path: "report/list/:testId",
      name: "ApiReportList",
      component: () => import('@/views/components/api/report/ApiReportList'),
    },
    {
      path: "report/view/:reportId",
      name: "ApiReportView",
      component: () => import('@/views/components/api/report/ApiReportView'),
    },
    {
      path: "automation/report",
      name: "ApiReportList",
      component: () => import('@/views/components/api/automation/report/ApiReportList'),
    },
    {
      path:"automation/report/view/:reportId",
      name:"ApiReportView",
      component: () => import('@/views/components/api/automation/report/ApiReportView'),

    },
    {
      path: "definition/:redirectID?/:dataType?/:dataSelectRange?",
      name: "ApiDefinition",
      component: () => import('@/views/components/api/definition/ApiDefinition'),
    },
    {
      path: "automation/:redirectID?/:dataType?/:dataSelectRange?",
      name: "ApiAutomation",
      component: () => import('@/views/components/api/automation/ApiAutomation'),
    },
    {
      path: 'monitor/view',
      name: 'ApiMonitor',
      component: () => import('@/views/components/api/monitor/ApiMonitor'),
    },
  ]
}
