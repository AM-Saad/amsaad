<template>
  <svg
    :height="height ? height : 16"
    :width="width ? width : 12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.5" cy="3.5" r="3" stroke="black" />
    <path
      d="M5.5 6.5C4.19094 6.5 2.98103 6.78551 2.0804 7.27196C1.19979 7.7476 0.5 8.4881 0.5 9.43056V10C0.5 10.8284 1.17157 11.5 2 11.5H5.5H9C9.82843 11.5 10.5 10.8284 10.5 10V9.43056C10.5 8.4881 9.80021 7.7476 8.9196 7.27196C8.01897 6.78551 6.80906 6.5 5.5 6.5Z"
      stroke="black"
    />
    <line x1="11" y1="3.5" x2="16" y2="3.5" stroke="black" />
    <line x1="13.5" y1="1" x2="13.5" y2="6" stroke="black" />
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: ["width", "height"],
});
</script>
