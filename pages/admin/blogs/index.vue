<template>
  <div>
    <Header
      title="Manage your Blogs"
      exitLink="/"
    />
    <div class="instructor-blogs">
      <div class="container">
        <div class="section">
          <div class="header-block">
            <h2>Your Stories</h2>
            <div class="title-menu">
              <button @click="() => $router.push('/admin/blog/editor')" class="button">Write a story</button>
            </div>
          </div>
          <div class="tabs">
            <ul>
              <li @click="activeTab = 0">
                <a :class="{'is-active' : activeTab === 0}">Drafts</a>
              </li>
              <li @click="activeTab = 1">
                <a :class="{'is-active' : activeTab === 1}">Published</a>
              </li>
            </ul>
          </div>
          <div class="blogs-container">
            <template v-if="activeTab === 0">
              <div v-if="blogs.drafts">
                <div v-for="post in blogs.drafts" :key="post._id">
                  <div class="blog-card">
                    <h2>{{ post.title }}</h2>
                    <div class="blog-card-footer">
                      <span>
                        {{ post.updatedAt | formatDate}}
                      </span>
                      <Dropdown
                        @optionChanged="handleOption($event, post)"
                        :items="draftsOptions"/>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                No blog drafts
              </div>
            </template>

            <template v-if="activeTab === 1">
              <div v-if="blogs.published">
                <div v-for="post in blogs.published" :key="post._id">
                  <div class="blog-card">
                    <h2>{{ post.title }}</h2>
                    <div class="blog-card-footer">
                      <span>
                        {{ post.updatedAt | formatDate}}
                      </span>
                      <Dropdown
                        @optionChanged="handleOption($event, post)"
                        :items="publishedOptions"/>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                No published blogs
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '~/components/shared/Header';
import Dropdown from '~/components/shared/Dropdown';
import { createPublishedOptions, createDraftsOptions, commands } from '~/pages/admin/options';

import { mapState, mapActions } from 'vuex';

export default {
  layout: 'instructor',
  data() {
    return {
      activeTab: 0
    }
  },
  created() {
    this.getUserBlogPosts();
  },
  computed: {
    ...mapState('admin', ['blogs']),
    publishedOptions() {
      return createPublishedOptions();
    },
    draftsOptions() {
      return createDraftsOptions();
    }
  },
  methods: {
    ...mapActions('admin', ['getUserBlogPosts']),
    handleOption(command, post) {
      if(command === commands.EDIT_BLOG) {
        this.$router.push(`/admin/blog/${post._id}/edit`);
      }

      if(command === commands.DELETE_BLOG) {
        this.dasplayDeleteWarning(post)
      }
    },
    dasplayDeleteWarning(post) {
      const isConfirm = confirm('Are you shure you want to delet this post?');
      if(isConfirm) {
        this.$store.dispatch('admin/deleteBlogPost', post)
      }
    }
      
  },
  components: {
    Header, Dropdown
  }
}
</script>

<style scoped lang="scss">
  .is-active {
    border-bottom: 1px solid #363636
  }
  .blog-error {
    font-size: 35px;
  }
  .blog-card {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    > h2 {
      font-size: 20px;
      font-weight: bold;
    }
    &-footer {
      color: rgba(0, 0, 0, 0.54);
    }
    &.featured {
      border-left: 5px solid #3cc314;
      padding-left: 10px;
      transition: border ease-out 0.2s;
    }
  }
  .header-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    > h2 {
      font-size: 40px;
      font-weight: bold;
    }
    .title-menu {
      margin-left: auto;
    }
  }
</style>
