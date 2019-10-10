<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Target your customers</p>
    </header>
    <div class="card-content card-section">
      <form>
        <MultiLineTextInput label="How will customers benefit"/>
        <MultiLineTextInput label="What experience should customer have?"/>
      </form>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput';

export default {
  components: {
    MultiLineTextInput
  }
}
</script>

<style>

</style>