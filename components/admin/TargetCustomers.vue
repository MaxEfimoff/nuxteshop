<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Target your customers</p>
    </header>
    <div class="card-content card-section">
      <form>
        <MultiLineTextInput
          @addClicked="addLine('wsl')"
          @removeClicked="removeLine($event, 'wsl')"
          @valueUpdated="updateLine($event, 'wsl')"
          label="How will customers benefit"
          :lines="product.wsl"
          />
        <MultiLineTextInput
          @addClicked="addLine('requirements')"
          @removeClicked="removeLine($event, 'requirements')"
          @valueUpdated="updateLine($event, 'requirements')"
          label="What experience should customer have?"
          :lines="product.requirements"
          />
      </form>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput';

import { mapState, mapActions } from 'vuex';

export default {
  components: {
    MultiLineTextInput
  },
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    addLine(field) {
      this.$store.commit('admin/ADD_LINE', field)
    },
    removeLine(index, field) {
      this.$store.commit('admin/REMOVE_LINE', {field, index})
    },
    updateLine({value, index}, field ) {
      this.$store.dispatch('admin/updateLine', {field, value, index})
    }
  }
}
</script>

<style>

</style>