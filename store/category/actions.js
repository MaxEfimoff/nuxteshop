import axios from 'axios';

function getCategories({ commit }) {
  return new Promise((resolve, reject) => {
    axios.get('/api/categories')  
      .then((response) => {
        commit('SET_CATEGORIES', response.data);
      })
      .catch(error => console.log(error));
  });
}



export {
  getCategories,
};
