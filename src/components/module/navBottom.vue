<template>
  <div class="container-nav">
      <div class="list"></div>
      <div class="mainchat"></div> 
  </div>
</template>

<script>
export default {
    name: 'navBottom',
}
</script>

<style>
    .container-nav{
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0;
        background: rgb(5, 13, 20);
        padding: 5px;
    }
    .list{
        height: 55px;
        width: 50%;
        border-right: 3px solid #3470BF;
    }
    @media only screen and (min-width: 600px) {
        .container-nav{
            display: none;
        }
    }
</style>