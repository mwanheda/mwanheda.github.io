<template>
    <div>
        <TheHeader />
        <main>
            <nuxt />
        </main>
        <TheFooter />
    </div>
</template>

<script>
  import TheHeader from '../components/TheHeader'
  import TheFooter from '../components/TheFooter'

  export default {
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>
