<template>
  <div>
    <p>Funds : <strong>{{ funds || currency }}</strong></p>
  </div>
</template>

<script>

  export default {
    computed: {
      funds(){
        return this.$store.getters.funds
      }
    }
  }
</script>

<style scoped>

</style>
