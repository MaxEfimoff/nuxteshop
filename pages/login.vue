<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input 
                    v-model="formData.email"
                    @blur="$v.formData.email.$touch()"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autofocus=""
                    autocomplete="email">
                  <div v-if="$v.formData.email.$error" class="form-error">
                    <span v-if="!$v.formData.email.required" class="help is-danger">Email is required</span>
                    <span v-if="!$v.formData.email.email" class="help is-danger">Email address is not valid</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.password"
                    @blur="$v.formData.password.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="current-password">
                  <div v-if="$v.formData.password.$error" class="form-error">
                    <span v-if="!$v.formData.password.required" class="help is-danger">Password is required</span>
                  </div>
                </div>
              </div>
              <!-- Login Button -->
              <button
                :disabled="$v.formData.$invalid"
                @click.prevent="login"
                class="button is-block is-info is-large is-fullwidth">
                Login
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a>Sign In With Google</a> &nbsp;·&nbsp;
            <nuxt-link to="/register">Sign Up</nuxt-link> &nbsp;·&nbsp;

            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';

export default {
  middleware: 'guest',
  data() {
    return {
      formData: {
        email: null,
        password: null
      }
    }
  },
  validations: {
    formData: {
        email: {
          email,
          required
        },
        password: {
          required
        }
      }
  },
  methods: {
    login() {
      this.$v.formData.$touch();

      if(!this.$v.$invalid) {
        axios.post('/api/users/login', this.formData)  
        .then((response) => {
          this.$store.commit('auth/SET_USER', response.data);
        })
        .then(() => this.$router.push('/'))
        .catch((error) => this.$toasted.show('Wrong email or password'), {duration: 2000})
      }
    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    height: 128px;
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>
