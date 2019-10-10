<template>
  <div>
    <Header title="Add new products">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <nuxt-link
            to="/admin/product/createproduct"
            class="button is-medium is-light">
            New Product
          </nuxt-link>
          <nuxt-link
            to="/"
            class="button is-danger is-medium is-inverted is-outlined">
            User
          </nuxt-link>
        </div>
      </template>
    </Header> 
    <div class="products-page">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h1 class="products-page-title">Your Products</h1>
            <!-- Iterate Products -->
            <div v-for="product in products" :key="product._id" class="tile is-ancestor">
              <div class="tile is-parent is-12">
                <!-- Navigate to product manage page -->
                <nuxt-link :to="'#'" class="tile tile-overlay-container is-child box">
                  <div class="tile-overlay">
                    <span class="tile-overlay-text">
                      Update Product
                    </span>
                  </div>
                  <div class="columns">
                    <div class="column is-narrow">
                      <figure class="image is-4by2 is-128x128">
                        <img :src="product.image || 'https://via.placeholder.com/150'">
                      </figure>
                    </div>
                    <div class="column">
                      <p class="title">{{ product.title }}</p>
                      <p class="subtitle">
                        {{ product.subtitle || 'No subtitle provided'}}
                      </p>
                      <span class="tag"
                        :class="createStatusClass(product.status)">{{ product.status || 'No status provided' }}
                      </span>
                    </div>
                    <div class="column is-narrow flex-centered">
                      <div class="price-title">
                        {{ product.price || 0}}
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../../../components/shared/Header';
import { mapState, mapActions } from 'vuex';

export default {
  layout: 'admin',
  components: {
    Header
  },
  created() {
    this.getUserProducts();
  },
  computed: {
    ...mapState('admin', ['products'])
  },
  methods: {
    ...mapActions('admin', ['getUserProducts']),
    createStatusClass(status) {
      if(!status) return '';
      if (status === 'published') return 'is-success';
      if (status === 'active') return 'is-primary';
      if (status === 'inactive') return 'is-warning';
      if (status === 'deleted') return 'is-danger';
    }
  }
}
</script>
<style scoped lang="scss">
  .tile-image {
    float: left;
  }
  .price-title {
    font-size: 40px;
    font-weight: bold;
  }
  .flex-centered {
    align-items: center;
    justify-content: flex-end;
    display: flex;
  }
  .tile-overlay-container {
    position: relative;
    &:hover {
      box-shadow: none;
    }
    &:hover > .tile-overlay {
      background-color: rgba(255,255,255,.9);
    }
    &:hover .tile-overlay-text {
      visibility: visible;
    }
    .tile-overlay {
      position: absolute;
      display: block;
      height: auto;
      bottom: 0;
      width: auto;
      right: 0;
      top: 0;
      left: 0;
      z-index: 2;
      cursor: pointer;
      &-text {
        color: #58529f;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 18px;
        white-space: pre-wrap;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: 700;
        white-space: nowrap;
      }
    }
  }
  .products-page {
    padding-top: 60px;
    &-title {
      font-size: 40px;
      font-weight: bold;
      padding-bottom: 20px;
    }
  }
</style>
