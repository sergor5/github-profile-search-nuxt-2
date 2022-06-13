<template>
  <div>
    <div class="flex justify-between py-3">
      <div>Github User Search</div>
      <ColorModeToggleButton />
    </div>
    <SearchBar v-model="userName" />
    <Card class="mt-2 max-w-4xl" v-text="userData"></Card>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      userName: '',
      userData: null,
    }
  },
  watch: {
    userName: function (newValue) {
      this.getUserData(newValue)
    },
  },
  methods: {
    getUserData(userName) {
      if (userName) {
        this.$axios
          .get(`https://api.github.com/users/${userName}`)
          .then((response) => {
            this.userData = response.data
          })
          .catch((error) => {
            this.userData = null
          })
      }
    },
  },
}
</script>
