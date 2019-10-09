<template>
  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="brand-title">NUXT eShop</h1>
      </nuxt-link>
      <!-- Adds click to open -->
      <!-- Adds active class -->
      <a @click="() => {}"
         role="button"
         class="navbar-burger burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- Adds active class -->
    <div id="navbarBasicExample"
         class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Items
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          Blogs
        </nuxt-link>
        <nuxt-link to="#" class="navbar-item">
          About
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuthenticated">
              <figure class="image avatar is-48x48 m-r-sm">
                <img class="is-rounded" :src="user.avatar">
              </figure>
              <div class="m-r-sm m-b-sm">
                Welcome {{ user.username }}!
              </div>
              <!-- If Admin -->
              <button
                 v-if="isAdmin" class="button is-link is-outlined"
                 @click="() => $router.push('/admin')">
                Admin
              </button>
              <a class="button is-primary" @click="logout">
                Logout
              </a>
            </template>
            <template v-else>
              <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="button is-light">
                Log in
              </nuxt-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'isAdmin']),
    ...mapState('auth', ['user']),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      .then(() => this.$router.push('/'))
      .catch((error) => console.log(error))
  }
  }
}
</script>

<style lang="scss" scoped>
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
  }
  .avatar {
    margin-right: 5px;
  }
</style>
