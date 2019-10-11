<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Pricing</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Price of the product</label>
        <div class="control">
          <input
            :value="product.price"
            @input="($event) => updateProductPrice($event, 'price')"
            class="input is-medium"
            type="text"
            placeholder="179.99">
        </div>
      </div>
      <div class="field">
        <label class="label">Discounted Price for the product</label>
        <div class="control">
          <input
            :value="product.discountedPrice"
            @input="($event) => updateProductPrice($event, 'discountedPrice')"
            class="input is-medium"
            type="text"
            placeholder="9.99">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateProductPrice(event, field) {
      const value = event.target.value;
      this.$emit('productPriceUpdated', {value, field})
    }
  }
}
</script>

<style>

</style>