<template>
  <div class="rails" v-if="!loading">
    <LeftRail :colone="this.refs.articles" :coltwo="this.refs.projects"></LeftRail>
    <RightRail :coltwo="this.refs.projects" :colthree="this.refs.studio"></RightRail>
  </div>
</template>

<script>
import LeftRail from "@/components/Home/LeftRail.vue";
import RightRail from "@/components/Home/RightRail.vue";
export default {
  name: "Rails",
  components: {
    RightRail: RightRail,
    LeftRail: LeftRail
  },
  props: ["loading", "refs"],

};
</script>

<style>
</style>