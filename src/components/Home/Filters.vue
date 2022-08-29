<template>
  <div class="filters" style="right: 124px;">
    <div :class="[{ none: !isActive }, { filters__filters: isActive }]">
      <div class="filters__filter-set">
        <a
          class="button-pill button-pill--small  all"
          :class="{ active: val === 'all' }"
          @click="$emit('filter', 'all')"
          >All</a
        >

        <a
          v-for="c in categories"
          :key="c._id"
          class="button-pill button-pill--small"
          :class="{ active: val === c.name }"
          :data-article-id="c.name"
          @click="$emit('filter', c.name)"
          >{{ c.name }}</a
        >
      </div>
    </div>
    <div class="filters__toggle">
      <div
        class="button-extend button-extend--small button-extend--with-hover show"
      >
        <div class="button-extend__icon" @click="$emit('toggleFilter')">
          <cross-icon v-if="isActive" />
          <filter-icon v-if="!isActive" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CrossIcon from "../Icons/CrossIcon.vue";
import FilterIcon from "../Icons/FilterIcon.vue";
export default {
  name: "Filters",
  computed: {
    ...mapState(["categories"]),
  },
  props: ["isActive", "val"],
  components: {
    CrossIcon,
    FilterIcon,
  },
};
</script>
