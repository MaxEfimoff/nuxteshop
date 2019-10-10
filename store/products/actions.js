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


export {
  getProducts,
};
