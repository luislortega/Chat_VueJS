<template>
  <div>
    <div
      class="panel-text-chat"
      id="container"
      style="max-height:200px; overflow-y: auto;"
    >please connect your user...</div>
    <div>
      <br />
      <br />
      <input type="text" name="username" placeholder="Escribe tu username" class="message" v-model="username"/>
      <br />
      <br />
      <input type="text" name="message" placeholder="Escribe tu mensaje aqui" class="message" />
      <br />
      <br />
      <br />
      <button class="button_style">Send message</button>
      <button class="button_style" @click="connectUser">Connect user</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username: ""
    }
  },
  sockets: {
    connect: function () {
      console.log("Socket connected");
    },
  },
  mounted: function () {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd: function () {
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },
    connectUser: function(){
      console.log(this.username)
      this.$socket.emit('connectUser', this.username)
    }
  },
};
</script>
<style scoped>
.panel-text-chat {
  padding: 2vw;
  text-align: left;
  height: 25vw;
  background: #cccccc;
  border-radius: 10px;
  overflow: scroll;
}
.button_style {
  width: 30%;
  height: 3vw;
}
.message {
  width: 70%;
  height: 3vw;
}
</style>
