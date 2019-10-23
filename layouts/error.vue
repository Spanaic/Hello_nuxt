<template>
  <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found...(T_T)</h1>
      <h1 v-else>An error occured</h1>
      <nuxt-link to="/">Back Top</nuxt-link>
  </div>
</template>

<script>
export default {
    props: ['error'],
    // mounted(){
    //     console.log(this.props)
    // }
}
</script>

<style scoped>
.container {
    padding-top: 10px;
    text-align: center;
}
h1 {
    font-size: 22px;
}
</style>