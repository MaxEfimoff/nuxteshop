<template>
  <div class="full-page-takeover-window">
    <div class="full-page-takeover-page">
      <Header
        :title="`Step ${this.activeStep} of 2`"
        exitLink="/admin/products" />
      <div class="full-page-takeover-header-bottom-progress">
        <div :style="{width: progress}"
             class="full-page-takeover-header-bottom-progress-highlight">
        </div>
      </div>
      <div class="product-create full-page-takeover-container">
        <div class="container">
          <keep-alive>  
            <component
              :is='activeComponent'
              ref='activeComponent'
              @stepUpdated="mergeFormData"
            />
          </keep-alive>
        </div>
        <div class="full-page-footer-row">
          <div class="container">
            <div class="full-page-footer-col">
              <div v-if="!isFirstStep">
                <a @click.prevent="_decrementStep" class="button is-large">Previous</a>
              </div>
              <div v-else class="empty-container">
              </div>
            </div>
            <div class="full-page-footer-col">
              <div>
                <button
                  v-if="!isLastStep"
                  :disabled="!canProceed"
                  @click.prevent="_incrementStep"
                  class="button is-large float-right">
                  Continue
                </button>
                <button
                  v-else
                  :disabled="!canProceed"
                  @click="createProduct"
                  class="button is-success is-large float-right">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/shared/Header';
import ProductCreateStep1 from '~/components/admin/productCreateStep1';
import ProductCreateStep2 from '~/components/admin/productCreateStep2';
import MultiComponentMixin from '~/mixins/MultiComponentMixin';
import { mapState, mapActions } from 'vuex';

export default {
  layout: 'instructor',
  mixins: [MultiComponentMixin],
  components: {
    Header,
    ProductCreateStep1,
    ProductCreateStep2
  },
  created() {
    this.getCategories();
  },
  data() {
    return {
      steps: ['ProductCreateStep1', 'ProductCreateStep2'],
      canProceed: false,
      formData: {
        title: '',
        category: ''
      }
    }
  },
  computed: {
    ...mapState('category', ['categories']),
  },
  methods: {
    ...mapActions("category", ['getCategories']),
    _incrementStep() {
      // Calling method from the mixin
      this.incrementStep()
      this.$nextTick(() => {
        this.canProceed = this.$refs.activeComponent.isValid;
      })
    },
    _decrementStep() {
      // Calling method from the mixin
      this.decrementStep()
      this.canProceed = true;
    },
    mergeFormData({ data, isValid }) {
      this.formData = { ...this.formData, ...data };
      this.canProceed = isValid;
    },
    createProduct() {
      this.$store.dispatch('admin/createProduct', this.formData)
        .then(() => this.$router.push('/admin/products'))
        .catch((error) => this.$toasted.show('Wrong email or password'), {duration: 2000})
    }
  }
}
</script>

<style lang="scss">
  .float-right {
    float: right;
  }
  .empty-container {
    width: 1px;
    height: 1px;
  }
  .product-create {
    &-wrapper {
      margin-top: 60px;
      text-align: center;
    }
    &-headerText {
      font-weight: 500;
      line-height: 1.1;
      margin-top: 21px;
      margin-bottom: 10.5px;
      font-size: 36px;
      font-weight: 300;
    }
    &-subtitle {
      font-size: 24px;
      font-weight: 300;
      margin-top: 21px;
      margin-bottom: 10.5px;
    }
    &-form {
      margin-top: 60px;
      &-group {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-field {
        min-width: 552px;
      }
      .select {
        width: 100%;
        >select {
          width: 100%;
        }
      }
    }
  }
</style>
