<template>
  <div class="container-profile">
    <div class="nav-contact d-flex align-items-center pl-3">
      <i class="fas fa-times" @click="$emit('removemit')"></i>
      <h5>Info Contact</h5>
    </div>
    <div class="display-profile">
      <div class="info-contact">
        <img src="../assets/img/dp.png" alt />
      </div>
      <div class="email">
        <div class="name-contact d-flex flex-column">
          <p>Name</p>
          <h3>Awikwok</h3>
        </div>
        <div class="email-contact">
          <p>Email</p>
          <h3>Awikwok@gmail.com</h3>
        </div>
      </div>
      <div class="location p-2">
        <div>
          <p>Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'people',
    methods: {
        
    }
}
</script>

<style scoped>
.container-profile {
  display: none;
}
.now-profile {
  position: absolute;
  left: 1015px;
  top: 0;
  flex-direction: column;
  width: 351px;
  display: flex;
  height: 100vh;
}
.nav-contact {
  width: 100%;
  height: 60px;
  background: rgb(5, 13, 20);
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.fas {
  font-size: 30px;
  width: 50px;
  color: #ffffff;
  cursor: pointer;
}
.nav-contact h5 {
  margin-top: 5px;
  color: #ffffff;
}
.display-profile {
  width: 100%;
  height: 570px;
  background: #ffffff;
  overflow-y: scroll;
  padding: 0 5px 0 5px;
}
.info-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #3470bf;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.info-contact img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
}
.email {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  background: #ffffff;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
  padding: 10px;
}
.name-contact {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.name-contact p {
  font-weight: 600;
  padding: 0;
  margin: 1px;
}
.name-contact h3 {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 600;
}
.email-contact {
  width: 100%;
  height: 70px;
}
.email-contact p {
  font-weight: 600;
  padding: 0;
  margin: 1px;
}
.email-contact h3 {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 600;
}
.location {
  width: 100%;
  height: 500px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.location p {
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
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
</style>