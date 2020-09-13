<template>
  <div class="create">
    <h2>Hosting</h2>
    <p class="centred">
      You are hosting a game with the code
    </p>
    <h3 id="code">
      8a3C
    </h3>
    <p class="centred">
      <strong>Ensure you write this code somewhere safe!</strong>
    </p>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'Host',
  components: {
    btn
  }
}
</script>

<style>
#code {
  font-size: 2rem;
}
</style>
