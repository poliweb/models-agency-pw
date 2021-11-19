<template>
  <client-only placeholder="Loading...">
    <agile :autoplay="true" :autoplaySpeed="5000">
      <!-- ==================================== -->
      <div class="slide relative">
        <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:auto,h_850,w_1920/v1636094398/Fashen/girl-3_1920_cy4dnl.webp" alt="blog.alt" class="absolute h-full w-full object-cover z-0" />
        <!-- Content -->
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="slide-content z-10 lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title title-dark title-font sm:text-4xl text-3xl mb-4 font-extrabold">
              We are looking for new faces
              <br class="hidden lg:inline-block" />in a modeling agency
            </h1>
            <p
              class="sub-title mb-8 leading-relaxed text-2xl text-white"
            >Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="button-wrap flex justify-center">
              <NuxtLink
                to="/"
                class="btn inline-flex text-white text-xl font-extrabold uppercase border-solid border-white border-2 py-6 px-12 focus:outline-none"
              >See our Models</NuxtLink>
              <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
            </div>
          </div>
          <div class="lg:w-1/2"></div>
        </div>
        <!-- //Content -->
        <div class="masck"></div>
      </div>
      <!-- ==================================== -->
      <div class="slide relative bg-slide2">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="slide-content z-10 lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title title-dark title-font sm:text-4xl text-3xl mb-4 font-extrabold">
              Your big investment
              <br class="hidden lg:inline-block" />in elegance and fashion
            </h1>
            <p
              class="sub-title mb-8 leading-relaxed text-2xl text-white"
            >Synergistically initiate business intellectual capital without integrated customer service. Distinctively create technically sound infomediaries vis-a-vis.</p>
            <div class="button-wrap flex justify-center">
              <NuxtLink
                to="/"
                class="btn inline-flex text-white text-xl font-extrabold uppercase border-solid border-white border-2 py-6 px-12 focus:outline-none"
              >See our Models</NuxtLink>
              <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
            </div>
          </div>
          <div class="lg:w-1/2"></div>
        </div>
        <div class="masck"></div>
      </div>
      <!-- ==================================== -->
      <div class="slide relative bg-slide3">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="slide-content z-10 lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title title-dark title-font sm:text-4xl text-3xl mb-4 font-extrabold">
              A network of elite modeling
              <br class="hidden lg:inline-block" />agencies in a big city
            </h1>
            <p
              class="sub-title mb-8 leading-relaxed text-2xl text-white"
            >Progressively grow mission-critical "outside the box" thinking after fully researched. Dramatically evisculate timely communities vis-a-vis exceptional sources.</p>
            <div class="button-wrap flex justify-center">
              <NuxtLink
                to="/"
                class="btn inline-flex text-white text-xl font-extrabold uppercase border-solid border-white border-2 py-6 px-12 focus:outline-none"
              >See our Models</NuxtLink>
              <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
            </div>
          </div>
          <div class="lg:w-1/2"></div>
        </div>
        <div class="masck"></div>
      </div>
      <!-- ==================================== -->
      <div class="slide relative bg-slide4">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="slide-content z-10 lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title title-dark title-font sm:text-4xl text-3xl mb-4 font-extrabold">
              Advertising video clips
              <br class="hidden lg:inline-block" />turnkey ready
            </h1>
            <p
              class="sub-title mb-8 leading-relaxed text-2xl text-white"
            >Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div class="button-wrap flex justify-center">
              <NuxtLink
                to="/"
                class="btn inline-flex text-white text-xl font-extrabold uppercase border-solid border-white border-2 py-6 px-12 focus:outline-none"
              >See our Models</NuxtLink>
              <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
            </div>
          </div>
          <div class="lg:w-1/2"></div>
        </div>
        <div class="masck"></div>
      </div>
      <!-- ==================================== -->

       <!-- Button PREV and NEXT -->
       <template slot="prevButton"
        ><button class="prev">&#10094;</button></template
      >
      <template slot="nextButton"
        ><button class="next">&#10095;</button></template
      >
    </agile>
  </client-only>
</template>

<script>
export default {};
</script>

<style>
.slide {
  height: 650px;
}
.bg-foto {
  position: absolute;
  top: 0;
  height: 100%;
  z-index: -2;
}

.masck {
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

.hover-bg-green {
  transition: all 0.5s ease-in-out;
}

.hover-bg-green:hover {
  background-color: #41b38a;
  /* border-color: #41b38a; */
}

/* BG Slide */
.bg-slide1 {
  background: url(https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:auto,h_850,w_1920/v1636094398/Fashen/girl-3_1920_cy4dnl.webp)
    no-repeat scroll top center/cover;
  z-index: 1;
}

.bg-slide2 {
  background: url(https://res.cloudinary.com/poliweb/image/upload/v1636955920/HeroCarousel/slide-girl-face3_b9tbjk.webp)
    no-repeat scroll top center/cover;
  z-index: 1;
}

.bg-slide3 {
  background: url(https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north_east,h_850,w_1920,y_0/v1636903091/HeroCarousel/young-woman_1920_kfi4s5.jpg)
    no-repeat scroll top center/cover;
  z-index: 1;
}

.bg-slide4 {
  background: url(https://res.cloudinary.com/poliweb/image/upload/v1636955920/HeroCarousel/slide-girl-face2_lwgpha.webp)
    no-repeat scroll center center/cover;
  z-index: 1;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: #d1bd6c;
  font-weight: bold;
  font-size: 24px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  z-index: 15;
  opacity: 0;
}
.agile:hover .agile__actions .agile__nav-button .prev,
.agile:hover .agile__actions .agile__nav-button .next {
  opacity: 1;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
/*  */

/* Animate.CSS content*/
.slide.agile__slide--active .container .slide-content .title {
  animation-name: fadeInUp;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.slide.agile__slide--active .container .slide-content .sub-title {
  animation-name: fadeInUp;
  animation-delay: 0.9s;
  animation-duration: 1s;
  animation-fill-mode: both;
}

.slide.agile__slide--active
  .container
  .slide-content
  .button-wrap
  a:first-child {
  animation-name: fadeInUp;
  animation-delay: 1.3s;
  animation-duration: 1s;
  animation-fill-mode: both;
}
/* .slide.agile__slide--active
  .container
  .slide-content
  .button-wrap
  a:nth-child(2) {
  animation-name: fadeInUp;
  animation-delay: 2.5s;
  animation-duration: 1s;
  animation-fill-mode: both;
} */

.agile__slide--active .container .slide-content > :nth-child(4) {
  animation-delay: 1.8s;
}
.agile__slide .container .slide-content {
  opacity: 0;
}
.agile__slide.agile__slide--active .container .slide-content {
  opacity: 1;
}
/* //Animate.CSS content */
</style>
