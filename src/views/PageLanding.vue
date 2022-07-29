<template>
  <div>
    <navbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          v-bind:style="{ 'background-image': 'url(' + main_bg + ')' }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-70 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Карьера начинается с хорошего резюме.
                </h1>
                <p class="mt-4 text-lg text-slate-200">
                  «Встречают по одежке, а провожают по уму», - говорят у нас.
                  Современное резюме - первое условие при трудоустройстве. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Divider color="#fff"/>
      </div>

    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/PageFooter.vue";
import Divider from "@/components/Elementary/ElementDivider.vue";

import main_bg from "@/assets/img/main-bg.jpg";
import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      main_bg,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    Navbar,
    FooterComponent,
    Divider,
  },
};
</script>
