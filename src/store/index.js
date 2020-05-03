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

    },
    mutations: {
        GET_MY_DATA(state) {
            db.collection('user').onSnapshot((querySnapshot) => {
                querySnapshot.forEach(doc => {
                  state.myData.push(doc.data())              
                })
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
            // const select = state.navContact.filter(Data => Data.displayName === displayName)
            if (state.navContact.length === 0 || state.navContact === undefined){
                state.navContact = item[0]
            }
        },
        SEND_CONTACT(state) {
            let data = state.myData
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                if (data[i].displayName) {
                state.dataPeople = data[i] 
                console.log(state.dataPeople);           
               }
             } 
        }
    },
    actions: {
        // getDataContact(context, e) {
        //     const crot = e.target.textContent
        //     context.commit('TARGET', crot)
        //     console.log(crot);
            
        // }
    },
})