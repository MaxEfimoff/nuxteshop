function isAuthenticated(state) {
  return !!state.user
}

function isAdmin(state) {
  return state.user && state.user.role && state.user.role === 'admin'
}

export {
  isAuthenticated,
  isAdmin
};
