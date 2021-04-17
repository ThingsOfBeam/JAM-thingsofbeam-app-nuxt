<template>
  <v-card ref="toolbar" :class="{ _sticky: sticky }" flat tile>
    <v-toolbar class="mx-auto" width="100%" max-width="1000" flat>
      <v-toolbar-title> ThingsOfBeam </v-toolbar-title>
      <v-spacer />
      <v-btn href="https://github.com/ThingsOfBeam" icon>
        <font-awesome-icon
          style="width: 25px; height: 25px"
          :icon="['fab', 'github']"
        />
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      sticky: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY
      const toolBarHeight = this.$refs.toolbar.$el.scrollHeight
      this.sticky = scrollPosition >= toolBarHeight
    },
  },
}
</script>

<style scoped>
._sticky {
  position: sticky;
  top: 0;
  box-shadow: 1px 1px 10px 0 rgb(0 0 0 / 5%) !important;
}
</style>
