<template>
  <div class="container">
    <header>
      <h1>among-us-irl prototype</h1>
      <div class="navigationProgress" :style="{'width': navigationStep + '%'}" />
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      Enjoy the project? <a href="#">Please consider chucking us a few bucks to keep it afloat.</a>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Default',
  computed: mapGetters({
    navigationStep: 'navigation/navigationStep'
  }),
  watch: {
    $route (to, from) {
      const routeName = to.name
      switch (routeName) {
        case 'index':
          this.$store.commit('navigation/setNavigationStep', 0)
          break
        case 'game-beforeCreate':
          this.$store.commit('navigation/setNavigationStep', 25)
          break
        case 'login':
          this.$store.commit('navigation/setNavigationStep', 50)
          break
      }
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  background: hsl(0, 0%, 93%);
  border-radius: 5%;
  max-width: 500px;
  padding: 5%;
  height: 80vh;
}

a {
  color: hsl(236, 100%, 30%);
}

header, footer {
  min-height: 10%;
}
main {
  max-height: 80%;
  overflow-y: auto;
}

p {
  text-align: justify;
  line-height: 1.5;
  margin-left: 5%;
  margin-right: 5%;
  &.centred {
    text-align: center;
  }
}

li {
  text-align: left;
}

h3 {
  line-height: 1.3;
  margin-top: 10px;
  margin-bottom: 5px;
}

hr {
  margin: 10px;
  color: hsl(0, 0%, 75%);
}

.navigationProgress {
  background: red;
  height: 24px;
}
</style>
