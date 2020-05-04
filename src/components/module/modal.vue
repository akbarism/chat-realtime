<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content" v-for="item in personalData" :key="item.id">
          <img :src="item.img" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'modal',
    computed: {
      personalData() {
        return this.$store.state.personalData
      }
    },
    methods: {
       getMyData () {
            this.$store.commit('GET_PROFIL')
        },
    },
    created() {
      this.getMyData();
    }
}
</script>

<style>
.modal-content img {
  height: 500px;
}
</style>