
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        if (url.startsWith('/')) url = url.replace('/', '')
        return {
          is: 'span',
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer',
          onclick: "window.open('https://" + url.replace('https:/', '') + "', '_blank')"
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
