<template>
  <!-- TOP BANER -->
  <section class="hero text-gray-600 body-font relative">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="z-10 lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed text-2xl text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white  text-xl font-extrabold uppercase border-solid border-white border-2 py-6 px-12 focus:outline-none hover-bg-green">See our Models</button>
        <!-- <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> -->
      </div>
    </div>
    <div class="lg:w-1/2">

    </div>
  </div>
  <div class="masck z-0"></div>
</section>
   <!-- //TOP BANER -->
</template>

<script>
export default {};
</script>

<style>
.hero {
  background: url(~/static/images/neve-fashion-agency-02.jpg) no-repeat scroll
    center center/cover;
  background-color: #a37d58;
  /* background-image: url(~/static/images/neve-fashion-agency-02.jpg);
  background-repeat: no-repeat;
  background-size: cover; */
  height: 584px;
}

.hover-bg-green {
  transition: all 0.5s ease-in-out;
}

.hover-bg-green:hover {
  background-color: #41b38a;
  /* border-color: #41b38a; */
}
@media (max-width: 1024px) {
  .masck {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0000008a;
    height: 100%;
    z-index: 3;
  }
}
@media (max-width: 1280px) {
  .hero {
    background: url(~/static/images/neve-fashion-agency-02.jpg) no-repeat scroll
      center right/cover;
    height: 100%;
  }
}
</style>
