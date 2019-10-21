import axios from 'axios';

function getPromos({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/product-heroes')  
      .then((response) => {
        commit('SET_PROMOS', response.data);
      })
      .catch(error => console.log(error));
  });
}

function getPromo({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios.get('/api')  
      .then((response) => {
        commit('SET_PROMO', response.data);
      })
      .catch(error => console.log(error));
  });
}

function createPromo({ commit, state }, productPromo) {
  return new Promise((resolve, reject) => {
    axios.post('/api/product-heroes', productPromo)  
      .then((response) => {
        commit('SET_PROMO', response.data);
      })
      .catch(error => console.log(error));
  });
}


export {
  getPromos,
  createPromo,
  getPromo
};
