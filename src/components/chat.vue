<template>
  <div class="chat">
    <div class="nav-chat">
      <navBottom v-on:sendBack="backToList" />
      <img @click="$emit('emitshow')" :src="navContact.img" alt />
      <h3>{{navContact.displayName}}</h3>
      <i class="fas fa-search mr-3 text-light"></i>
      <div class="../assets/img/icon-doc.svg"></div>
      <i class="fas fa-ellipsis-v" title="Menu"></i>
    </div>
    <div class="main-chat">
      <div
        :class="[message.author === authUser.email ? 'me' : 'you']"
        v-for="(message, id) in msgs"
        :key="id"
      >
        <div :class="[message.author === authUser.email ? 'balon-chat-me' : 'balon-chat-you']">
          <article
            :class="[message.author === authUser.email ? 'isi-chat' : 'isi-chat-you']"
          >{{message.message}}</article>
        </div>
      </div>
    </div>
    <div class="text-here">
      <input @keyup.enter="send" v-model="message" type="text" placeholder="type message" />
      <img src="../assets/img/new-send.png" alt @click="send" />
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
         contactName: this.$store.state.navContact,
         message: this.$store.state.message,
     }
 },
 computed: {
     navContact() {
         return this.$store.state.navContact        
     },
     msgs() {
         return this.$store.state.messages
     },
     msg() {
         return this.$store.state.message
     }
 },
 methods: {
     send(){
         db.collection('chat').add({
             message: this.message,
             author: firebase.auth().currentUser.email,
             received: this.navContact.email,
             createdAt: new Date()
         })
         this.message = null
     },
     target(displayName){
         this.$store.commit('TARGET', displayName)
     },
     fetchMessages() {
      this.$store.commit('FETCH')
      this.message = null
     },
     backToList() {
            document.querySelector(".chat").style.display = 'none'
        },
 },
 created() {
     firebase.auth().onAuthStateChanged(user => {
         if (user) {
             this.authUser = user
         }else {
             this.authUser = {}
         }
     })
    
     
 }
}
</script>

<style scoped>
.chat {
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
.chat-shrink {
  width: 615px;
  transition: 0.2s;
}
.nav-chat {
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  height: 66px;
  width: 100%;
  background: #3470bf;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.600);
}
.nav-chat img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
}
.nav-chat h3 {
  color: #ffffff;
  font-size: 21px;
  width: 800px;
  cursor: pointer;
}
.main-chat {
  width: 100%;
  height: 503px;
  padding: 15px;
  background: #e0e0e094;
  overflow-y: scroll;
}
.text-here {
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  background: rgb(5, 13, 20);
  padding: 0 15px 0 20px;
}
.text-here input {
  width: 900px;
  border: none;
  outline: none;
  padding: 10px 10px 10px 20px;
  border: 2px solid #3470bf;
}
.text-here img {
  width: 55px;
  height: 40px;
  margin-left: 15px;
  margin-top: 3px;
  cursor: pointer;
}
.fas {
  font-size: 25px;
  color: #ffffff;
}
.me {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 5px 5px 15px 0px;
}
.balon-chat-me {
  display: flex;
  justify-content: flex-end;
  width: 60%;
  padding-right: 5px;
}
.isi-chat {
  padding: 5px 10px 10px 10px;
  background: #ffffff;
  border-radius: 20px 20px 0px 20px;
}
.you {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 5px 5px 15px 0px;
}
.you img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.balon-chat-you {
  display: flex;
  justify-content: flex-start;
  width: 60%;
  padding-right: 5px;
}
.isi-chat-you {
  padding: 5px 10px 5px 10px;
  background: #6db4f2;
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
  .chat {
    display: none;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .chit {
    display: flex;
  }
  .main-chat {
    height: 605px;
  }
  .nav-chat h3 {
    width: 200px;
  }
  .text-here input {
    width: 300px;
  }
}
</style>