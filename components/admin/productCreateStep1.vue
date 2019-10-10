<template>
  <div class="product-create-wrapper">
    <div class="product-create-headerText">
      Please choose title of your product.
    </div>
    <h2 class="product-create-subtitle">
      No worries, you can change title later.
    </h2>
    <form @input="emitFormData" class="product-create-form">
      <div class="product-create-form-group">
        <div class="field product-create-form-field control has-icons-right">
          <TextInputWithCount
            v-model="formData.title"
            :v="$v.formData.title"
            :maxLength="50"/>
          <div v-if="$v.formData.title.$error" class="form-error">
            <span v-if="!$v.formData.title.required" class="help is-danger">Title is required</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import TextInputWithCount from '../../components/form/TextInputWithCount'

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
  },
  components: {
    TextInputWithCount
  }
}
</script>

<style>

</style>