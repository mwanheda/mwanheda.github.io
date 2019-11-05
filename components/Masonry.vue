<template>
    <div class="grid" v-masonry>
        <div class="grid-sizer"></div>
        <img v-for="photo in photos"
             class="grid-item"
             :alt="photo.title"
             :src="'/images/photos/' + photo.src">
    </div>
</template>

<script>
  // import Masonry from 'masonry-layout'

  export default {
    props: {
      photos: Array
    },

    data() {
      return {
        masonry: ''
      }
    },

    directives: {
      masonry: {
        mounted: function (el) {
          import('masonry-layout').then(
            this.masonry = new Masonry(el, {
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            })
          )
          this.masonry.layout()
        }
      }
    },

    nextTick() {
      this.masonry.layout()
    }
  }
</script>
