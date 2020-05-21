import vue from 'vue'
import vuex from 'vuex'
import db from '../components/firebaseInit'
import firebase from 'firebase'

vue.use(vuex)

export default new vuex.Store({
  state: {
    allData: [],
    myData: [],
    navContact: [],
    dataPeople: [],
    personalData: [],
    messages: [],
    message: null,
    authUSer: firebase.auth().currentUser,

  },
  mutations: {

    GET_MY_DATA(state) {
      let perData = []
      db.collection('user').onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
          perData.push(doc.data())
        })
        state.myData = perData
      })
    },
    GET_PROFIL(state) {
      db.collection('user').where('email', '==', firebase.auth().currentUser.email).onSnapshot((querySnapshot) => {
        let myProfile = []
        querySnapshot.forEach(doc => {
          myProfile.push(doc.data())
        })
        state.personalData = myProfile
      })
    },
    TARGET(state, displayName) {
      const item = state.myData.filter(Data => Data.displayName === displayName)
      state.navContact = item[0]

    },
    SEND_CONTACT(state) {
      let data = state.myData
      for (let i = 0; i < data.length; i++) {
        if (data[i].displayName) {
          state.dataPeople = data[i]
        }
      }
    },
    FETCH(state) {
      db.collection('chat').where('author', '==', firebase.auth().currentUser.email);
      db.collection('chat').where('received', '==', state.navContact.email);
      db.collection('chat').orderBy('createdAt')
        .onSnapshot((querySnapshot) => {
          // eslint-disable-next-line prefer-const
          let allMessage = [];
          querySnapshot.forEach((doc) => {
            if ((doc.data().received === state.navContact.email && doc.data().author
              === firebase.auth().currentUser.email && doc.data().message !== null && doc.data().message !== ' ')
              || (doc.data().received === firebase.auth().currentUser.email
                && doc.data().author === state.navContact.email && doc.data().message !== null
                && doc.data().message !== ' ')) {
              allMessage.push(doc.data());
            }
            return allMessage;
          });
          state.messages = allMessage;

        });
    }
  },
  actions: {
  },
})