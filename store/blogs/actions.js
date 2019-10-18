import axios from 'axios';

function getBlogPosts({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/blogs')  
      .then(data => {
        const blogs = data.data.blogs;
        commit('SET_BLOG_POSTS', {resource: 'all', blogs});
        return state.blogs.all
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
  getBlogPostBySlug
};
