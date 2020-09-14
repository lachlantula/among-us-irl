<template>
  <div class="create">
    <h2>Create</h2>
    <btn send-to="/login" :route-query="{'typeOfLogin': 'Log in', 'goto': 'create'}">
      Log in to account
    </btn>
    <btn send-to="/login" :route-query="{'typeOfLogin': 'Create account', 'goto': 'create'}">
      Create an account
    </btn>
    <btn small send-to="/">
      Go back
    </btn>
  </div>
</template>

<script>
import btn from '@/components/Btn.vue'

export default {
  name: 'BeforeCreate',
  components: {
    btn
  }
}
</script>

<style>
</style>
