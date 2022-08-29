<template>
  <svg
    class="icon-filter"
    :height="height ? height : 7"
    :width="width ? width : 7"
    viewBox="0 0 7 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 4.5H7" stroke="black" />
    <path d="M0 0.5H7" stroke="black" />
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: ["width", "height"],
});
</script>
