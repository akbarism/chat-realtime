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
      <h1 class="mt-5">Login</h1>
      <form class="sub-from col-md-11">
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
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary col-md-12" @click="login">Login</button>
        <p class="p-0 m-0">
          don't have have an account?
          <router-link to="register">Sign up</router-link>
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
            email: '',
            password: '',
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            firebase.auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then( ()=> {
            firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
              .update({
              info: true
            })
                this.$router.push('/')
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
  background: #3470bf;
  height: 100vh;
}
.tagline {
  width: 30%;
  height: 350px;
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
  background: #3470bf;
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