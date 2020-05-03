<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="intro col-md-7">
      <router-link to="/" class="title d-flex align-items-end mb-2">
        <img src="../assets/img/centi-mater-fix.png" alt />
        <h1>centiMeter</h1>
      </router-link>
      <div class="deskripsi">
        <h1 class="font-weight-bold">Hi, we're centiMeter.</h1>
        <p>web app that allows you to connect with your distant friends.</p>
      </div>
    </div>
    <div
      class="tagline d-flex justify-content-center align-items-center pb-3 pt-2 col-md-4 flex-column text-light"
    >
      <h1 class="mt-5">Register</h1>
      <form class="sub-from col-md-11">
        <div class="form-group p-0 m-1">
          <label for="exampleInputEmail1">Fullname</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="fullname"
          />
        </div>
        <div class="form-group p-0 m-1">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="form-group p-0 m-1">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
        </div>
        <button type="submit" class="btn btn-primary col-md-12 mt-3" @click="register">Sign Up</button>
        <p class="p-0 m-0">
          have have an account?
          <router-link to="login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data() {
        return {
            fullname: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register(e) {
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
                .set({
                    email: this.email,
                    displayName: this.fullname,
                    status: 'hi there ! im good,',
                    info: true,
                    img: 'https://firebasestorage.googleapis.com/v0/b/centimeter-7a5f3.appspot.com/o/dp.png?alt=media&token=8881ebd6-c262-43d5-9f70-8598d2cd027f',
                })
                .catch(error => {
                    console.log('register failed', error)
                })
                alert(`Congratulation ${user.fullname}, Your Register is Succes!`)
                this.$router.push('/login')
            },
            err => {
                alert(err.message)
            })
        }
    }
}
</script>

<style scoped>
.container-fluid {
  margin: 0;
  padding: 0;
  background: linear-gradient(150deg, #3470bf, rgb(5, 13, 20));
  height: 100vh;
}
.tagline {
  width: 30%;
  height: 430px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-radius: 5px;
}
.title img {
  width: 110px;
  height: 100px;
  /* object-fit: cover; */
}
.title h1 {
  color: #ffffff;
}
.title {
  text-decoration: none;
}
.for-from {
  width: 30%;
  height: 100vh;
  /* background: #f7d9e1; */
}
.btn {
  background: linear-gradient(150deg, #3470bf, rgb(5, 13, 20));
  border: none;
}
@media only screen and (max-width: 600px) {
  .container-fluid {
    flex-direction: column;
  }
  .tagline {
    width: auto;
  }
  .title {
    display: absolute;
    top: 0;
  }
  .deskripsi {
    display: none;
  }
}
</style>