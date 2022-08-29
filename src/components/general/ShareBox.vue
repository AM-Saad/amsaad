<template>
  <div class="meta__share">
    <a
      class="button-extend facebook"
      target="_blank"
      :href="`https://www.facebook.com/sharer.php?u=${url}`"
    >
      <div class="button-extend__text-wrapper">
        <div class="button-extend__text">Share</div>
      </div>
      <div class="button-extend__icon">
        <svg
          fill="none"
          height="12"
          viewBox="0 0 7 12"
          width="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m4.65925 11.9995v-5.13897h1.72493l.25807-2.00289h-1.983v-1.2789c0-.57978.16111-.97509.99249-.97509l1.06062-.0005v-1.791057c-.18348-.024364-.81299-.079061-1.54543-.079061-1.52951 0-2.5762.933318-2.5762 2.647308v1.4773h-1.729402v2.00289h1.729402v5.13947h2.06852z"
            fill="#000"
          />
        </svg>
      </div>
    </a>
    <br />
    <a
      class="button-extend twitter"
      target="_blank"
      :href="`https://twitter.com/intent/tweet?url=${url}&amp;text=${title}`"
    >
      <div class="button-extend__text-wrapper">
        <div class="button-extend__text">Tweet</div>
      </div>
      <div class="button-extend__icon">
        <svg
          fill="none"
          height="10"
          viewBox="0 0 12 10"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m10.318 2.69436-.2187.15819.0122.26965c.0042.09188.0063.18427.0063.27716 0 2.85055-2.16732 6.10058-6.10058 6.10058-.54827 0-1.07903-.07268-1.58387-.20883.65166-.18547 1.25108-.49547 1.7706-.90256l1.10745-.86781-1.40672-.02567c-.52254-.00954-.99175-.23928-1.31808-.6006.10881-.01638.21563-.03896.3201-.06732l-.03281-.97281c-.59-.11815-1.07686-.52263-1.31032-1.06186.12627.02159.25537.03473.38665.03879l1.74476.05394-1.45161-.96949c-.489-.32659-.8098-.88354-.8098-1.51499 0-.07248.00425-.14395.01251-.21418 1.19445 1.14847 2.79098 1.88262 4.55826 1.97134l.66366.03332-.15181-.64692c-.03077-.1311-.04693-.26957-.04693-.41449 0-1.00465.81496-1.81974 1.82019-1.81974.52337 0 .99604.22091 1.32881.57537l.1895.20184.27164-.05349c.0524-.01031.1044-.02141.1562-.03329l.2056.60121c-.0405.03164-.0816.06254-.1232.09266z"
            fill="#000"
            stroke="#000"
          />
        </svg>
      </div>
    </a>
    <br />
    <a
      class="button-extend pinterest"
      target="_blank"
      :href="`http://pinterest.com/pin/create/link/?url=${url}`"
    >
      <div class="button-extend__text-wrapper">
        <div class="button-extend__text">Pin</div>
      </div>
      <div class="button-extend__icon">
        <svg
          fill="none"
          height="12"
          viewBox="0 0 10 12"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2.1736 9.56524c-.15723.64846-.09537 1.56276-.02706 2.15686.02934.2552.40782.378.53486.1793.31899-.4989.7965-1.3168.97307-1.96895.09537-.35113.48782-1.78533.48782-1.78533.25518.46673 1.00141.86237 1.79469.86237 2.36177 0 4.06302-2.0833 4.06302-4.67166 0-2.48141-2.11045-4.33783-4.82665-4.33783-3.37866 0-5.17335 2.17541-5.17335 4.54493 0 1.10161.610904 2.47337 1.58912 2.90982.14822.06614.22748.03647.26163-.10077.02578-.10447.15789-.61448.21717-.85186.01933-.07542.00967-.14095-.05413-.21513-.32349-.37648-.58255-1.06885-.58255-1.71424 0-1.65675 1.30752-3.25972 3.53525-3.25972 1.92357 0 3.2704 1.2574 3.2704 3.05571 0 2.03199-1.06909 3.43961-2.46102 3.43961-.76878 0-1.3436-.61015-1.1593-1.35754.22039-.89267.64828-1.85643.64828-2.50058 0-.57677-.3222-1.05772-.99046-1.05772-.78554 0-1.41642.78015-1.41642 1.82427 0 .66518.23392 1.11522.23392 1.11522s-.77587 3.1472-.91829 3.73324z"
            fill="#000"
          />
        </svg>
      </div>
    </a>
    <br />
    <a
      class="button-extend linkedin"
      target="_blank"
      :href="`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=http://Norton%20Rose%20Fulbright%20Melbourne&amp;summary=http://The%20new%20workplace%20fitout%20in%20Melbourne%20for%20law%20firm%20Norton%20Rose%20Fulbright%20draws%20reference%20to%20the%20acclaimed%20arts%20and%20culture%20that%20the%20city%20is%20renowned%20for,%20resulting%20in%20a%20flexible,%20modern%20and%20welcoming%20office.`"
    >
      <div class="button-extend__text-wrapper">
        <div class="button-extend__text">Share</div>
      </div>
      <div class="button-extend__icon">
        <svg
          fill="none"
          height="11"
          viewBox="0 0 11 11"
          width="11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m3.13518 10.9952h-2.10291v-6.7529h2.09897v6.7529zm-1.04949-7.6766c-.67214 0-1.218502-.54636-1.218502-1.21851 0-.67214.542432-1.218498 1.218502-1.218498.67214 0 1.21457.546358 1.21457 1.218498 0 .67215-.54243 1.21851-1.21457 1.21851zm8.91081 7.6766h-2.09899v-3.28213c0-.7822-.01179-1.79238-1.08879-1.79238-1.09272 0-1.25781.85295-1.25781 1.73342v3.34109h-2.09503v-6.7529h2.01249v.92371h.02751c.27908-.53064.96302-1.0888 1.98499-1.0888 2.12653 0 2.51953 1.39932 2.51953 3.21528v3.70271z"
            fill="#000"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name:'ShareBox',
    props:['url', 'title']
};
</script>

<style></style>
