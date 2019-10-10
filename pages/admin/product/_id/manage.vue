<template>
<div class="full-page-takeover-window">
  <div class="manage-page">
    <Header
      title="Some product name"
      exitLink="/admin/products">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            @click="() => {}"
            class="button is-primary is-inverted is-medium is-outlined">
            Save
          </button>
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
              <component :is="activeComponent" />
              <!-- <TargetCustomers />
              <LandingPage />
              <Price />
              <Status /> -->
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

import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.getProduct(this.$route.params.id);
  },
  computed: {
    ...mapState('products', ['product']),
  },
  methods: {
    ...mapActions("products", ['getProduct']),
  },
  mixins: [MultiComponentMixin],
  layout: 'instructor',
  components: { 
    Header,
    TargetCustomers,
    LandingPage,
    Price,
    Status
  },
  data() {
    return {
      steps: [
        'TargetCustomers', 
        'LandingPage', 
        'Price', 
        'Status'
      ],
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
