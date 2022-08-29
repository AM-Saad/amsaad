<template>
  <div :class="{ active: message }" class="notification ">
    <p
      v-if="msg"
      class="message"
      :class="{
        'alert-warning': msg && msg.type == 'warning',
        'alert-success': msg && msg.type == 'success',
        'alert-info': msg && msg.type == 'info',
      }"
    >
      {{ msg && msg.msg }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState(["msg"]),
  },
  watch: {
    msg(val) {
      this.message = val;
      if (val !== null) {
        setTimeout(() => (this.message = null), 4000);
      }

      // clearTimeout(timer);
    },
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: 0.5s transform ease-in-out;
  will-change: transform;
  z-index: 100;
}
.notification.active {
  transform: translate(-50%, 0);
}
.message {
  text-align: center;
  font-size: 18px;
  padding: 10px 20px;
  margin: 22px auto;
  width: 322px;
  border-radius: 25px;
}
</style>
