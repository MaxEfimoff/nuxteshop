<template>
  <!-- Finish handling of URL -->
  <div>
    <Header
      title="Write your blog"
      exitLink="/admin/blogs">
      <!-- TODO: Check if blog status is active -->
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <!-- TODO: Check blog validity before publishing -->
          <Modal
            @opened="checkBlogValidity"
            openTitle="Publish"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Review Details">
            <div>
              <div class="title">Once you publish blog you cannot change url to a blog.</div>
              <!-- Check for error -->
              <div v-if="!publishError">
                <div class="subtitle">This is how your post URL will look like after publish:</div>
                <article class="message is-success">
                  <div class="message-body">
                    <strong>{{ getCurrentUrl() }}/blogs/{{ slug }}</strong>
                  </div>
                </article>
              </div>
              <article v-else class="message is-danger">
                <div class="message-body">
                  {{ publishError }}
                </div>
              </article>
            </div>
          </Modal>
        </div>
      </template>
      <!-- <template v-else #actionMenu>
        <div class="full-page-takeover-header-button">
          <Modal
            openTitle="Unpublish"
            openBtnClass="button is-success is-medium is-inverted is-outlined"
            title="Unpublish Blog">
            <div>
              <div class="title">Unpublish blog so it's no longer displayed in blogs page</div>
            </div>
          </Modal>
        </div>
      </template> -->
    </Header>
    <div class="blog-editor-container">
      <div class="container">
        <editor
          @editorMounted="initBlogContent"
          @editorUpdated="updateBlogPost"
          :isSaving="isSaving"
          ref="editor"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '~/components/editor';
import Header from '~/components/shared/Header';
import Modal from '~/components/shared/Modal';

import axios from 'axios';
import slugify from 'slugify';

import { mapState, mapActions } from 'vuex';

export default {
  layout: 'instructor',
  components: {
    Editor, Header, Modal
  },
  data() {
    return {
      publishError: '',
      slug: ''
    }
  },
  computed: {
    ...mapState('admin', ['blog', 'isSaving'])
  },
  fetch ({ store, params }) {
    return axios.get(`/api/blogs/${params.id}`)
    .then((res) => {
      store.commit('admin/SET_BLOG_POST', res.data)
    })
  },
  methods: {
    ...mapActions("admin", ['getBlogPost']),
    initBlogContent(initContent) {
      initContent(this.blog.content);
    },
    checkBlogValidity() {
      const title = this.$refs.editor.getNodeValueByName('title');
      this.publishError = '',
      this.slug = ''

      if(title && title.length > 24) {
        this.slug = this.slugify(title)
      } else {
        this.publishError = 'Cannot publish! Title needs to be longer than 24 characters.'
      }
    },
    updateBlogPost(blogData) {
      if(!this.isSaving) {
        this.$store.dispatch('admin/updateBlogPost', {data: blogData, id:this.blog._id})
        .then(console.log('Blog post updated!'))
        .catch(err => console.log(err)) 
      }
    },
    slugify(text) {
      return slugify(text, {
        replacement: '-',
        remoove: null,
        lower: true
      })
    },
    getCurrentUrl() {
      return process.client && window.location.origin
    }
  }
}
</script>
