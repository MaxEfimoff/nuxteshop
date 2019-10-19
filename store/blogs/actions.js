import axios from 'axios';

function getBlogPosts({ commit, state }, filter) {
  return new Promise((resolve, reject) => {
    console.log(filter.pageSize)
    axios.get(`http://localhost/api/blogs?pageNum=${filter.pageNum}&pageSize=${filter.pageSize}`)  
    // axios.get('http://localhost/api/blogs?pageNum=1&pageSize=2')  
      .then(data => {
        const blogs = data.data.blogs;
        const count = data.data.count;
        const pageCount = data.data.pageCount;
        commit('SET_BLOG_POSTS', {resource: 'all', blogs});
        commit('SET_PAGINATION', {count, pageCount})
        return state.blogs.all
      })
      .catch(error => console.log(error));
  });
}

function getFeaturedBlogPosts({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/blogs?filter[featured]=true')  
      .then(data => {
        const blogs = data.data.blogs;
        commit('SET_BLOG_POSTS', {resource: 'featured', blogs});
        return state.blogs.fetured
      })
      .catch(error => console.log(error));
  });
}

function getBlogPostBySlug({ commit, state }, slug) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/blogs/s/${slug}`)  
      .then((response) => {
        commit('SET_BLOG_POST', response.data);
      })
      .catch(error => console.log(error));
  });
}

export {
  getBlogPosts,
  getBlogPostBySlug,
  getFeaturedBlogPosts
};
