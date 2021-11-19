<template>
  <div>
    <!-- Header page -->
    <div class="relative">
      <img src="https://res.cloudinary.com/poliweb/image/upload/c_crop,g_north,h_400,w_1920/v1636956214/HeroCarousel/slide-girl-face1_vbpmzp.jpg" alt="blog.alt" class="absolute h-full w-full object-cover z-0" />
      <div class="masck__header-page"></div>
      <div class="container mx-auto py-28 flex flex-col place-content-center text-center ">
        <h2 class="title-dark text-5xl md:text-7xl font-bold z-10">Our Models</h2>
        <p class="text-white leading-relaxed text-2xl px-5 z-10">The only Mastermind course you will ever need for winning big on Crypto markets and trading.</p>
      </div>
    </div>
    <!-- Content page -->
    <div class="container mx-auto">
    <h1>Models</h1>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
