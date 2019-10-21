<template>
  <div>
    <Promo
      :promo="promo"
    />
    <section class="section">
      <div class="container">
        <h1 class="title">Bikes Avaible</h1>
        <div class="columns is-multiline">
          <div
            v-for="product in products"
            :key="product._id"
            class="column is-one-quarter">
            <ItemCard :product="product"/>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div
        class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in blogs.featured" :key="blog._id" class="column is-one-quarter">
            <BlogCard 
              :blog="blog"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Promo from '~/components/shared/Promo';
import ItemCard from '~/components/ItemCard';
import BlogCard from '~/components/BlogCard';

import { mapState, mapActions } from 'vuex';

export default {
  components: {Promo, ItemCard, BlogCard},
  // fetch({store}) {
  //   store.dispatch('promos/getPromo')
  // },
  created() {
    this.getPromo();
    this.getProducts();
    this.getFeaturedBlogPosts();
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapState('blogs', ['blogs']),
    ...mapState('promos', ['promo']),
    ...mapState({coursePromo: state => {
      return state.promos.promo || {}
      }})
  },
  methods: {
    ...mapActions("promos", ['getPromo']),
    ...mapActions("products", ['getProducts']),
    ...mapActions('blogs', ['getBlogPosts', 'getFeaturedBlogPosts']),
    
  },
}
</script>

<style scoped lang="scss">
  // card item
  
  // card item end


  // Home page
  .links {
    padding-top: 15px;
  }
</style>
