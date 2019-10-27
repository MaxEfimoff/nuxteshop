<template>
  <div>
    <ProductPromo
      :title="product.title"
      :subtitle="product.subtitle"
      :author="product.author">
      <ProductPromoCard
        :price="product.price"
        :discountedPrice="product.discountedPrice"
        :navigateTo="product.productLink"
        :requirements="product.requirements"
        :image="product.image"/>
    </ProductPromo>
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <div class="section">
            <div class="what-you-get">
              <div class="what-you-get-title">
                Product features
              </div>
              <ul class="what-you-get-items">
                <!-- TODO: Iterate product wsl -->
                <li
                  v-for="wsl in product.wsl"
                  :key="wsl.value" class="what-you-get-item">
                  <span>{{ wsl.value }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="section product-description p-t-none">
            <div class="product-description-title">Product Info</div>
            <div class="product-description-details">
              <div v-html="product.description"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductPromo from '~/components/ProductPromo';
import ProductPromoCard from '~/components/ProductPromoCard';

export default {
  created() {
    this.getProductBySlug(this.$route.params.slug);
  },
  methods: {
    ...mapActions('products', ['getProductBySlug']),
  },
  computed: {
    ...mapState('products', ['product']),
  },
  components: {
    ProductPromo,
    ProductPromoCard
  }
}
</script>

<style lang="scss">
  .what-you-get {
    background-color: #f9f9f9;
    border: 1px solid #dedfe0;
    padding: 10px 15px;
    &-title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-items {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 17px;
      width: 45%;
    }
  }
  .product-description {
    &-title {
      font-size: 26px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &-details {
      font-size: 18px;
      ul {
        list-style: disc;
        margin-left: 20px
      }
      ol {
        list-style: disc;
        margin-left: 20px
      }
      strong {
        font-size: 20px;
      }
      p {
        height: 30px;
      }
    }
  }
</style>
