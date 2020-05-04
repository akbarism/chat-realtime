<template>
  <div class="main-chat">
      <div
        :class="[message.sender === authUser.email ? 'me' : 'you']"
        v-for="(message, id) in messages"
        :key="id"
      >
        <div :class="[message.sender === authUser.email ? 'balon-chat-me' : 'balon-chat-you']">
          <article
            :class="[message.sender === authUser.email ? 'isi-chat' : 'isi-chat-you']"
          >{{message.message}}</article>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>