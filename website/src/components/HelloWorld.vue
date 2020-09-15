<template>
  <div>
    <div class="panel-text-chat" id="container" style="max-height:200px; overflow-y: auto;">
    </div>
    <div>
      <br />
      <br />
      <input type="text" name="username" placeholder="Escribe tu username" class="message" />
      <br />
      <br />
      <input type="text" name="message" placeholder="Escribe tu mensaje aqui" class="message" />
      <br />
      <br />
      <br />
      <button class="btn_enviar">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.scrollToEnd()
  },
  methods: {
    scrollToEnd: function () {
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },
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
.btn_enviar {
  width: 30%;
  height: 3vw;
}
.message {
  width: 70%;
  height: 3vw;
}
</style>
