<template>
  <div>
    <h2 class="page-title">Photo</h2>

    <Masonry :photos="photos" />
  </div>
</template>

<script>
  import TheHeader from '../components/TheHeader'
  import Masonry from '../components/Masonry'

  export default {
    components: {
      TheHeader,
      Masonry
    },

    asyncData({ params }) {
      const photos = require('~/content/photos')
      return { photos }
    },

    head() {
      return {
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
      }
    }
  }
</script>
