<template>
  <button @click="toggleTheme">
    <component :is="themeIcon" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      theme: 'dark',
    }
  },
  computed: {
    themeIcon() {
      return this.theme === 'dark' ? 'SunSVG' : 'MoonSVG'
    },
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.$colorMode.preference = this.theme
    },
  },
}
</script>

<style lang="scss" scoped>
</style>