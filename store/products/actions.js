import axios from 'axios';

function getProducts({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/products')  
      .then((response) => {
        commit('SET_PRODUCTS', response.data);
      })
      .catch(error => console.log(error));
  });
}

function getProductBySlug({ commit, state }, slug) {
  return new Promise((resolve, reject) => {
    axios.get(`/api/products/s/${slug}`)  
      .then((response) => {
        commit('SET_PRODUCT', response.data);
      })
      .catch(error => console.log(error));
  });
}

export {
  getProducts,
  getProductBySlug
};
