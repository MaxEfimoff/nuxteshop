<template>
  <div class="product-create-wrapper">
    <div class="product-create-headerText">
      What category best fits the knowledge you'll share?
    </div>
    <h2 class="product-create-subtitle">If you're not sure about the right category, you can change it later.</h2>
    <form class="product-create-form">
      <div class="product-create-form-group">
        <div class="product-create-form-field">
          <div class="select is-large">
            <select
              v-model="formData.category"
              @change="emitFormData">
              <option value='default'>Select Category</option>
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
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      formData: {
        category: 'default'
      }
    }
  },
  validations: {
    formData: {
        category: {
          required
        }
      }
  },
  created() {
    this.getCategories();
  },
  computed: {
    ...mapState('category', ['categories']),
    isValid() {
      return this.formData.category !== 'default' && !this.$v.$invalid
    }
  },
  methods: {
    ...mapActions('category', ['getCategories']),
    emitFormData() {
      this.$emit('stepUpdated', {data: this.formData, isValid: this.isValid});
    }
  }
}
</script>

<style>

</style>