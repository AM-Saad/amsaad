<template>
  <div class="content-wrapper">
    <div class="form_inputs">
      <form
        class="auth-form"
        id="login"
        action="/login"
        method="POST"
        @submit="submitLogin($event)"
      >
        <h1>Login</h1>
        <span>Sign in To Your Account</span>
        <div class="form">
          <input
            type="email"
            v-model="email"
            name="email"
            id="email"
            placeholder="Your Email Please"
            autocomplete="false | unknown-autocomplete-value"
          />
          <input
            type="password"
            v-model="password"
            name="password"
            id="passowrd"
            placeholder="Enter Your Password."
          />
          <button class="btn btn-success" v-if="!loading">Login</button>
          <button class="btn btn-success opacity-5" v-if="loading">
            Loading ...
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async submitLogin(e) {
      e.preventDefault();
      this.loading = true;
      const res = await this.$store.dispatch({
        type: "admin/login",
        data: { email: this.email, password: this.password },
      });
      this.loading = false;

      if (res) this.$router.push({ path: "/admin/dashboard" });
    },
  },
};
</script>

<style scoped>
.content-wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
}
#loading {
  position: absolute;
  right: 50%;
  top: 41%;
  transform: translate(-50%, -41%);
}
.form {
  margin: auto;
  padding: 10px 0;
}

.form input {
  display: block;
  width: 100%;
  height: 45px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
  border-radius: var(--s-radius);
  border: 0;
  background: #fff;
  border: 1.2px solid #eee;
}

@media (max-width: 767.98px) {
  .form_inputs {
    width: 95%;
  }
}
</style>
