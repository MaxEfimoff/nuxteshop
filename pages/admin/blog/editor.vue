<template>
  <div>
    <Header
      title="Write your Blogs"
      exitLink="/instructor/blogs"
    />
    <div class="blog-editor-container">
      <div class="container">
        <Editor />
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '~/components/editor';
import Header from '~/components/shared/Header';

export default {
  layout: 'instructor',
  components: {
    Header,
    Editor
  }
}
</script>
<style lang="scss">
  .blog-editor-container {
    padding-top: 60px;
  }
</style>
