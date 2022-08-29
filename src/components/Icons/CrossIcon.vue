<template>
  <svg
    class="icon-cross"
    :height="height ? height : 12"
    :width="width ? width : 12"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.146484 9.14722L9.14722 0.146484L9.85433 0.853591L0.853591 9.85433L0.146484 9.14722Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.853637 0.14712L9.85361 9.14706L9.1465 9.85417L0.146531 0.854228L0.853637 0.14712Z"
      fill="black"
    />
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: ["width", "height"],
});
</script>
