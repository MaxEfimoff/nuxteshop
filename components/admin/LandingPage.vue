<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Product Landing Page</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Product title</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="Dart and Flutter From Zero to Hero ">
          </div>
        </div>
        <div class="field">
          <label class="label">Product subtitle</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="Ride everywhere you want!">
          </div>
        </div>
        <div class="field">
          <label class="label">product description</label>
          <div class="control">
            <textarea
              class="textarea is-medium"
              type="text"
              placeholder="Write something catchy about the product">
            </textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select>
              <option value="default">Select Category</option>
              <!-- <option> </option> -->
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Product Image</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img
                  :src="''">
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                  class="input is-medium"
                  type="text"
                  placeholder="">
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">product Link</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="">
          </div>
        </div>
        <div class="field">
          <label class="label">product Video Link</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>