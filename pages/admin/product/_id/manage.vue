<template>
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
                  <a @click.prevent="navigateTo(1)"
                     :class="'active'">Target Your customers
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a @click.prevent="navigateTo(2)">
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
                  <a @click.prevent="navigateTo(3)">
                    Price
                  </a>
                </li>
                <li>
                  <!-- display Status -->
                  <a @click.prevent="navigateTo(4)">
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
</template>

<script>
import Header from '~/components/shared/Header';
import TargetCustomers from '~/components/admin/TargetCustomers';
import LandingPage from '~/components/admin/LandingPage';
import Price from '~/components/admin/Price';
import Status from '~/components/admin/Status';

export default {
  layout: 'instructor',
  components: { 
    Header,
    TargetCustomers,
    LandingPage,
    Price,
    Status
  },
  computed: {
    activeComponent() {
      return this.steps[this.activeStep -1];
    }
  },
  methods: {
    navigateTo(step) {
      this.activeStep = step;
    }
  },
  data() {
    return {
      steps: [
        'TargetCustomers', 
        'LandingPage', 
        'Price', 
        'Status'
      ],
      activeStep: 1
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
