<template>
  <div class="admin-page">
    <Header title="Add new products">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <nuxt-link
            to="#"
            class="button is-medium is-light">
            New Product
          </nuxt-link>
          <nuxt-link
            to="/"
            class="button is-danger is-medium is-inverted is-outlined">
            User
          </nuxt-link>
        </div>
      </template>
    </Header>  
    <div class="centered">
      <div class="columns">
        <div class="box" @click="() => $router.push('/admin/products')">
          <div>
            Products
          </div>
        </div>
        <div class="box" @click="() => {}">
          <div>
            Blogs
          </div>
        </div>
        <div class="box" @click="() => {}">
          <div>
            Users
          </div>
        </div>
      </div>
    </div>-
  </div>
</template>
<script>
import Header from '../../components/shared/Header';

export default {
  middleware: 'admin',
  layout: 'admin',
  components: {
    Header
  }
}
</script>
<style scoped lang="scss">
  .admin-page {
    .centered {
      margin-top: 100px;
      display: flex;
      flex-direction: row;     /* make main axis horizontal (default setting) */
      justify-content: center; /* center items horizontally, in this case */
      align-items: center;     /* center items vertically, in this case */
    }
  }
  .box {
    height: 150px;
    width: 300px;
    display: flex;
    margin: 5px;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background-color: #58529f;
      color: white;
      transition: background-color 0.3s ease-out;
    }
    > div {
      align-self: center;
      font-size: 50px;
      font-weight: bold;
    }
  }
</style>
