<template>
  <div>
    <section
      class="hero is-black is-medium">
      <div class="hero-body">
        <div
          class="hero-img"
          :style="{ background : `url(https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dw42f15f4c/images/blog/blog_australi_18_sale_1.jpg?sw=1920) no-repeat center center`}">
        </div>
        <div class="container">
          <h1 class="title">
            Super Sell-off
          </h1>
          <h2 class="subtitle">
            Super Amazing Bike Sell-off
          </h2>
          <a target="_" :href="'#'" class="button is-danger">Learn More!</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Bikes Avaible</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
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
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <!-- CARD-ITEM -->
            <div class="card">
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
              </div>
              <footer class="card-footer">
                <nuxt-link :to="'#'" class="card-footer-item">Read More</nuxt-link>
              </footer>
            </div>
            <!-- CARD-ITEM-END -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {}
}
</script>

<style scoped lang="scss">
  // card item
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
  // card item end


  // hero
  .hero-body {
    position: relative;
  }
  .hero-img {
    opacity: 0.8;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .user-avatar {
    display: inline-block;
  }
  .is-black {
    background-color: black;
  }
  .title {
    font-weight: bold;
    font-size: 45px;
  }
  .subtitle {
    /*font-weight: bold;*/
    font-size: 25px;
  }
  .author-name {
    font-size: 20px;
    font-weight: bold;
  }
  // hero

  // Home page
  .links {
    padding-top: 15px;
  }
</style>
