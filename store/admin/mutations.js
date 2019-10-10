function SET_PRODUCTS(state, products) {
  state.products = products;
}

function SET_PRODUCT(state, product) {
  state.product = product;
}

function ADD_LINE(state, field) {
  state.product[field].push({value: ''});
}

function REMOVE_LINE(state, {field, index}) {
  state.product[field].splice(index, 1)
}

function SET_LINE_VALUE(state, {field, index, value}) {
  state.product[field].value = value
}

export {
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_LINE,
  REMOVE_LINE,
  SET_LINE_VALUE
};