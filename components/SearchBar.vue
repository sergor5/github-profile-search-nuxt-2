<template>
  <div
    class="
      flex
      max-w-4xl
      mx-auto
      justify-between
      align-center
      space-x-2
      p-2
      bg-gray-200
      rounded-md
      shadow
      dark:bg-green-400
    "
  >
    <div class="grid place-items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="text"
      class="flex-grow rounded-md mx-2 h-10 px-2 dark:text-gray-900"
      @keyup="onChange"
    />
    <button>Search</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      timer: null,
    }
  },
  methods: {
    onChange(e) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('input', e.target.value)
      }, 600)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>