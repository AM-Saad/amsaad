<template>
  <div class="footer-meta">
    <div class>
      <a
        class="button-pill button-pill--icon"
        href="https://www.facebook.com/amsaad.eg"
        rel="noreferrer"
        target="_blank"
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        class="button-pill button-pill--icon"
        href="https://www.instagram.com/amsaad.e/"
        rel="noreferrer"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <router-link
        class="button-pill button-pill--icon"
        :to="{ name: 'contacts' }"
        >Get In Touch</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style>
.logo {
  position: absolute;
  bottom: 4.5rem;
  right: 0;
  width: 50px;
  z-index: 9;
}
.logo img {
  height: 100%;
  width: 100%;
}
.footer-meta {
  margin-top: auto;
}
.footer {
  width: 50%;
  position: inherit;
  bottom: 20px;
  left: 0;
  font-size: 21px;
}
.footer-meta .button-pill {
  margin-right: 5px;
  width: unset !important;
  min-width: 32px;
  color: #000;
}
.footer-meta .button-pill:last-child {
  background-color: var(--main-color);
  color: #fff;
  padding: 0 4px;
}

.information__buttons {
  position: absolute;
  top: 175px;
  right: 16px;
  text-align: right;
}
@media screen and (max-width: 900px) {
  .footer-meta {
    margin-top: unset;
  }
}
</style>
