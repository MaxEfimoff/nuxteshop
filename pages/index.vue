<template>
  <div>
    <Banner />
    <section class="section">
      <div class="container">
        <h1 class="title">Bikes Avaible</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <ItemCard />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '~/components/shared/Banner';
import ItemCard from '~/components/ItemCard';
import BlogCard from '~/components/BlogCard';

export default {
  components: {Banner, ItemCard, BlogCard}
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
