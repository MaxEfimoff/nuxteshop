<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw122f1469/images/inspiration/pdp_slider/2019/pdp_slider_p2-endurace-cf-sl-disc-8-di2_c1252.jpg?sw=848&sh=477&sm=cut&sfrm=jpg&q=80" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Some Title</p>
          <p class="subtitle is-6"><i>Some Subtitle</i></p>
        </div>
      </div>
      <div class="content">
        Some Description
        <br>
      </div>
      <div class="price-box">
        <span class="price">1500$</span>
        <span class="disc-price">999$</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="'#'" class="card-footer-item">Buy</a>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .card-image:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .price-box {
    text-align: right;
    .price {
      color: gray;
      font-size: 16px;
      text-decoration: line-through;
    }
    .disc-price {
      font-size: 21px;
      font-weight: bold;
    }
  }
</style>