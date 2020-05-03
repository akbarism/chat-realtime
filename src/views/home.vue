<template>
  <div class="container-fluid d-flex">
    <listChat v-on:switch="toProfile"/>
    <myProfile v-on:substitute="showList" />
    <nothing />
    <chat v-on:emitshow="showprofile" />
    <people v-on:removemit="hideprofile" />
  </div>
</template>

<script>
import listChat from '../components/listChat.vue';
import chat from '../components/chat.vue';
import nothing from '../components/nothing.vue';
import people from '../components/peopleProfile.vue';
import myProfile from '../components/myProfile.vue';

export default {
    name: 'home',
    components: {
        listChat,
        chat,
        people,
        myProfile,
        nothing,
    },
    methods:{
        showprofile() {
            const removeClass = document.querySelector(".chat");
            const hideclass = document.querySelector(".container-profile");
            removeClass.classList.add("chat-shrink");
            hideclass.classList.add("now-profile");
        },
        hideprofile() {
            const removeClass = document.querySelector(".chat");
            const hideclass = document.querySelector(".container-profile");
            removeClass.classList.remove("chat-shrink");
            hideclass.classList.remove("now-profile");
        },
        toProfile() {          
            const showProfile = document.querySelector(".my-profile")
            document.querySelector(".list-chat").classList.add("hide-chat")
            showProfile.classList.add("show-profile")
        },
        showList() {
            const hideChat = document.querySelector(".list-chat")
            const showProfile = document.querySelector(".my-profile")
            hideChat.classList.remove("hide-chat")
            showProfile.classList.remove("show-profile")
        },
    }
}
</script>

<style scoped>
.container-fluid {
  margin: 0;
  padding: 0;
  /* width: 100%; */
  height: 100vh;
}
</style>