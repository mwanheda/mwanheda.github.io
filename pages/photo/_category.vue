<template>
  <div class="photos">
    <p v-if="!photos.length"
       class="no-photos">No photos yet in this category.</p>

    <Masonry v-else :photos="photos" />
  </div>
</template>

<script>
  import Masonry from '../../components/Masonry'

  export default {
    components: {
      Masonry
    },

    data() {
      return {
        title: ''
      }
    },

    async asyncData({ params, payload }) {
      // this.title = params.ca

      if (payload) {
        return {
          photos: payload
        }
      }

      let photos = await require(`~/content/photos.json`)
      photos = photos.filter(photo => {
        return photo.category_id === params.category
      })

      return {
        photos: photos
      }
    }
  }
</script>
