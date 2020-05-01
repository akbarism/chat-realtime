<template>
  <div class="my-profile">
      <nav class="nav-profile d-flex align-items-center p-3">
          <i @click="$emit('substitute')" class="fas fa-chevron-left text-light"></i>
          <h3 class="text-light ml-3 mt-1">Profile</h3>
      </nav>
      <div class="parent">
      <div class="ur-photo">
          <img src="../assets/img/isyana-sarasvati.jpg" alt="" data-toggle="modal" data-target="#exampleModal">
          <modal/>
      </div>
      <section class="ur-name">
          <section class="sub"><p class="font-weight-bold">Your Name</p></section>
          <section class="dwn">
              <h4 class="font-weight-">Isyana sarasvati</h4>
              <i class="fas fa-pen"></i>
          </section>
      </section>
      <section class="ur-info">
          <section class="sub"><p class="font-weight-bold">Status</p></section>
          <section class="dwn">
              <p class="font-weight-">Hi Sayang...  I'm using centiMeter.</p>
              <i class="fas fa-pen"></i>
          </section>
      </section>
      <section class="ur-location">
          <section class="sub"><p class="font-weight-bold">Location</p></section>
          <section class="map-here">
          </section>
      </section>
      </div>
  </div>
</template>

<script>
import modal from '../components/module/modal.vue';

export default {
    name: "myProfile",
    components: {
        modal,
    }
}
</script>

<style scoped>
    .my-profile{
        display: none;
    }
    .show-profile{
        width: 400px;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .nav-profile{
        width: 100%;
        height: 60px;
        background: rgb(5, 13, 20);
    }
    .parent{
        width: 100%;
        height: 560px;
        background: #ffffff ;
        overflow-y: scroll;
        padding: 0 5px 0 5px;
    }
    .ur-photo{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        background: #3470BF;
        border: solid 1px rgba(0, 0, 0, 0.12);
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
    }
    .ur-photo img{
        width: 170px;
        height: 170px;
        border-radius: 50%;
        object-fit: cover;
        cursor: grab;
    }
    .ur-name{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100px;
        background: #ffffff;
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
    }
    .sub{
        width: 100%;
        height: 30px;
        padding: 10px;
    }
    .dwn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70px;
        padding: 0 10px 0 20px;
    }
    .ur-info{
        width: 100%;
        height: 100px;
        background: #ffffff;
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
    }
    .ur-location{
        width: 100%;
        height: 300px;
        background: #ffffff;
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
    }
    .fas {
        font-size: 20px;
    }
    /* ---------------- css for styling scroll ---------------------------*/
::-webkit-scrollbar {
  width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}
/* Handle */
::-webkit-scrollbar-thumb {
  /* background: #888;  */
  background: #575965;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /* background: #555;  */
  background: #c3c4c8;
}
/* ----------styling scroll end -------------- */
</style>