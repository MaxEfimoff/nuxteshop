<template>
  <div class="editor editor-squished">
    <BasicMenu :editor="editor"/>
    <BubbleMenu :editor="editor"/>
    <EditorContent 
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap';
import Subtitle from '~/components/editor/components/Subtitle';
import Doc from '~/components/editor/components/Doc';
import Title from '~/components/editor/components/Title';
import BubbleMenu from '~/components/editor/BubbleMenu';
import BasicMenu from '~/components/editor/BasicMenu';

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
} from 'tiptap-extensions';

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
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Heading({ levels: [1, 2, 3] }),
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
        new CodeBlockHighlight(),
        new Doc(),
        new Title(),
        new Subtitle(),
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: node => {
            if (node.type.name === 'title') {
              return 'Post title'
            }
            if (node.type.name === 'subtitle') {
              return 'Post subtitle'
            }
            return 'Write something'
          },
        })
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