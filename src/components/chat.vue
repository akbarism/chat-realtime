<template>
      <div class="chat">
          <div class="nav-chat">
             <navBottom v-on:sendBack="backToList"/>
              <img @click="$emit('emitshow')" src="../assets/img/dp.png" alt="">
              <h3 @click="$emit('emitshow')"> awikwok</h3>
              <i class="fas fa-search mr-3 text-light"></i>
              <div class="../assets/img/icon-doc.svg"></div>
             <i class="fas fa-ellipsis-v" title="Menu"></i>
          </div>
          <div class="main-chat">
              <div :class="[message.author === authUser.email ? 'me' : 'you']" v-for="message in messages" :key="message">
                  <div :class="[message.author === authUser.email ? 'balon-chat-me' : 'balon-chat-you']" >
                      <article :class="[message.author === authUser.email ? 'isi-chat' : 'isi-chat-you']" >
                         {{message.message}}
                      </article>
                  </div>
              </div>
          </div>
          <div class="text-here">
              <input @keyup.enter="send" v-model="message" type="text" placeholder="type message">
              <img src="../assets/img/new-send.png" alt="" @click="send">
         </div>
      </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
import navBottom from './module/navBottom.vue';

export default {
 name: 'chat',
 components: {
     navBottom,
 },
 data() {
     return {
         message: null,
         messages: [],
         authUser: {},
     }
 },
 methods: {
     send(){
         db.collection('chat').add({
             message: this.message,
             author: this.authUser.email,
             createdAt: new Date()
         })
     },
     fetchMessages() {
         db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
             let allMessages = []
              querySnapshot.forEach(doc => {
                allMessages.push(doc.data())
              })
              this.messages = allMessages;
              this.message = null
         })
     },
     backToList() {
            document.querySelector(".chat").style.display = 'none'
        },
    navContact(){
         for (let i = 0; i < this.profil.length; i++) {
         if (this.profil[i].displayName === this.myContact) {
         this.bannerName = this.profil[i]
        }
      }
    }
 },
 created() {
     firebase.auth().onAuthStateChanged(user => {
         if (user) {
             this.authUser = user
         }else {
             this.authUser = {}
         }
     })

     this.fetchMessages();
     this.navContact();
 }
}
</script>

<style scoped>
.chat{
    display: none;
    position: absolute;
    top: 0;
    z-index: 3;
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
    width: 800px;
    cursor: pointer;
}
.main-chat{
    width: 100%;
    height: 503px;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
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
    width: 55px;
    height: 40px;
    margin-left: 15px;
    margin-top: 3px;
    cursor: pointer;
}
.fas{
    font-size: 25px;
    color: #ffffff;
}
.me{
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 5px 5px 15px 0px;
}
.balon-chat-me{
    display: flex;
    justify-content: flex-end;
    width: 60%;
    padding-right: 5px ;
}
.isi-chat{
    padding: 5px 10px 10px 10px;
    background: #ffffff;
    border-radius: 20px 20px 0px 20px;
    
}
.you{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 5px 5px 15px 0px;
}
.you img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.balon-chat-you{
    display: flex;
    justify-content: flex-start;
    width: 60%;
    padding-right: 5px ;
}
.isi-chat-you{
    padding: 5px 10px 5px 10px;
    background: #6DB4F2;
    border-radius: 20px 20px 20px 0;
    
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