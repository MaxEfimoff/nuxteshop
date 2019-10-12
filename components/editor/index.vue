<template>
  <div class="editor editor-squished">
    <EditorContent 
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';
import { Heading } from 'tiptap-extensions';

export default {
  components: {
    EditorContent
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Heading({ levels: [1, 2, 3] })
      ]
    })
  },
  beforeDestroy() {
    this.editor && this.editor.destroy();
  }
}
</script>

<style>

</style>