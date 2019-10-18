<template>
  <div class="blog-editor-container">
    <div class="container">
      <div class="blog-section-user">
        <UserTile 
          :name="blog.author.name"
          :avatar="blog.author.avatar"
          :date="blog.createdAt | formatDate"/>
        <!-- user info -->
      </div>
      <div class="blog-content" v-html="blog.content">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserTile from '~/components/shared/UserTile';

export default {
  components: {
    UserTile
  },
  created() {
    this.getBlogPostBySlug(this.$route.params.slug);
  },
  methods: {
    ...mapActions('blogs', ['getBlogPostBySlug']),
  },
  computed: {
    ...mapState('blogs', ['blog']),
  }
}
</script>

<style scoped lang="scss">
  .blog-content, .blog-section-user {
    max-width: 800px;
    margin: 10px auto;
  }

</style>