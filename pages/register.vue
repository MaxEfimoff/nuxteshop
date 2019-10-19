<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.username"
                    @blur="$v.formData.username.$touch()"
                    autofocus=""
                    class="input is-large"
                    type="text"
                    placeholder="Username">
                  <div
                    v-if="$v.formData.username.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.username.required"
                      class="help is-danger">
                      Username is required
                    </span>
                    <span
                      v-if="!$v.formData.username.minLength"
                      class="help is-danger">
                      Username minimum length is 6 characters
                    </span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.name"
                    @blur="$v.formData.name.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Name">
                  <div
                    v-if="$v.formData.name.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.name.required"
                      class="help is-danger">
                      Name is required
                    </span>
                    <span
                      v-if="!$v.formData.name.minLength"
                      class="help is-danger">
                      Name minimum length is 6 characters
                    </span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.email"
                    @blur="$v.formData.email.$touch()"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email">
                  <div
                    v-if="$v.formData.email.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.email.required"
                      class="help is-danger">
                      Email is required
                    </span>
                    <span
                      v-if="!$v.formData.email.email"
                      class="help is-danger">
                      Email address is not valid
                    </span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.avatar"
                    @blur="$v.formData.avatar.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete="">
                  <div
                    v-if="$v.formData.avatar.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.avatar.url"
                      class="help is-danger">
                      Url format is not valid!
                    </span>
                    <span
                      v-if="!$v.formData.avatar.supportedFileType"
                      class="help is-danger">
                      Selected file type is not valid!
                    </span>
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
                    autocomplete="new-password">
                  <div
                    v-if="$v.formData.password.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.password.required"
                      class="help is-danger">Password is required</span>
                    <span
                      v-if="!$v.formData.password.minLength"
                      class="help is-danger">Password minimum length is 6 letters</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="formData.passwordConfirmation"
                    @blur="$v.formData.passwordConfirmation.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off">
                  <div
                    v-if="$v.formData.passwordConfirmation.$error"
                    class="form-error">
                    <span
                      v-if="!$v.formData.passwordConfirmation.required"
                      class="help is-danger">Password Confirmation is required</span>
                    <span
                      v-if="!$v.formData.passwordConfirmation.sameAs"
                      class="help is-danger">Password confirmation should be the same as password</span>
                  </div>
                </div>
              </div>
              <button
                :disabled="$v.formData.$invalid"
                @click.prevent="register"
                type="submit"
                class="button is-block is-info is-large is-fullwidth">Register</button>
            </form>
          </div>
          <p class="has-text-grey">
            <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength, url, sameAs } from 'vuelidate/lib/validators';
import { supportedFileType } from '@/helpers/validators'
import axios from 'axios';

export default {
  middleware: 'guest',
  data() {
    return {
      formData: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {
    formData: {
      username: {
        required,
        minLength: minLength(6)
      },
      name: {
        required,
        minLength: minLength(6)
      },
      email: {
        email,
        required,
        minLength: minLength(6)
      },
      avatar: {
        required,
        url,
        supportedFileType
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        minLength: minLength(6),
        sameAs: sameAs('password')
      }
    }
  },
  methods: {
    register() {
      this.$v.formData.$touch();
      
      if(!this.$v.$invalid) {
        axios.post('/api/users/register', this.formData) 
        .then(() => this.$router.push('/login'))
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
