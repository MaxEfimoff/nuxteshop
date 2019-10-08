import axios from 'axios';
import store from '..';

function login({ commit }, data) {
  return new Promise((resolve, reject) => {
    axios.post('/api/users/login', data)  
      .then((response) => {
        commit('SET_USER', response.data);
      })
      .catch(error => console.log(error));
  });
}

function logout({ commit }) {
  return new Promise((resolve, reject) => {
    axios.post('/api/users/logout')  
      .then((response) => {
        commit('SET_USER', null);
      })
      .catch(error => console.log(error));
  });
}


function getAuthUser({ commit, state }) {
  const authUser = state.user
  if(state.user) {return Promise.resolve.authUser}

  return this.$axios.$get('/api/users/me')
    .then((user) => {
      commit('SET_USER', user);
      return state.user;
    })
    .catch((error) => {
      commit('SET_USER', null);
      return Promise.reject(error);
    })
}

export {
  login,
  logout,
  getAuthUser,
};
