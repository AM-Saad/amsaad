<template>
  <div class="loading-item">
    <div class="logo" v-if="!showlogo">
      <img src="@/assets/images/horizontal.png" alt="logo" />
    </div>
    <div class="loading-item-cell">
      <div class="image"></div>
      <div class="text">
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
      </div>
    </div>
    <div class="loading-item-cell">
      <div class="image"></div>
      <div class="text">
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
      </div>
    </div>
    <div class="loading-item-cell">
      <div class="image"></div>
      <div class="text">
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
        <div class="text-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props:['showlogo']
};
</script>

<style scoped>
.loading-item {
  padding-top: 17vh;
  height: 100%;
  width: 98%;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  border-radius: 10px;
}
.logo {
  position: fixed !important;
  bottom: 4.5rem;
  right: 0;
  width: 50px;
  z-index: 9;
}
.logo img{
  height: 100%;
  width: 100%;
}

.loading-item-cell {
  margin-bottom: 30px;
  height: 300px;
  padding: var(--m-padding);
  border: 1.4px solid rgb(224 224 224 / 69%);

  border-radius: 10px;
}

@-webkit-keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.animated-background,
.text-line,
.image {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f6f6;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 800px 104px;
  height: 96px;
  position: relative;
}

.image {
  height: 200px;
  margin-bottom: var(--m-margin);
}

.text-line {
  height: 10px;
  width: 100%;
  margin: 4px 0;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {

  .loading-item {
    width: 87%;
    padding-top:4vh
  }
  
}
</style>
