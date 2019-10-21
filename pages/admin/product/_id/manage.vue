<template>
<div class="full-page-takeover-window">
  <div class="manage-page">
    <Header
      title="Some product name"
      exitLink="/admin/products">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            @click="updateProduct"
            :disabled="!canUpdateProduct"
            class="button is-primary is-inverted is-medium is-outlined">
            Save
          </button>
        </div>
        <div class="full-page-takeover-header-button">
          <Modal
            openTitle="Favorite"
            openBtnClass="button is-primary is-inverted is-medium is-outlined"
            title="Make product Promo"
            @opened="applyPromoValues"
            @submitted="createPromo">
            <div>
              <form>
                <div class="field">
                  <label class="label">Promo title</label>
                  <span class="label-info">Suggested 64 Characters</span>
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="text"
                      v-model="productPromo.title"
                      placeholder="Amazing product discount">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Promo subtitle</label>
                  <span class="label-info">Suggested 128 Characters</span>
                  <input
                    class="input is-medium"
                    type="text"
                    v-model="productPromo.subtitle"
                    placeholder="Get all of the product for 9.99$">
                </div>
                <div class="field">
                  <label class="label">Product image</label>
                  <span class="label-info">Image in format 3 by 1 (720 x 240)</span>
                  <input
                    class="input is-medium"
                    type="text"
                    v-model="productPromo.image"
                    placeholder="Some image in format 3 by 1 (720 x 240)">
                  <figure class="image is-3by1">
                    <img :src="productPromo.image">
                  </figure>
                </div>
              </form>
            </div>
          </Modal>
        </div>

      </template>
    </Header>
    <div class="product-manage">
      <div class="container">
        <div class="columns">
          <div class="column is-3 p-lg">
            <!-- <aside class="menu is-hidden-mobile"> -->
            <aside class="menu">
              <p class="menu-label">
                Product Editing
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display Targetcustomers -->
                  <a 
                    @click.prevent="navigateTo(1)"
                    :class="activeComponentClass(1)">
                    Target Your customers
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a
                    @click.prevent="navigateTo(2)"
                    :class="activeComponentClass(2)">
                      Product Landing Page
                  </a>
                </li>
              </ul>
              <p class="menu-label">
                Product Managment
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display Price -->
                  <a 
                    @click.prevent="navigateTo(3)"
                    :class="activeComponentClass(3)">
                    Price
                  </a>
                </li>
                <li>
                  <!-- display Status -->
                  <a 
                    @click.prevent="navigateTo(4)"
                    :class="activeComponentClass(4)">
                    Status
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <keep-alive>
              <component
                :is="activeComponent" 
                :product="product"
                @productValueUpdated="handleProductUpdate"
                @productCategoryUpdated="handleCategoryUpdate"
                @productPriceUpdated="handlePriceUpdate"
                @productStatusUpdated="handleStatusUpdate"
                />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from '~/components/shared/Header';
import TargetCustomers from '~/components/admin/TargetCustomers';
import LandingPage from '~/components/admin/LandingPage';
import Price from '~/components/admin/Price';
import Status from '~/components/admin/Status';
import MultiComponentMixin from '~/mixins/MultiComponentMixin';
import Modal from '~/components/shared/Modal';

import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.getProduct(this.$route.params.id);
    this.getCategories();

  },
  computed: {
    ...mapState('admin', ['product', 'canUpdateProduct']),
    ...mapState('category', ['GetCategories']),
  },
  methods: {
    ...mapActions("admin", ['getProduct']),
    ...mapActions("category", ['getCategories']),
    handleProductUpdate({value, field}) {
      this.$store.dispatch('admin/updateProductValue', {field, value})
    },
    handlePriceUpdate({value, field}) {
      this.$store.dispatch('admin/updateProductPrice', {field, value})
    },
    handleStatusUpdate({value, field}) {
      this.$store.dispatch('admin/updateProductStatus', {field, value})
    },
    handleCategoryUpdate(value) {
      this.$store.dispatch('admin/updateProductCategory', value)
    },
    updateProduct() {
      this.$store.dispatch('admin/updateProduct')
      .then(() => this.$toasted.success('Product updated!'), {duration: 2000})
      .catch((err) => this.$toasted.error('Somethind went wrong'), {duration: 2000})
    },
    applyPromoValues() {
      !this.productPromo.title && this.$set(this.productPromo, 'title', this.product.title);
      !this.productPromo.subtitle && this.$set(this.productPromo, 'subtitle', this.product.subtitle);
      this.$set(this.productPromo, 'image', this.product.image);
    },
    createPromo({closeModal}) {
      const promoData = {...this.productPromo};
      promoData.product = {...this.product};
      this.$store.dispatch('promos/createPromo', promoData)
      .then(() => {
        closeModal()
      })
    }
  },
  mixins: [MultiComponentMixin],
  layout: 'instructor',
  components: { 
    Header,
    TargetCustomers,
    LandingPage,
    Price,
    Status,
    Modal
  },
  data() {
    return {
      steps: [
        'TargetCustomers', 
        'LandingPage', 
        'Price', 
        'Status'
      ],
      productPromo: {
        title: '',
        subtitle: '',
        image: ''
      }
    }
  }
}
</script>

<style lang="scss">
.manage-page {
  .label-info {
    font-size: 13px;
    color: gray;
    font-style: italic;
  }
  .product-manage {
    padding-top: 40px;
    .menu {
      padding-top: 30px;
      &-label {
        font-size: 20px;
        color: black;
      }
      &-list {
        >li {
          font-size: 18px;
          margin-top: 10px;
          > a {
            &.is-active {
              background-color: transparent;
              color: inherit;
              border-left: 3px solid #58529f;
            }
          }
        }
      }
    }
    .card {
      &-section {
        padding: 40px;
      }
      &-header {
        &-title {
          padding: 0;
          color: #8F99A3;
          font-weight: 400;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
