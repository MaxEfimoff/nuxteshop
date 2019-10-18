import axios from 'axios';

function getUserProducts({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/products/user-products')  
      .then((response) => {
        commit('SET_PRODUCTS', response.data);
      })
      .catch(error => console.log(error));
  });
}

function createProduct({ commit }, formData) {
  return new Promise((resolve, reject) => {
    axios.post('/api/products', formData)  
      .then((response) => {
        commit('SET_PRODUCTS', response.data);
      })
      .catch(error => console.log(error));
  });
}

function getProduct({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/products/${id}`)  
      .then((response) => {
        commit('SET_PRODUCT', response.data);
      })
      .catch(error => console.log(error));
  });
}

function updateProduct({ state, commit }) {
  const product = state.product;
  return new Promise((resolve, reject) => {
    axios.patch(`/api/products/${product._id}`, product)  
      .then((response) => {
        commit('SET_PRODUCT', response.data);
        commit('SET_CAN_UPDATE_PRODUCT', false);
      })
      .catch(error => console.log(error));
  });
}

function updateLine({ commit }, { field, value, index }) {
  commit('SET_LINE_VALUE', {field, value, index});
  commit('SET_CAN_UPDATE_PRODUCT', true);
}

function updateProductValue({ commit }, { value, field }) {
  commit('SET_PRODUCT_VALUE', {value, field});
  commit('SET_CAN_UPDATE_PRODUCT', true);
}

function updateProductPrice({ commit }, { value, field }) {
  commit('SET_PRODUCT_PRICE', {value, field});
}

function updateProductStatus({ commit }, { value, field }) {
  commit('SET_PRODUCT_STATUS', {value, field});
}

function updateProductCategory({ commit }, value) {
  commit('SET_PRODUCT_CATEGORY', value);
}

function createBlogPost({ commit }, Data) {
  return new Promise((resolve, reject) => {
    commit('SET_IS_SAVING', true);
    axios.post('/api/blogs', Data)  
      .then((response) => {
        console.log(response) 
        commit('SET_BLOG_POST', response.data.content);
        commit('SET_IS_SAVING', false);
      })
      .catch(error => console.log(error));
  });
}

function updateBlogPost({ commit }, {data, id}) {
  return new Promise((resolve, reject) => {
    commit('SET_IS_SAVING', true);
    axios.patch(`/api/blogs/${id}`, data)  
      .then((response) => {
        console.log(response) 
        commit('SET_BLOG_POST', response.data.content);
        commit('SET_IS_SAVING', false);
      })
      .catch(error => console.log(error));
  });
}

function getBlogPost({ commit }, id) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/blogs/${id}`)  
      .then((response) => {
        
        commit('SET_BLOG_POST', response.data);
        console.log(response.data)
      })
      .catch(error => console.log(error));
  });
}

function deleteBlogPost({ commit, state }, blog) {
  return new Promise((resolve, reject) => {
    const resource = blog.status === 'active' ? 'drafts' : 'published';
    axios.delete(`/api/blogs/${blog._id}`)  
      .then((response) => {
        const index = state.blogs[resource].findIndex((b) => b._id === blog._id)
        commit('DELETE_BLOG_POST', {resource, index});
      })
      .catch(error => console.log(error));
  });
}

function separateBlogs(blogs) {
  const published = []
  const drafts = []

  blogs.forEach(blog => {
    blog.status === 'active' ? drafts.push(blog) : published.push(blog)
  })
  return {published, drafts}
}

function getUserBlogPosts({commit, state}) {
  return this.$axios.$get('/api/blogs/me')
    .then(blogs => {
      const { published, drafts } = separateBlogs(blogs)
      commit('SET_BLOGS', {resource: 'drafts', blogs: drafts})
      commit('SET_BLOGS', {resource: 'published', blogs: published})

      return { published, drafts }
    })
}

export {
  getUserProducts,
  createProduct,
  getProduct,
  updateLine,
  updateProductValue,
  updateProductPrice,
  updateProductStatus,
  updateProductCategory,
  updateProduct,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  getUserBlogPosts,
  separateBlogs,
  deleteBlogPost
};
