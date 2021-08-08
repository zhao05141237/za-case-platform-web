export const caseType = [{
  value: 'XML',
  label: 'XML用例'
}, {
  value: 'CUSTOMIZE',
  label: '用户自定义用例'
}]

export const syncStatusList = [{
  value: 0,
  label: '初始化'
}, {
  value: 1,
  label: '同步创建'
}, {
  value: 2,
  label: '创建成功'
}, {
  value: 3,
  label: '创建失败'
}, {
  value: 4,
  label: '同步开始'
}, {
  value: 5,
  label: '同步结束'
}, {
  value: 6,
  label: '同步失败'
}]

export const resultType = [{
  value: 'SKIP',
  label: '跳过'
}, {
  value: 'PASS',
  label: '成功'
}, {
  value: 'FAIL',
  label: '失败'
}]

export const envType = [{
  value: 'TEST',
  label: '测试环境'
}, {
  value: 'PRE',
  label: '预发环境'
}]

export const buildStatusList = [{
  value: 'INIT',
  label: '初始化'
}, {
  value: 'WAIT_BUILD',
  label: '等待构建'
}, {
  value: 'BUILDING',
  label: '构建中'
}, {
  value: 'FINISH',
  label: '构建完成'
}, {
  value: 'FAIL',
  label: '构建失败'
}]

export const runRecordStatus = [{
  value: 'PREPARE',
  label: '准备执行',
  type: 'primary'
}, {
  value: 'RUNNING',
  label: '开始执行',
  type: 'primary'
}, {
  value: 'FINISH',
  label: '执行完成',
  type: 'success'
}, {
  value: 'FAILED',
  label: '执行失败',
  type: 'danger'
}, {
  value: 'STOP',
  label: '手动中止',
  type: 'warning'
}]

export const runMethodStatus = [{
  value: 'SUCCESS',
  label: '通过'
}, {
  value: 'FAILURE',
  label: '失败'
}, {
  value: 'SKIP',
  label: '跳过'
}, {
  value: 'START',
  label: '执行中'
}]

export const dataSourceType = [
  {
    'value': 'TDDL',
    'label': 'TDDL'
  },
  {
    'value': 'DCDB',
    'label': '直接数据源'
  },
  {
    'value': 'DMDS',
    'label': 'DMDS'
  },
  {
    'value': 'XDBC',
    'label': 'XDBC'
  },
  {
    'value': 'XDBC_JDBC',
    'label': 'XDBC_JDBC'
  }]

export const labelType = [
  {
    'value': 'RUN_RECORD',
    'label': '执行标签'
  }, {
    'value': 'CONFIG',
    'label': '配置标签'
  }
  // , {
  //   "value": "CASE_SET",
  //   "label": "用例集标签"
  // }
]
export const labelStyle = [
  {
    'value': '全量用例集',
    'style': '#409EFF'
  }, {
    'value': 'BVT用例',
    'style': '#409EFF'
  }
]

export const reportUnit = [
  {
    'value': 'DAY',
    'label': '天'
  },
  {
    'value': 'WEEK',
    'label': '星期'
  },
  {
    'value': 'HALF_MOUTH',
    'label': '半月'
  },
  {
    'value': 'MOUTH',
    'label': '月'
  }
]

export const labelNameList = [
  {
    value: '102',
    label: 'BVT用例'
  },
  {
    value: '201',
    label: '全量用例集'
  }
]


export const bvtFailReasonType = [
  {
    value: 'CASE_PROBLEM',
    label: '用例问题'
  },
  {
    value: 'BUSINESS_CONFIG_PROBLEM',
    label: '业务配置问题'
  },
  {
    value: 'TECH_CONFIG_PROBLEM',
    label: '技术配置问题'
  },
  {
    value: 'CODE_BUG',
    label: '代码缺陷'
  },
  {
    value: 'DATABASE_SCRIPT_NO_EXECUTE',
    label: '数据库脚本未执行'
  },
  {
    value: 'DOWNSTREAM_SYSTEM_ABNORMAL',
    label: '下游系统异常'
  }

]

export const bvtRunRecordStatus = [{
  value: 'INIT',
  label: '准备执行',
  type: 'primary'
}, {
  value: 'RUNNING',
  label: '开始执行',
  type: 'primary'
}, {
  value: 'RUN_FAIL',
  label: '执行失败',
  type: 'danger'
}, {
  value: 'CALLBACK_SUCCESS',
  label: '回调成功',
  type: 'success'
}, {
  value: 'CALLBACK_FAIL',
  label: '回调失败',
  type: 'warning'
}]

export const templateStatus = [{
  value: 'Y',
  label: '生效'
}, {
  value: 'N',
  label: '失效'
}]

export const informStatus = [{
  value: 'SUCCESS',
  label: '成功'
}, {
  value: 'FAIL',
  label: '失败'
}, {
  value: 'PROCESS',
  label: '触达中'
}]


export const informChannel = [{
  value: 'ENTERPRISE_WECHAT',
  label: '企业微信',
  msgType: [
    {
      value: "WECHAT_TEXT_CARD",
      label: '文本卡片消息',
      ref: 'cardmsg.jpeg'
    },
    {
      value: "WECHAT_MARKDOWN",
      label: 'markdown消息',
      ref: 'markdown.png'
    }
  ]
},{
  value: 'EMAIL',
  label: '邮箱',
  msgType: [
    {
      value: "EMAIL",
      label: '邮箱',
      ref: ''
    }
  ]
}]


export const isInputReason = [{
  value: 'Y',
  label: '是'
}, {
  value: 'N',
  label: '否'
}]


export const company = [{
  value: 'ZA',
  label: '众安在线财产保险股份有限公司'
}, {
  value: 'ZAINFO',
  label: '众安信息技术服务有限公司'
}]
