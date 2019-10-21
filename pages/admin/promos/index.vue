
<template>
  <div class="hpromos-page">
    <div class="container">
      <h1 class="title">Course Promos</h1>
      <portal-target
        v-for="promo in promos"
        :key="promo._id"
        :name="`modal-view-promo-${promo._id}`" />
      <table class="hpromos-table table is-responsive"
        v-for="promo in promos"
        :key="promo._id">
        <thead>
          <tr class="main-table-row">
            <th>Image</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr @click="openModal('1')" :class="{'is-active': activePromo._id === promo._id}" class="table-row">
            <td>{{ promo.image || 'Not set'}}</td>
            <td>{{ promo.title || 'Not set'}}</td>
            <td>{{ promo.subtitle || 'Not set'}}</td>
            <td>Active/ Inactive</td>
            <td class="modal-td" v-show="false">
            <portal :to="`modal-view-promo-${promo._id}`">
              <Modal
                @submitted="activatePromo($event, promo._id)"
                ref="modal-1"
                :showButton="false"
                actionTitle="Make Active"
                openTitle="Favorite"
                title="Make Course Promo">
                <div>
                  <div class="subtitle">
                    Title: Some Title
                  </div>
                  <div class="subtitle">
                    Subtitle: Some Subtitle
                  </div>
                  <figure class="image is-3by1">
                    <img :src="promo.image || 'https://via.placeholder.com/150'" width="200px">
                  </figure>
                </div>
              </Modal>
            </portal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

import Modal from '~/components/shared/Modal';
export default {
  middleware: 'admin',
  components: {
    Modal
  },
  methods: {
    ...mapActions('admin', ['getPromos']),
    openModal(modalId) {
      const modal = this.$refs[`modal-${modalId}`][0]
      modal.openModal()
    },
    activatePromo({ closeModal }, promoId) {
      this.$store.dispatch('admin/activatePromo', promoId)
      // .then(_ => closeModal())
    }
  },
  created() {
    this.getPromos();
  },
  computed: {
    ...mapState('admin', ['promos']),
    activePromo() {
      return this.$store.state.promos.promo;
    }
  },
}
</script>
<style scoped lang="scss">
  .heroes-page {
    max-width: 1000px;
    margin: 0 auto 5rem auto;
    margin-top: 40px;
  }
  .title {
    font-size: 45px;
    font-weight: bold;
  }
  .table-row {
    margin: 20px;
    &.isActive {
      background-color: #dfffe1
    }
    &:hover {
      cursor: pointer;
      background-color: #e4e4e4;
    }
  }
</style>
