<template>
  <router-link :to="link" class="content-item p-relative">
    <div class="content-item_bar">
      <span>{{ date }}</span>

      <div class="flex">
        <i class="fas fa-trash c-r m-l-3" @click="$emit('delete', id)"></i>
      </div>
    </div>
    <div class="content-item_body ">
      <img class="content-item_body_img" :src="image" alt />
      <div>
        <div class="flex" style="align-items:center">
          <h3 class="m-r-3">{{ title }}</h3>
          <i class="fas fa-circle m-l-3 c-r" :class="{' c-g': active}"></i>
        </div>

        <p>{{ description ? description : ".n.c" }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    date: {
      type: String,
    },
    id: {
      type: String,
    },
    description: {
      type: String,
    },
    active:{
      type: Boolean,
    }
  },
};
</script>

<style scoped>
.content-item {
  background-color: #fff;
  font-size: 16px;
  padding: 1em;
  position: relative;
  cursor: pointer;
  margin-bottom: var(--m-margin);
  border-radius: var(--s-radius);
  grid-auto-rows: 35px auto;
  border: 1px solid #000;
  min-height: 125px;
  color: #333;
}
.content-item:hover{
  background: #f9f9f9;
}
.content-item_bar {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
}
.content-item_bar span {
  font-size: 12px;
  font-weight: lighter;
}
.content-item_body {
  display: flex;
  gap: 1rem;
}
.content-item_body_img {
  width: 70px;
  height: 70px;
  margin: var(--s-margin) 0;
  border-radius: 5px;
}
.content-item_body p {
  overflow: hidden;
  color: #888;
  text-align: left;
  width: 51vw;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content-item_body span {
  font-weight: lighter;
  color: #888;
}
</style>
