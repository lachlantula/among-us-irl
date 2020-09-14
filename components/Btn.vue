<template>
  <button class="btn" :class="{small}" @click="activate">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    sendTo: {
      type: String,
      default: ''
    },
    routeQuery: {
      type: Object,
      default: () => {
        return {}
      }
    },
    small: Boolean
  },
  methods: {
    activate () {
      if (this.sendTo) {
        this.$router.push({
          path: this.sendTo,
          query: this.routeQuery
        })
      }
      this.$emit('pressed')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 1.5rem;
  padding: 5%;
  font-weight: bold;
  background: hsl(0, 0%, 80%);
  border: solid 5px hsl(0, 0%, 60%);
  transition: background 0.2s linear;
  will-change: background;
  &:hover {
    background: hsl(236, 100%, 90%);
  }
  &.small {
    font-weight: normal;
    font-size: 1rem;
    padding: 2%;
  }
}
</style>
