<template>
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
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

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
</style>