<template>
  <div>
    <!-- Item Model-Description -->
    <section class="body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center"
            alt="hero"
            src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_720/v1636094399/Fashen/girl-g00047dd1a_1920_jtt2q2.webp"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h3 class>model portfolio</h3>
          <h1
            class="title-color title-font text-3xl md:text-4xl title-font font-semibold mb-4"
          >Kristin Shavels</h1>
          <p
            class="mb-8 leading-relaxed"
          >Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div class="flex justify-center gap-4">
            <NuxtLink
              to
              href="#"
              class="btn border-black py-2.5 px-5 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Engage
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to
              href="#"
              class="btn border-black py-2.5 px-5 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Send a message
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- //Item Model-Description -->
    <!-- Item Model-Description + 4Foto -->
    <section class="body-font bg-featured">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-y-10 max-w-6xl mx-auto">
          <div class="sm:w-full md:w-1/3 my-5 p-5">
            <h3 class="title-dark text-3xl md:text-4xl title-font font-semibold mb-3">Portfolio</h3>
            <p
              class="text-bg-black"
            >A tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us.</p>
            <p
              class="text-bg-black"
            >Beforehand for a light lunch we would also like to invite you to other activities on the day</p>
            <ul class="mb-2">
              <li class="flex flex-row gap-x-2 text-bg-black">
                <IconArrowR class="w-6 h-6 arrow__color-modelsdetails" />Born: September 9, 1992
              </li>
              <hr class="hr__spacing mt-2.5 mb-5" />
              <li class="flex flex-row gap-x-2 text-bg-black">
                <IconArrowR class="w-6 h-6 arrow__color-modelsdetails" />Height: 178 cm / 5’83
              </li>
              <hr class="hr__spacing mt-2.5 mb-5" />
              <li class="flex flex-row gap-x-2 text-bg-black">
                <IconArrowR class="w-6 h-6 arrow__color-modelsdetails" />Hair: Blonde
              </li>
            </ul>
          </div>
          <div class="sm:w-full md:w-1/3 p-0 md:p-5">
            <div class="overflow-hidden model-img mb-10">
              <a
                data-fancybox="gallery"
                data-src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_800,w_800/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
                data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              >
                <img
                  src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_600/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
                  alt
                />
              </a>
            </div>
            <div class="overflow-hidden model-img">
              <a
                data-fancybox="gallery"
                data-src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_800/v1636094397/Fashen/girl_1920_iwvucn.webp"
                data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              >
                <img
                  src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_600/v1636094397/Fashen/girl_1920_iwvucn.webp"
                  alt
                />
              </a>
            </div>
          </div>
          <div class="sm:w-full md:w-1/3 p-0 md:p-5">
            <div class="overflow-hidden model-img mb-10">
              <a
                data-fancybox="gallery"
                data-src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_800/v1637640701/Fashen/Girls/woman-8_1920_s1yctu.webp"
                data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              >
                <img
                  src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_600/v1637640701/Fashen/Girls/woman-8_1920_s1yctu.webp"
                  alt
                />
              </a>
            </div>
            <div class="overflow-hidden model-img">
              <a
                data-fancybox="gallery"
                data-src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_800/v1637640701/Fashen/Girls/woman-9_1920_dqq00g.webp"
                data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
              >
                <img
                  src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_600/v1637640701/Fashen/Girls/woman-9_1920_dqq00g.webp"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- //Item Model-Description + 4Foto -->
    <!-- Item Model-Fotoalbom-Fancybox -->
    <section class="body-font">
      <div class="px-0 md:px-5 py-24 mx-auto max-w-6xl">
        <div class="flex flex-wrap gap-5 justify-center">
          <a data-fancybox-trigger="gallery-b" href="javascript:;">
            <img
              class="object-cover object-center"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_1152/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
            />
          </a>
          <a
            data-fancybox="gallery-b"
            href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_800,w_1536/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
          >
            <img
              class="rounded"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_80,w_120/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
            />
          </a>
          <a
            data-fancybox="gallery-b"
            href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_1536/v1636094397/Fashen/girl_1920_iwvucn.webp"
          >
            <img
              class="rounded"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_80,w_120/v1636094397/Fashen/girl_1920_iwvucn.webp"
            />
          </a>
          <a
            data-fancybox="gallery-b"
            href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_1536/v1637640701/Fashen/Girls/woman-8_1920_s1yctu.webp"
          >
            <img
              class="rounded"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_80,w_120/v1637640701/Fashen/Girls/woman-8_1920_s1yctu.webp"
            />
          </a>
          <a
            data-fancybox="gallery-b"
            href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_800,w_1536/v1637640701/Fashen/Girls/woman-9_1920_dqq00g.webp"
          >
            <img
              class="rounded"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_80,w_120/v1637640701/Fashen/Girls/woman-9_1920_dqq00g.webp"
            />
          </a>
          <a
            data-fancybox="gallery-b"
            href="https://res.cloudinary.com/poliweb/image/upload/g_face:center/v1636094394/Fashen/three-woman_1920_cew4se.webp"
          >
            <img
              class="rounded"
              src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_80,w_120/v1636094394/Fashen/three-woman_1920_cew4se.webp"
            />
          </a>
        </div>
      </div>
    </section>
    <!-- //Item Model-Fotoalbom-Fancybox -->
    <!-- Item Models with Similar experience -->
    <section class>
      <div class="container mx-auto px-5 py-24 max-w-6xl">
        <!-- Item Head -->
        <div class="flex flex-col text-center w-full mb-20">
          <h2
            class="text-xs tracking-widest font-medium title-font mb-1"
          >will interest you</h2>
          <h1
            class="title-color text-3xl md:text-4xl title-font font-semibold mb-3"
          >Models with Similar experience</h1>
          <p
            class="lg:w-2/3 mx-auto leading-relaxed text-base"
          >Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <!-- //Item Head -->
        <!-- Item Carts -->
        <div class="flex flex-wrap">
          <div v-for="CartsModel of CartsModels" :key="CartsModel.index" class="xl:w-1/4 md:w-1/2 w-full px-2.5 py-5 mb-5">
            <div class="rounded-lg text-center">
              <img decoding="async" width="600" height="600"
                class="w-full object-cover object-center mb-6"
                :src="CartsModel.img"
                alt="content"
              />
              <h2 class="text-2xl font-semibold leading-10 title-font mb-7 text-center">{{ CartsModel.nameModel}}</h2>
              <hr class="hr-separator mb-5 mt-2.5">
              <NuxtLink
              to
              href="#"
              class="btn border-black py-2.5 px-5 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
            </NuxtLink>
            </div>
          </div>
        </div>
        <!-- //Item Carts -->
      </div>
    </section>
    <!-- //Item Models with Similar experience -->
  </div>
</template>

<script>
import IconArrowR from "~/assets/icons/arrow-sm-right.svg?inline";

export default {
  components: { IconArrowR },
  data: function () {
    return {
      CartsModels: [
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_600/v1636819432/Fashen/Girls/girl-17_1920_bspnw5.webp",
          nameModel: "Inna Douglas",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_600/v1636819453/Fashen/Girls/girl-5_1920_swdq4r.webp",
          nameModel: "Nina Pipkens",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_600/v1636819438/Fashen/Girls/girl-12_1920_wbse0p.webp",
          nameModel: "Liza Krauze",
        },
        {
          img: "https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_600/v1636819432/Fashen/Girls/girl-16_1920_y7ylbe.webp",
          nameModel: "Susan Meyer",
        },
      ],
    };
  },
};
</script>

<style>
.hr__spacing {
  border-bottom: 0;
  border-top: 4px solid var(--color-hr-black);
}

.arrow__color-modelsdetails {
  color: var(--arrow-bg-black);
}

.text-bg-black {
  color: var(--color-text-bg-black);
}

.model-img img {
  transition: all 0.5s ease-in-out;
}

.model-img:hover img {
  transform: scale(1.3);
}
</style>
