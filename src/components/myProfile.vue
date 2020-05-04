<template>
  <div class="my-profile">
    <nav class="nav-profile d-flex align-items-center p-3">
      <i @click="$emit('substitute')" class="fas fa-chevron-left text-light"></i>
      <h3 class="text-light ml-3 mt-1">Profile</h3>
    </nav>
    <div class="parent" v-for="(name, id) in personalData" :key="id">
      <div class="ur-photo" v-if="picture == null">
        <img :src="name.img" data-toggle="modal" data-target="#exampleModal" />
        <progress id="progress" :value="uploadValue" max="100" v-if="uploadValue !== 0"></progress>
        <i class="fas fa-camera edt-photo"></i>
        <input type="file" class="pick-files" @change="pickFiles" />
        <modal />
      </div>
      <div class="ur-photo" v-else>
        <img :src="picture" alt data-toggle="modal" data-target="#exampleModal" />
        <i class="fas fa-camera edt-photo"></i>
        <input type="file" class="pick-files" @change="pickFiles" />
        <modal />
      </div>
      <section class="ur-name">
        <section class="sub">
          <p class="font-weight-bold">Your Name</p>
        </section>
        <section class="dwn">
          <h4 class="nm">{{name.displayName}}</h4>
          <input
            type="text"
            id="some"
            class="edt"
            v-model="name.displayName"
            @keyup.enter="updateName"
          />
          <i class="fas fa-pen" @click="editName" for="some"></i>
        </section>
      </section>
      <section class="ur-info">
        <section class="sub">
          <p class="font-weight-bold">Email</p>
        </section>
        <section class="dwn">
          <p class="font-weight-">{{name.email}}</p>
          <i class="fas fa-pen"></i>
        </section>
      </section>
      <section class="ur-info">
        <section class="sub">
          <p class="font-weight-bold">Status</p>
        </section>
        <section class="dwn">
          <p class="font-weight-">{{name.status}}</p>
          <i class="fas fa-pen"></i>
        </section>
      </section>
      <section class="ur-location">
        <section class="sub">
          <p class="font-weight-bold">Location</p>
        </section>
        <section class="map-here"></section>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
// import db from './firebaseInit';
import modal from '../components/module/modal.vue';

export default {
    name: "myProfile",
    data() {
        return {
            myData: [],
            imageData: null,
            picture: null,
            uploadValue: 0,
        }
    },
    components: {
        modal,
    },
    computed: {
        personalData() {
            return this.$store.state.personalData
        }
    },
    methods: {
        editName() {
            document.querySelector(".edt").classList.add("editok")
            console.log('ok');
            document.querySelector(".nm").style.display ='none'
        },
        getMyData () {
            this.$store.commit('GET_PROFIL')
        },
        pickFiles() {
             this.imageData = event.target.files[0]
             this.picture = null
             const storageRef = firebase.storage().ref(`profil/${this.imageData.name}`).put(this.imageData)
             storageRef.on('state_changed', snapshot => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
             }, error => { console.log(error.message) },
             () => {
                this.uploadValue = 100
                 storageRef.snapshot.ref.getDownloadURL().then((url) => {
                     this.picture = url
                     firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
                .update({
                    img: url,
                })
             })
        }
      )
        },
        updateName () {
            firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
                .update({
                    displayName: this.name.displayName
                })
        }
    },
    created () {
        this.getMyData();
    }
}
</script>

<style scoped>
.my-profile {
  display: none;
}
.show-profile {
  width: 400px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.nav-profile {
  width: 100%;
  height: 60px;
  background: rgb(5, 13, 20);
}
.parent {
  width: 100%;
  height: 560px;
  background: #ffffff;
  overflow-y: scroll;
  padding: 0 5px 0 5px;
}
#progress {
  width: 80px;
  height: 10px;
  position: absolute;
  /* border-radius: 1px; */
}
.ur-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: #3470bf;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.ur-photo img {
  width: 170px;
  height: 170px;
  margin-top: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: grab;
}
.edt-photo {
  position: relative;
  top: -10px;
}
.ur-name {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90px;
  background: #ffffff;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.sub {
  width: 100%;
  height: 30px;
  padding: 10px;
}
.dwn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 10px 0 20px;
}
.edt {
  display: none;
  height: 40px;
  width: 300px;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 0 5px 10px 0;
}
.editok {
  display: flex;
}
.nm {
  display: flex;
}
.ur-info {
  width: 100%;
  height: 90px;
  background: #ffffff;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.ur-location {
  width: 100%;
  height: 300px;
  background: #ffffff;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 15px 0px;
}
.fas {
  font-size: 20px;
}
.pick-files {
  position: relative;
  top: -30px;
  color: transparent;
  width: 20px;
  height: 25px;
}
.pick-files::-webkit-file-upload-button {
  visibility: hidden;
}
.pick-files::before {
  content: "";
  color: #42b549;
  display: inline-block;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
}
.pick-files:active {
  outline: none;
}
.pick-files:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
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