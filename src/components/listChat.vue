<template>
  <div class="list-chat">
    <!-- <div class="logo d-flex justify-content-center">
      <img src="../assets/img/centi-mater-fix.png" alt />
      <h3>centiMeter</h3>
    </div> -->
    <div class="nav-list" 
    >
      <img :src="personalData[0].img" @click="$emit('switch')" class="pp" alt />
      <img class="add-chat" src="../assets/img/icon-chating.svg" alt title="New Chat" />
      <div class="btn-group dropleft">
        <i
          class="fas fa-ellipsis-v"
          title="Menu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></i>
        <div class="dropdown-menu">
          <button @click="$emit('switch')" class="dropdown-item" type="button">Profile</button>
          <button class="dropdown-item" type="button">Dark Mode</button>
          <button class="dropdown-item" type="button" @click="logout">
            <p class="txt-dec">Log Out</p>
          </button>
        </div>
      </div>
    </div>
    <div class="search">
      <i class="fas fa-search srch"></i>
      <input type="text" placeholder="search something hehe" />
    </div>
    <div class="parent-chat">
      <div  v-for="Data in myData" :key="Data.id">
        <div class="child-chat" v-if="Data.email !== authUser.email" @click="switchToChat(Data.displayName)">
          <img :src="Data.img" alt />
          <div class="info-msg" >
            <div class="list-name" >
              <h6 >{{Data.displayName}}</h6>
            </div>
            <div class="msg">
              <p>{{msgs.messages}}</p>
            </div>
          </div>
          <div class="end-msg d-flex align-items-center" >
            <i class="fas fa-ellipsis-v" title="Menu"></i>
            <div v-if="!Data.info">Offline</div>
            <div v-else>Online</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'listChat',
    data() {
        return {
            listContact: [],
            authUser: {},
            navContact: '',
            logoutUser: firebase.auth().currentUser.uid
        }
    },
    computed: {
        myData() {
            return this.$store.state.myData
        },
        msgs() {
         return this.$store.state.messages
        },
        personalData() {
            return this.$store.state.personalData
        }
    },
    methods: {
        logout() {
          firebase.firestore().collection('user').doc(this.logoutUser)
            .update({
              info: false
            })
            .then(() => {
              firebase.auth().signOut()
              this.$router.go('/login') 
            })
            .catch(error => {
                console.log(error)
            })
            },
        getMyData () {
            this.$store.commit('GET_MY_DATA')
        },
        getProfile() {
            this.$store.commit('GET_PROFIL')
        },
        getContact() {
        this.$store.commit('SEND_CONTACT')
         },
        switchToChat(displayName) {
            this.$store.commit('TARGET', displayName)
            this.fetchMessage();
            document.querySelector(".nothing").style.display ='none'
            document.querySelector(".chat").style.display ='flex'
        },
        fetchMessage() {
        this.$store.commit('FETCH')
        },
    },

    created() {
        this.getMyData();
        this.authUser = firebase.auth().currentUser;
        this.getContact();
        
    }
}
</script>

<style scoped>
.list-chat {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 400px;
  overflow: hidden;
}
.hide-chat {
  display: none;
}
.logo {
  width: 100%;
  height: 60px;
  background: #3470bf;
  padding: 5px;
}
.logo h3 {
  color: #ffffff;
}
.nav-list {
  display: flex;
  align-items: center;
  width: 100%;
  height: 65px;
  background: #3470bf;
  padding: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.pp {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 200px;
  margin-left: 20px;
  cursor: pointer;
}
.search {
  height: 50px;
  background: #6db4f2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
}
.search input {
  margin-left: -35px;
  width: 390px;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 5px 0 5px 35px;
  outline: none;
}
.parent-chat {
  width: 100%;
  height: 450px;
  background: #ffffff;
  overflow-y: scroll;
}
.logo img {
  width: 50px;
  height: 43px;
  margin-right: 10px;
}
.add-chat {
  margin-top: 2px;
  width: 50px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.12);
}
.fas {
  display: flex;
  justify-content: center;
  width: 30px;
  z-index: 2;
  /* margin-right: -40px; */
  color: #ffffff;
  cursor: pointer;
}
.child-chat {
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  cursor: pointer;
}
.child-chat:hover {
  background: #e0e0e0;
}
.child-chat img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  margin-left: 12px;
}
.info-msg {
  display: flex;
  flex-direction: column;
  height: 55px;
  width: 230px;
}
.list-name {
  height: 25px;
  width: 100%;
  color: black;
}
.msg {
  height: 30px;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fa376c;
  margin-right: 5px;
}
.txt-dec {
  text-decoration: none !important;
  color: #000000;
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
  .list-chat {
    /* display: none; */
    width: 100%;
    height: 100vh;
  }
}
.srch {
  color: #000000;
}
</style>