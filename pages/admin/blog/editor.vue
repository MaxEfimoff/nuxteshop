<template>
  <div>
    <Header
      title="Write your Blogs"
      exitLink="/admin/blogs"
    />
    <div class="blog-editor-container">
      <div class="container">
        <Editor @editorSaved="saveBlogPost"/>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '~/components/editor';
import Header from '~/components/shared/Header';

export default {
  layout: 'admin',
  components: {
    Header,
    Editor
  }, methods: {
    async saveBlogPost(blogData) {
      try {
        await this.$store.dispatch('admin/createBlogPost', blogData)
      } catch(error) {
        console.log(error)
      } finally {
        blog => this.$router.push(`/admin/blog/${blog._id}/edit`)
      }
    }
  }
}
</script>
<style lang="scss">
  .blog-editor-container {
    padding-top: 60px;
  }
</style>
