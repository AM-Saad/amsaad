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
  props:['reload']
};
</script>

<style></style>
