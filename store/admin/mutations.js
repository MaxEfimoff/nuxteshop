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
  state.product[field].splice(index, 1);
}

function SET_LINE_VALUE(state, {field, index, value}) {
  state.product[field][index].value = value;
}

function SET_PRODUCT_VALUE(state, {field, value}) {
  state.product[field] = value;
}

function SET_PRODUCT_PRICE(state, {field, value}) {
  state.product[field] = value;
}

function SET_PRODUCT_STATUS(state, {field, value}) {
  state.product[field] = value;
}

function SET_PRODUCT_CATEGORY(state, value) {
  state.product['category'] = value;
}

function SET_CAN_UPDATE_PRODUCT(state, canUpdate) {
  state.canUpdateProduct = canUpdate;
}

export {
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_LINE,
  REMOVE_LINE,
  SET_LINE_VALUE,
  SET_PRODUCT_VALUE,
  SET_PRODUCT_PRICE,
  SET_PRODUCT_STATUS,
  SET_PRODUCT_CATEGORY,
  SET_CAN_UPDATE_PRODUCT
};