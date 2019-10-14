<template>
  <div class="editor editor-squished">
    <BasicMenu :editor="editor">
      <button
        @click="emitUpdate"
        :disabled="isSaving"
        class="button is-success button-save">
        Save
      </button>
    </BasicMenu>
    <BubbleMenu :editor="editor"/>
    <EditorContent 
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import BubbleMenu from '~/components/editor/BubbleMenu'
import BasicMenu from '~/components/editor/BasicMenu'
import {
  Heading,
  Bold,
  Code,
  Italic,
  Strike,
  Underline,
  History,
  Blockquote,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  CodeBlockHighlight,
  Placeholder
} from 'tiptap-extensions'
import Title from '~/components/editor/components/Title'
import Subtitle from '~/components/editor/components/Subtitle'
import Doc from '~/components/editor/components/Doc'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
export default {
  components: {
    EditorContent,
    BubbleMenu,
    BasicMenu
  },
  data() {
    return {
      editor: null
    }
  },
  props: {
    isSaving: {
      // type: Boolean,
      required: false,
      default: false
    }
  },
  // This is called only on client (in browser)
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Doc(),
        new Title(),
        new Subtitle(),
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: node => {
            if (node.type.name === 'title') {
              return 'Inspirational Title'
            }
            if (node.type.name === 'subtitle') {
              return 'Some catchy subtitle'
            }
            return 'Write your story...'
          }
        }),
        new Heading({ levels: [1, 2, 3]}),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Blockquote(),
        new HorizontalRule(),
        new OrderedList(),
        new BulletList(),
        new ListItem(),
        new CodeBlockHighlight({
          languages: {
            javascript,
            css,
          }
        })
      ]
    })
    // this.$emit('editorMounted', this.editor)
    this.$emit('editorMounted', this.setInitialContent)
  },
  beforeDestroy() {
    this.editor && this.editor.destroy();
  },
  methods: {
    setInitialContent(content) {
      this.editor.setContent(content)
      console.log('content', content)
    },
    emitUpdate() {
      const html = this.editor.getHTML();
      const title = this.getNodeValueByName('title');
      const subtitle = this.getNodeValueByName('subtitle');
      
      
      this.$emit('editorUpdated', { content: html, title, subtitle });
    },
    getNodeValueByName(name) {
      const docContent = this.editor.state.doc.content;
      const nodes = docContent.content;
      const node = nodes.find(node => node.type.name === name);

      if(node) {
        return node.textContent
      }

      return ''
    }
  }
}
</script>

<style scoped lang="scss">
  .button-save {
    float: right;
    background-color: lightgrey;
    &:hover {
      background-color: lightgrey;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
</style>