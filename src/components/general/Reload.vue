<template>
  <div class="reload" v-if="reload">
    <h1>Hmmm...</h1>
    <p>It seems you lost your connection, please try again.</p>
    <button class="button-pill bg-main" @click="$emit('reload')">Reload</button>
  </div>
</template>

<script>
export default {
  name: "Reload",
  props: ["reload"],
};
</script>

<style scoped>
.reload {
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #151d30c2;
  width: 100%;
  height: 100vh;
  display: grid;
  justify-content: center;
  padding: var(--scnd-padding);
  align-items: flex-start;
  align-content: center;
  z-index: 999999;
}

.reload h1 {
  color: #fff;
}

.reload p {
  color: var(--main-color);
}
</style>
