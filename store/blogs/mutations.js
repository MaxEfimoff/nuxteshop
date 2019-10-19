import Vue from 'vue';

function SET_BLOG_POSTS(state, {resource, blogs}) {
  state.blogs[resource] = blogs;
}

function SET_BLOG_POST(state, blog) {
  state.blog = blog;
}

function SET_PAGINATION(state, {count, pageCount}) {
  Vue.set(state.pagination, 'count', count);
  Vue.set(state.pagination, 'pageCount', pageCount);
}

function SET_PAGE(state, currentPage) {
  Vue.set(state.pagination, 'currentPage', currentPage);
}

export {
  SET_BLOG_POSTS,
  SET_BLOG_POST,
  SET_PAGINATION,
  SET_PAGE
};