<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ blog.title }}</p>
          <p class="subtitle is-6"><i>by {{ blog.author.name }}</i></p>
        </div>
      </div>
      <div class="content">
        {{ blog.subtitle }}
        <br>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="`/blogs/${blog.slug}`" class="card-footer-item">Read More</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">

</style>