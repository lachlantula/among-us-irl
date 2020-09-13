<template>
  <div class="join">
    <h2>Join</h2>
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Jeffrey">
    <br>
    <label for="game-code">Game code</label>
    <input type="text" name="game-code" placeholder="8a3C">
    <btn send-to="joined">
      Join game
    </btn>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'Join',
  components: {
    btn
  }
}
</script>

<style lang="scss">
</style>
