<template>
<client-only>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Solve Me
      </h1>
      <h2 class="subtitle">
        SPA Page
      </h2>
      <p>Number of times loaded {{this.$store.state.count.number}}</p>
      <div class="links">
        <n-link to="/" class="button--green">To Universal Page</n-link>
        <n-link to="spa" class="button--grey">To SPA Page</n-link>
      </div>
    </div>
  </div></client-only>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
