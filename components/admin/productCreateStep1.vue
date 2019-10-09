<template>
  <div class="product-create-wrapper">
    <div class="product-create-headerText">
      Please choose title of your product.
    </div>
    <h2 class="product-create-subtitle">
      No worries, you can change title later.
    </h2>
    <form  class="product-create-form">
      <div class="product-create-form-group">
        <div class="field product-create-form-field control has-icons-right">
          <input
            @input="emitFormData"
            v-model="formData.title"
            :maxLength="50"
            type="text"
            placeholder="e.g. Amazing product!"
            class="input is-large">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      formData: {
        title: ''
      }
    }
  },
  validations: {
    formData: {
      title: {
        required
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    emitFormData() {
      this.$emit('stepUpdated', {data: this.formData, isValid: this.isValid});
    }
  }
}
</script>

<style>

</style>