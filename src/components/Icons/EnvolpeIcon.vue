<template>
  <svg
    :height="height ? height : 12"
    :width="width ? width : 12"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 3L0.5 5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H12.5C13.6046 13.5 14.5 12.6046 14.5 11.5V5L11.5 3"
      stroke="black"
    />
    <path
      d="M11.5 7V1.5C11.5 0.947715 11.0523 0.5 10.5 0.5H4.5C3.94772 0.5 3.5 0.947715 3.5 1.5V7"
      stroke="black"
    />
    <line x1="5" y1="2.5" x2="10" y2="2.5" stroke="black" />
    <line x1="5" y1="4.5" x2="10" y2="4.5" stroke="black" />
    <path d="M0.5 5.5L7.5 8.5L14.5 5.5" stroke="black" />
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props: ["width", "height"],
});
</script>
