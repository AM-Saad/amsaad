<template>
  <div
    class="rail"
    data-rail="one"
    ref="one"
    @mousedown="getDragPointer($event)"
    v-touch:tap="touchTab"
    v-touch:moving="touchMove"
    :style="{ left: `${one.left}%` }"
  ></div>
</template>

<script>
import { mapState } from "vuex";
import * as helpers from "@/helpers/home";

export default {
  name: "LeftRail",
  data() {
    return {
      rail: null,
      shiftX: null,
    };
  },
  computed: {
    ...mapState(["one"]),
  },
  mounted() {
    this.rail = this.$refs.one;
  },
  methods: {
    touchTab(e) {
      if (e.changedTouches) {
        const x = e.changedTouches[0].clientX;
        const elRect = e.target.getBoundingClientRect();
        this.shiftX = x - elRect.left;
      }
    },
    touchMove(e) {
      if (e.changedTouches) {
        helpers.moveRail(
          this.shiftX,
          this.rail,
          e.changedTouches[0].pageX,
          "one"
        );
      }
    },
    getDragPointer(e) {
      const x = e.clientX;
      const elRect = e.target.getBoundingClientRect();
      this.shiftX = x - elRect.left;
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(e) {
      e.preventDefault();
      helpers.moveRail(this.shiftX, this.rail, e.pageX, "one");
    },
    onMouseUp() {
      document.getElementsByTagName("body")[0].style.cursor = "";
      document.removeEventListener("mousemove", this.onMouseMove);
    },
  },
};
</script>
