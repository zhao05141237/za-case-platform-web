
const TestTrack = () => import('@/views/components/track/TestTrack')
const TrackHome = () => import('@/views/components/track/home/TrackHome')
const TestCase = () => import('@/views/components/track/case/TestCase')
const TestPlan = () => import('@/views/components/track/plan/TestPlan')
const TestCaseReview = () => import('@/views/components/track/review/TestCaseReview')
const TestCaseReviewView = () => import('@/views/components/track/review/view/TestCaseReviewView')
const TestPlanView = () => import('@/views/components/track/plan/view/TestPlanView')
const reportListView = () => import('@/views/components/track/report/TestPlanReport')
const issueList = () => import('@/views/components/track/issue/IssueList.vue')
// const reportListView = () => import('@/views/components/track/plan/TestPlan')

export default {
  path: "/track",
  name: "track",
  redirect: "/track/home",
  components: {
    content: TestTrack
  },
  children: [
    {
      path: 'home',
      name: 'trackHome',
      component: TrackHome,
    },
    {
      path: 'case/create',
      name: 'testCaseCreate',
      component: TestCase,
    },
    {
      path: 'case/:projectId',
      name: 'testCase',
      component: TestCase,
    },
    {
      path: 'case/edit/:caseId',
      name: 'testCaseEdit',
      component: TestCase,
    },
    {
      path: 'testPlan/reportList',
      name: 'testPlanReportList',
      component: reportListView,
    },
    {
      path: 'issue',
      name: 'issueManagement',
      component: issueList,
    },
    {
      path: "plan/:type",
      name: "testPlan",
      component: TestPlan
    },
    {
      path: "plan/view/:planId",
      name: "planView",
      component: TestPlanView
    },
    {
      path: "plan/view/edit/:caseId",
      name: "planViewEdit",
      component: TestPlanView
    },
    // {
    //   path: "project/:type",
    //   name: "trackProject",
    //   component: MsProject
    // },
    {
      path: "review/:type",
      name: "testCaseReview",
      component: TestCaseReview
    },
    {
      path: "review/view/:reviewId",
      name: "testCaseReviewView",
      component: TestCaseReviewView
    },
  ]
}
