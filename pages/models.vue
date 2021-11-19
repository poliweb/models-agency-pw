<template>
  <div>
    <!-- Header page -->
    <div class="relative">
      <img
        src="https://res.cloudinary.com/poliweb/image/upload/c_crop,g_north,h_400,w_1920/v1636956214/HeroCarousel/slide-girl-face1_vbpmzp.jpg"
        alt="blog.alt"
        class="absolute h-full w-full object-cover z-0"
      />
      <div class="masck__header-page"></div>
      <div class="container mx-auto py-28 flex flex-col place-content-center text-center">
        <h2 class="title-dark text-5xl md:text-7xl font-bold z-10">Our Models</h2>
        <p
          class="text-white leading-relaxed text-2xl px-5 z-10"
        >The only Mastermind course you will ever need for winning big on Crypto markets and trading.</p>
      </div>
    </div>
    <!-- //Header page -->
    <!-- Content page -->
    <section class="body-font">
      <div class="container px-5 py-24 mx-auto">
        <!-- Title Section -->
        <div class="flex flex-col text-center w-full mb-20">
          <h3 class="title-color sm:text-3xl md:text-4xl title-font font-semibold mb-8">Models</h3>
          <p
            class="lg:w-2/4 mx-auto leading-relaxed text-base"
          >Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <!-- //Title Section -->
        <!-- Block Items -->
        <div class="flex flex-wrap -m-4 max-w-6xl mx-auto gap-y-6">
          <div v-for="itemsFmodel of itemsFmodels" :key="itemsFmodel.index" class="p-4 lg:w-1/4 md:w-1/2">
            <div class="h-full flex flex-col items-center text-left">
              <img decoding="async" width="600" height="600"
                alt="team"
                class="flex-shrink-0 rounded w-full h-56 object-cover object-center mb-4"
                :src="itemsFmodel.img"
              />
              <div class="w-full">
                <h3 class="title-color title-font font-semibold text-2xl leading-10 mb-5">{{itemsFmodel.title}}</h3>
                <ul class="mb-2">
                  <li class="flex flex-row gap-x-2"><IconArrowR class="w-6 h-6 arrow__color"/> Born: {{ itemsFmodel.Born }}</li>
                  <li class="flex flex-row gap-x-2"><IconArrowR class="w-6 h-6 arrow__color"/> Height: {{ itemsFmodel.Height }}</li>
                  <li class="flex flex-row gap-x-2"><IconArrowR class="w-6 h-6 arrow__color"/> Hair: {{ itemsFmodel.Hair }}</li>
                </ul>
                <button class="btn border-black inline-flex  items-center py-1 px-5 text-lg">View Profile</button>

              </div>
            </div>
          </div>
        </div>
        <!-- //Block Items -->
      </div>
    </section>
  </div>
</template>

<script>
import IconArrowR from "~/assets/icons/arrow-sm-right.svg?inline";
export default {
  components: { IconArrowR },
  data: function () {
    return {
      // List Models
      itemsFmodels: [
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,w_800/v1636094399/Fashen/girl-g00047dd1a_1920_jtt2q2.webp",
          title: "Kristin Shavels",
          Born: "September 9, 1992",
          Height: "178 cm / 5’83",
          Hair: "Blonde",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,w_800/v1636094319/Fashen/woman-ga_1920_qpbyxj.webp",
          title: "Susan Bryant",
          Born: "October 7, 1995",
          Height: "165 cm / 5’41",
          Hair: "Blonde",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,w_800/v1636094394/Fashen/portrait_1920_e6gbn4.webp",
          title: "Kelly Simpson",
          Born: "October 8, 1988",
          Height: "165 cm / 5’41",
          Hair: "Rude",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north_west,w_800/v1637327009/Fashen/Girls/woman-6_1920_bhyz8t.webp",
          title: "Marie Austin",
          Born: "October 8, 1998",
          Height: "165 cm / 5’41",
          Hair: "Brown",
        },
        // Next Four Models
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_533,w_800/v1636819456/Fashen/Girls/girl-3_1920_l9yvld.webp",
          title: "Lori Oliver",
          Born: "October 8, 1998",
          Height: "185 cm / 6’06",
          Hair: "Black",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,w_800/v1636821258/Fashen/Girls/girl-21_1920_yjak8b.webp",
          title: "Amber West",
          Born: "October 8, 1998",
          Height: "165 cm / 5’41",
          Hair: "Brown",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_800,w_800/v1636819435/Fashen/Girls/girl-14_1920_npum8o.webp",
          title: "Natalie Krauze",
          Born: "October 8, 1998",
          Height: "165 cm / 5’41",
          Hair: "Brown",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_faces,h_800,w_800/v1636819432/Fashen/Girls/girl-15_1920_whdrm3.webp",
          title: "Snow White",
          Born: "October 8, 1998",
          Height: "165 cm / 5’41",
          Hair: "Black",
        },
      ],
    };
  },
};
</script>

<style>
/* .bg__header-page {
  background-image: url("https://res.cloudinary.com/poliweb/image/upload/c_crop,g_north,h_400,w_1920/v1636956214/HeroCarousel/slide-girl-face1_vbpmzp.jpg");
  background-size: cover;
  z-index: -2;
} */
.masck__header-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-masck);
  height: 100%;
  z-index: 2;
  transition: background-color 0.3s;
  color: #111812a1;
}

.arrow__color {
  color: var(--btn-border-black);
}
</style>
