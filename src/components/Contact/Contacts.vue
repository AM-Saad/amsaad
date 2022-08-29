<template>
  <div class="column" data-column="two" ref="contacts">
    <a class="enlarge button-pill" ref="button">Studio</a>
    <div class="flex f-space-between column-head">
      <div class="items__title">
        <span>Contacts</span>
      </div>
    </div>
    <div class="information__text">
      <div>
           <p>
          <b>Contact Us</b>
        </p>
        <p>Mobile: 00201156565910</p>
        <p>Mobile: 00201553733394</p>
        <p>Email: amsstudio.e@gmail.com</p>
        <p>Address: Cairo, Egypt</p>
      </div>
      <div>
        <p>
          <b>Follow Us</b>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/aabdelrahman-mohamed/">LinkedIn</a>
        </p>
        <p>
          <a href="https://dev.to/abdelrahman">Dev</a>
        </p>
        <p>
          <a href="https://github.com/AM-Saad">Github</a>
        </p>
      </div>
    </div>

    <div class="logo">
      <img src="@/assets/images/horizontal.png" alt="logo" />
      
    </div>
    <Footer></Footer>
    <AuthPortal :visibilePortal="visibilePortal"></AuthPortal>
  </div>
</template>

<script>
import Footer from "@/components/Home/Footer.vue";
import { mapState } from "vuex";
import AuthPortal from "@/components/Home/AuthPortal.vue";
import * as helpers from "@/helpers/home";

export default {
  name: "Projetcs",
  data() {
    return {
      visibilePortal: false
    };
  },
  // props: ["width", "height"],

  components: {
    Footer: Footer,
    AuthPortal: AuthPortal
  },
  computed: {
    ...mapState(["two", "one"])
  },
  mounted() {
    this.$emit("created", { col: "studio" });
  },
  methods: {
    openmail() {
      this.visibilePortal = true;
      document.getElementById("subscription").classList.add("show");
      document.querySelector("body").classList.add("portal-pane--show");
    },
    opensearch() {
      document.querySelector("body").classList.add("search-pane--show");
    },
    shrink() {
      helpers.changePositions({
        one: { right: 66.6, left: 33.3 },
        two: { right: 33.3, left: 66.6 }
      });
      helpers.shrink();
    },
    expand() {
      helpers.changePositions({
        one: { right: 95, left: 5 },
        two: { right: 90, left: 10 }
      });
    }
  }
};
</script>

<style scoped>
.information__text {
  padding: 0 3rem 16px 16px;
  min-height: 59vh;
}
.information__text p {
  font-size: 2vh;
  margin-bottom: 20px;
}
@media (max-width: 900px) {

  .information__text p {
    line-height: 24px;
  }
}
</style>