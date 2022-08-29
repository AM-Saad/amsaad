<template>
  <div id="reacts">
    <ul>
      <li @click="react(article._id, 'highfive', $event)">
        <div class="before"></div>
        <div class="after"></div>
        <img src="@/assets/icons/high-five.png" alt />
        <span>{{ article.reactions.highfive.counter }}</span>
      </li>
      <li @click="react(article._id, 'like', $event)">
        <div class="before"></div>
        <div class="after"></div>
        <img src="@/assets/icons/thumbs-up.png" alt />
        <span>{{ article.reactions.like.counter }}</span>
      </li>
      <li @click="react(article._id, 'dislike', $event)">
        <div class="before"></div>
        <div class="after"></div>
        <img src="@/assets/icons/thumbs-down.png" alt />
        <span>{{ article.reactions.dislike.counter }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
let $ = require("jquery");

export default {
  name: "Reacts",
  computed: {
    ...mapState("studio", ["articles", "isAuth"]),
  },
  props: ["article"],
  methods: {
    async react(id, reaction, e) {
      if (!this.isAuth) {
        return this.$emit("requireAuth");
      }

      const res = await this.$store.dispatch("studio/react", {
        id: id,
        reaction: reaction,
      });

      if (res.code !== 401) {
        if ($(e.target).is("li")) {
          $(e.target).addClass("active");
        } else {
          $(e.target)
            .parents("li")
            .addClass("active");
        }

        return setTimeout(() => {
          $("li.active").removeClass("active");
        }, 1000);
      } else {
        this.startAuth = true;
      }
    },
  },
};
</script>

<style scoped>
#reacts {
  position: sticky;
  left: 2%;
  top: 150px;
  z-index: 3;
}

#reacts li {
  width: 50px;
  text-align: center;
  margin-bottom: var(--s-margin);
  padding: 7px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#reacts li img {
  width: 100%;
  cursor: pointer;
}
#reacts li:hover {
  background-color: #f9f9f9;
}
#reacts li a {
  color: #000;
  text-align: center;
}
#reacts li a:hover {
  color: var(--main-color);
}

@keyframes done {
  from {
    outline-offset: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline-color: rgba(255, 0, 0, 0.143);
  }
  to {
    outline-offset: 5px;
    box-shadow: inset 0 0 20px #ff84298f, 0 0 20px #ff84298f;
    outline-color: #ff84298f;
  }
  /* 100% {
    outline-offset: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  } */
}

#reacts li.active > .before,
#reacts li.active > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
    0 0 #fff, 0 0 #fff, 0 0 #fff;
  /* -moz-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -webkit-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -o-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards;
  -ms-animation: 1.8s bang ease-out 1 backwards,
    1.8s gravity ease-in 1 backwards, 5s position linear 1 backwards; */
  animation: 1.8s bang ease-out 1 backwards, 1.8s gravity ease-in 1 backwards,
    5s position linear 1 backwards;
}

#reacts li > .after {
  /* -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s; */
  animation-delay: 1.25s, 1.25s, 1.25s;
  /* -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s; */
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-moz-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-o-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-ms-keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@keyframes bang {
  to {
    box-shadow: -136px -34.6666666667px #0dff00, -248px -75.6666666667px #ff5100,
      220px -396.6666666667px #00ffb7, 154px -64.6666666667px #0011ff,
      -151px -231.6666666667px #00ffd5, 81px -52.6666666667px #ff6a00,
      -168px -358.6666666667px #00ff37, 63px -20.6666666667px #fb00ff,
      -178px -403.6666666667px #b3ff00, 127px -344.6666666667px #ff6f00,
      -81px -304.6666666667px #00ddff, -16px -231.6666666667px #00ff1a,
      -118px -90.6666666667px #ff1e00, -217px -38.6666666667px #00ffe6,
      -150px -389.6666666667px #0037ff, -203px -253.6666666667px #44ff00,
      -22px -147.6666666667px #ff0099, -34px -87.6666666667px #00ffd0,
      203px -229.6666666667px #ff0400, -205px -292.6666666667px #00eeff,
      -164px -52.6666666667px #ff6a00, 125px -34.6666666667px #ff0051,
      177px -91.6666666667px #ffc400, 56px -26.6666666667px cyan,
      217px -78.6666666667px #ff00aa, -185px -13.6666666667px #5100ff,
      -208px -198.6666666667px #0077ff, 122px -48.6666666667px #00ff33,
      -61px -262.6666666667px #ffea00, -32px -385.6666666667px #ff00d0,
      -112px 44.3333333333px #ff0080, 84px -121.6666666667px #001eff,
      -78px -402.6666666667px #00a2ff, -199px -231.6666666667px #aeff00,
      112px -181.6666666667px #0099ff, 104px -3.6666666667px #0004ff,
      122px 32.3333333333px #ff0059, -131px -252.6666666667px #00ffee,
      126px -302.6666666667px #ccff00, 115px -204.6666666667px #59ff00,
      50px -102.6666666667px #4000ff, 44px 53.3333333333px #0051ff,
      -242px -349.6666666667px #8800ff, -114px -260.6666666667px #04ff00,
      34px -33.6666666667px #9500ff, 128px -354.6666666667px #ff1100,
      -135px -129.6666666667px #00ff5e, 84px -289.6666666667px #ff00bf,
      -171px -5.6666666667px #0900ff, -180px -387.6666666667px #99ff00,
      5px -7.6666666667px blue;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}

@media (max-width: 900px) {
  #reacts ul {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-evenly;
    background: #fff;
    width: 100%;
    padding: 7px 0;
    border-top: 1.6px solid var(--main-color);
  }
}
</style>
