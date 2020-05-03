<template>
  <div class="container-nav" @click="$emit('sendBack')">
    <div class="list">
      <i class="fas fa-chevron-left text-light"></i>
    </div>
    <div class="space">
      <div class="slash"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navBottom',
}
</script>

<style scoped>
.container-nav {
  display: flex;
  align-items: center;
  width: 50px;
  height: 60px;
  bottom: 0;
  background: rgb(5, 13, 20);
  padding: 3px;
  z-index: 5;
}
.container-nav img {
  height: 40px;
  width: 50px;
}
.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 53px;
  width: 80%;
  /* border-right: 3px solid #3470BF; */
}
.send-msg {
  width: 50%;
  height: 53px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.space {
  width: 10%;
}
.slash {
  width: 2px;
  height: 60px;
  background: #3470bf;
  transform: rotate(20deg);
}
.fas {
  font-size: 24px;
}
@media only screen and (min-width: 600px) {
  .container-nav {
    display: none;
  }
}
</style>