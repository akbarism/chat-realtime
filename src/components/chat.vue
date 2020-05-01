<template>
      <div class="chat">
          <div class="nav-chat">
              <img @click="$emit('emitshow')" src="../assets/img/dp.png" alt="">
              <h3 @click="$emit('emitshow')"> awikwok</h3>
              <i class="fas fa-search mr-3"></i>
              <div class="../assets/img/icon-doc.svg"></div>
             <i class="fas fa-ellipsis-v" title="Menu"></i>
          </div>
          <div class="main-chat">
              <div class="me">
                  <div class="balon-chat">
                      <article class="isi-chat">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </article>
                      
                  </div>
              </div>
              <div class="me">
                  <div class="balon-chat">
                      <article class="isi-chat">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </article>
                      
                  </div>
              </div>
              <div class="you" v-for="you in 3" :key="you">
                  <div class="balon-chat">
                      <article class="isi-chat-you">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident,
                          sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </article>
                  </div>
              </div>
          </div>
          <div class="text-here">
              <input type="text" placeholder="type message">
              <img src="../assets/img/icon-sendr.png" alt="">
         </div>
      </div>
</template>

<script>


export default {
 name: 'chat',
}
</script>

<style scoped>
.chat{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 966px;
    height: 100vh;
    background: #ffffff;
    transition: 0.2s;
    left: 400px;
}
.chat-shrink{
    width: 615px;
    transition: 0.2s;
}
.nav-chat{
    display: flex;
    align-items: center;
    padding: 0 10px 0 10px;
    height: 60px;
    width: 100%;
    background: rgb(5, 13, 20);
    border-left: 1px solid rgba(0, 0, 0, 0.12);

}
.nav-chat img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
    cursor: pointer;
}
.nav-chat h3{
    color: #ffffff;
    font-size: 21px;
    width: 830px;
    cursor: pointer;
}
.main-chat{
    width: 100%;
    height: 503px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 15px;
    background: #e0e0e0;
    overflow-y: scroll;
}
.text-here{
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    background: rgb(5, 13, 20);
    padding: 0 15px 0 20px;
}
.text-here input{
    width: 900px;
    /* border-radius: 30px; */
    border: none;
    outline: none;
    padding: 10px 10px 10px 20px;
    border: 2px solid #3470BF;
}
.text-here img{
    width: 30px;
    height: 28px;
    margin-left: 30px;
    margin-top: -5px;
}
.fas{
    font-size: 25px;
    color: #ffffff;
}
.me{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 5px 5px 15px 5px;
}
.balon-chat{
    display: flex;
    justify-content: flex-end;
    width: 60%;
    padding-right: 5px ;
}
.isi-chat{
    padding: 5px 10px 5px 10px;
    background: #ffffff;
    border-radius: 15px 15px 15px 15px;
    
}
.isi-chat:nth-child(2){
    padding: 5px 10px 5px 10px;
    background: #ffffff;
    border-radius: 15px 15px 0px 15px;
    
}
.you{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 5px 5px 15px 5px;
}
.balon-chat{
    display: flex;
    justify-content: flex-end;
    width: 60%;
    padding-right: 5px ;
}
.isi-chat-you{
    padding: 5px 10px 5px 10px;
    background: #6DB4F2;
    border-radius: 15px 15px 15px 0;
    
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
 @media only screen and (max-width: 600px) {
     .chat{
         display: none;
         left: 0;
         width: 100%;
         height: 100vh;
     }
     .chit{
         display: flex;
     }
     .main-chat{
         height: 605px;
     }
     .nav-chat h3{
         width: 200px;
     }
     .text-here input{
         width: 300px;
     }
}
</style>