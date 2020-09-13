<template>
  <div class="index">
    <btn send-to="game/create">
      Create game
    </btn>
    <btn send-to="game/join">
      Join game
    </btn>
    <btn small send-to="about">
      About
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'Index',
  components: {
    btn
  }
}
</script>

<style>
</style>
