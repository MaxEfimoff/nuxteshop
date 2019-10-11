<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Status</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Status</label>
        <div class="select is-medium">
          <select
            :value="product.status"
            @change="($event) => updateProductStatus($event, 'status')"
          >
            <option value="default">Change Status</option>
            <option value="active">
              Active
            </option>
            <option value="published">
              Published
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateProductStatus(event, field) {
      const value = event.target.value;
      this.$emit('productStatusUpdated', {value, field})
    }
  }
}
</script>

<style>

</style>