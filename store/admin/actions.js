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

function updateLine({ commit }, {field, value, index}) {
//   return new Promise((resolve, reject) => {
//     axios.get(`/api/products/${id}`)  
//       .then((response) => {
        commit('SET_LINE_VALUE', {field, value, index});
  //     })
  //     .catch(error => console.log(error));
  // });
}

export {
  getUserProducts,
  createProduct,
  getProduct,
  updateLine
};
