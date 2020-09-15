<template>
  <div class="login">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Jeffrey">
    <br>
    <div v-if="typeOfLogin === 'Create account'">
      <label for="password">Password</label>
      <input type="password" name="password">
    </div>
    <div v-else>
      <label for="game-code">Game code</label>
      <input type="text" name="game-code" placeholder="8a3C">
    </div>
    <btn send-to="joined">
      {{ typeOfLogin }}
    </btn>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'Login',
  components: {
    btn
  },
  data () {
    return {
      typeOfLogin: ''
    }
  },
  mounted () {
    this.typeOfLogin = this.$route.query.typeOfLogin
  }
}
</script>

<style lang="scss">
</style>
