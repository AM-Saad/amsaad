<template>
  <div v-if="startAuth">
    <div class="auth-forms">
      <div class="auth-forms_box">
        <a class="button-pill button-pill--icon m-medium" @click="close()">
          <cross-icon />
        </a>
        <div class="">
          <img
            src="@/assets/images/full-vertical.png"
            class="auth-forms_box_header_img-vertical"
            alt="logo"
          />
          <img
            src="@/assets/images/horizontal.png"
            class="auth-forms_box_header_img-horizontal"
            alt="logo"
          />
          <h3 class="c-b p-l-3 font-xl">Access your account to continue</h3>
        </div>
        <AuthForms v-on:close="close"></AuthForms>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForms from "@/components/general/AuthForms.vue";
import CrossIcon from "@/components/Icons/CrossIcon.vue";

export default {
  name: "FormPopup",
  data() {
    return {};
  },
  props: ["startAuth"],

  components: {
    AuthForms,
    CrossIcon,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style>
.auth-forms {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background-color: #f9f9f98e;
  pointer-events: unset;
}

.auth-forms_box {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  color: var(--card-color);
  z-index: 700;
  max-height: 100%;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  background-color: #fff;
  border: 2px solid var(--main-color);
  padding: var(--m-padding);
  border-right: 5px solid var(--main-color);
  border-bottom: 3px solid var(--main-color);
  color: #333 !important;
  position: relative;
}
.auth-forms_box_header {
  align-items: center;
}
.auth-forms_box_header_img-vertical,
.auth-forms_box_header_img-horizontal
{
  width: 2rem;
  display: block;
  margin: auto;
  position: absolute;
  right: 0;
  bottom: 0;
}
.auth-forms_box_header_img-vertical
{
  display: none;
  width: 14rem;

}

.auth-forms_box
  .login-portal-pane__form
  .login-portal-pane__form-content
  input {
  border-color: #000;
  color: #000;
}

@media (min-width: 900px) {
  .auth-forms_box {
    height: auto;
  }
}
@media (max-width: 900px) {
  .auth-forms_box {
    min-width: 100%;
  }
  .auth-forms_box_header_img-vertical
{
  display: block;
}
  .auth-forms_box_header_img-horizontal {
    display: none;
  }
}
</style>
