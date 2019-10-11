<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Product Landing Page</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Product title</label>
          <div class="control">
            <input
              :value="product.title"
              @input="($event) => productValueUpdated($event, 'title')"
              class="input is-medium"
              type="text"
              placeholder="Dart and Flutter From Zero to Hero ">
          </div>
        </div>
        <div class="field">
          <label class="label">Product subtitle</label>
          <div class="control">
            <input
              :value="product.subtitle"
              @input="($event) => productValueUpdated($event, 'subtitle')"
              class="input is-medium"
              type="text"
              placeholder="Ride everywhere you want!">
          </div>
        </div>
        <div class="field">
          <label class="label">product description</label>
          <div class="control">
            <textarea
              :value="product.description"
              @input="($event) => productValueUpdated($event, 'description')"
              class="textarea is-medium"
              type="text"
              placeholder="Write something catchy about the product">
            </textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select
              :value="product.category._id"
              @change="($event) => productCategoryUpdated($event)"
              >
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
                >
                {{ category.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Product Image</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img
                  :src="product.image">
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                  :value="product.image"
                  @input="($event) => productValueUpdated($event, 'image')"
                  class="input is-medium"
                  type="text"
                  placeholder="">
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">product Link</label>
          <div class="control">
            <input
              :value="product.productLink"
              @input="($event) => productValueUpdated($event, 'productLink')"
              class="input is-medium"
              type="text"
              placeholder="">
          </div>
        </div>
        <div class="field">
          <label class="label">product Video Link</label>
          <div class="control">
            <input
              :value="product.promoVideoLink"
              @input="($event) => productValueUpdated($event, 'promoVideoLink')"
              class="input is-medium"
              type="text"
              placeholder="">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.getCategories();
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    productValueUpdated(event, field) {
      const value = event.target.value;
      this.$emit('productValueUpdated', {value, field})
    },
    productCategoryUpdated(event) {
      const value = event.target.value;
      const foundCategory = this.categories.find(c => c._id === value)
      this.$emit('productCategoryUpdated', foundCategory);
    },
    ...mapActions("category", ['getCategories']),
  },
  computed: {
    ...mapState('category', ['categories'])
  }
}
</script>

<style>

</style>