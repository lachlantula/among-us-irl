<template>
  <div class="create">
    <h2>Create</h2>
    <btn>Log in to account</btn>
    <btn>Create an account</btn>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'Create',
  components: {
    btn
  }
}
</script>

<style>
</style>
