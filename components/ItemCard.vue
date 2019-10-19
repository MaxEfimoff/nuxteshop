<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img :src="product.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ product.title }}</p>
          <p class="subtitle is-6"><i>by {{ product.author.name }}</i></p>
        </div>
      </div>
      <div class="content">
        {{ product.subtitle | shortenText(35) }}
        <br>
      </div>
      <div class="price-box">
        <span class="price">{{ product.price }}</span>
        <span class="disc-price">{{ product.discountedPrice }}</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="product.productLink" class="card-footer-item">Buy</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 4px 0px;
  }
  .card-image img {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
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