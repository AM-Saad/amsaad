<template>
  <svg
    fill="none"
    :height="height ? height :12"
    :width="width ? width :12"
    viewBox="0 0 12 11"

    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#000">
      <path d="m5.98535 0v10" />
      <path d="m10.9706 4.98528-4.98525 4.98528-4.98528-4.98528" />
    </g>
  </svg>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  props:['width', 'height']
});
</script>
