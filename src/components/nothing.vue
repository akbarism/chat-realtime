<template>
 <div class="nothing">
     <nav class="nav-not"></nav>
     <div>
         <div class="body">
             <img src="../assets/img/logo-gradient.png" alt="">
             <p>Please Select a chat to start messaging</p>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    name: 'nothing'
}
</script>

<style scoped>
 .nothing{
     display: flex;
     position: absolute;
     flex-direction: column;
     width: 966px;
     height: 100vh;
     left: 400px;
     top: 0;
     border-left: 1px solid rgba(0, 0, 0, 0.12);
     background: #e0e0e0;
     }
 .nav-not{
    display: flex;
    height: 60px;
    width: 100%;
    background: rgb(5, 13, 20);
    border-left: 1px solid rgba(0, 0, 0, 0.12);
 }
 .body {
     width: 100%;
     height: 565px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 .body img {
     width: 230px;
     height: 200px;
     margin-top: -50px;
 }
 .body p {
     font-size: 30px;
     font-weight: 550;
     margin-top: 30px;
 }
 @media only screen and (max-width: 600px) {
  .nothing {
      display: none;
  }
 }
</style>