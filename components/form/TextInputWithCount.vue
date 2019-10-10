<template>
  <div>
    <input
      :maxLength="maxLength"
      @blur="v.$touch()"
      @input="emitInputValue"
      type="text"
      placeholder="e.g. Amazing product!"
      class="input is-large">
      <span class="icon is-small is-right">
        {{ remainingLength }}
      </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: ''
    }
  },
  props: {
    maxLength: {
      type: Number,
      default: 50,
      required: false
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    remainingLength() {
      return this.maxLength - this.currentValue.length || 0
    }
  },
  methods: {
    emitInputValue($event) {
      this.currentValue = $event.target.value
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style>

</style>