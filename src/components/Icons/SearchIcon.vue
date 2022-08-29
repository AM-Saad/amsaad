<template>
  <svg
    :height="height ? height : 13"
    :width="width ? width : 13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 8L12 12" stroke="black" />
    <circle cx="5" cy="5" r="4" stroke="black" />
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: ["width", "height"],
});
</script>
