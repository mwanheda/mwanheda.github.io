<template>
  <client-only>
    <div v-masonry
         item-selector=".item"
         gutter=".gutter"
         horizontal-order="true"
         transition-duration="0"
         class="masonry">
      <div class="gutter"></div>
      <img v-masonry-tile
           v-for="(photo, index) in photos"
           class="item"
           :alt="photo.title"
           :key="index"
           :src="'/images/photos/' + photo.src">
    </div>
  </client-only>
</template>

<script>
  export default {
    props: {
      photos: Array
    },

    mounted() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    }
  }
</script>
