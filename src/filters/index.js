import { parseTime } from '@/utils'
import Vue from 'vue'

export function parseDate(time) {
  if (!time) return ''
  return parseTime(new Date(time), '{y}-{m}-{d}')
}

export function filterTemplateStatus(val) {
  switch (val) {
    case 'PENDING':
      return '待审核'
    case 'FAILED':
      return '审核未通过'
    case 'PASSED':
      return '已上架'
    case 'DISCARD':
      return '已下架'
    default:
      return ''
  }
}

/**
 * @description 通过value获得label
 * @author cqh
 */
Vue.filter('GET_LABEL_THROUGH_VALUE', function(value, localArray) {
  if (!localArray) {
    return value
  }
  const temp = localArray.filter(item => item.value == value)
  return temp && temp[0] ? temp[0].label : value
})

export function filterCaseType(val) {
  switch (val) {
    case 0:
      return '冒烟用例'
    case 1:
      return '全量用例集'
    case 2:
      return '自定义用例集'
    default:
      return ''
  }
}
