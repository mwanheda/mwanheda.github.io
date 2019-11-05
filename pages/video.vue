<template>
  <div class="videos">
    <div v-for="(video, index) in videos" :key="index" class="videos__item">
      <iframe class="videos__iframe" width="560" height="315"
              :src="video.src + '?autohide=1&color=white&modestbranding=1&rel=0&showinfo=0'"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, payload }) {
      if (payload) {
        return {
          videos: payload
        }
      }

      const videos = await require(`~/content/videos.json`)

      return {
        videos: videos
      }
    }
  }
</script>

<style scoped>

</style>
