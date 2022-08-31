<template>
  <div class="wrapper">
    <h1>404</h1>
    <p>
      You've reached a page your not authorized to see or it's already deleted
    </p>
    <a @click="goBack">Go Back</a>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      history.back();
    },
  },
};
</script>

<style></style>
