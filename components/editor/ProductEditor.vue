<template>
  <div class="editor product-editor">
    <ProductMenu :editor="editor"/>
    <EditorContent 
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import ProductMenu from '~/components/editor/ProductMenu'
import {
  Bold,
  Italic,
  History,
  OrderedList,
  BulletList,
  ListItem,
  Placeholder
} from 'tiptap-extensions'


export default {
  components: {
    EditorContent,
    ProductMenu
  },
  data() {
    return {
      editor: null
    }
  },
  props: {
    initialContent: {
      type: String
    }
  },
  // This is called only on client (in browser)
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Italic(),
        new History(),
        new OrderedList(),
        new BulletList(),
        new ListItem(),
      ],
      onUpdate: () => {
        this.emitUpdate()
      }
    })
    
    this.initialContent && this.editor.setContent(this.initialContent)
  },
  methods: {
    emitUpdate() {
      const content = this.editor.getHTML()
      this.$emit('editorUpdated', content)
    }
  },
  beforeDestroy() {
    this.editor && this.editor.destroy();
  },
}
</script>

<style scoped lang="scss">
.menubar {
  background-color: grey;
}
.editor__content {
  border: 1px solid grey;
  border-radius: 6px;
  padding: 10px;
}
</style>