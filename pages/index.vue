<template>
    <main>
        <h2 class="page-title">Photo</h2>

        <div class="pictures-container">
            <div :data-h="photo.height"
                 :data-w="photo.width"
                 class="item" v-for="photo in photos">
                <img :alt="photo.title"
                     :src="'/images/photos/' +  photo.src"
                     class="item-image">
                <div class="item-layer"></div>
                <div class="item-text">— voir —</div>
            </div>
        </div>
    </main>
</template>

<script>
  import TheHeader from '../components/TheHeader'

  const photos = require('../content/photos')

  export default {
    components: {
      TheHeader
    },

    asyncData({ params }) {
      return {
        photos
      }
    }
  }
</script>
