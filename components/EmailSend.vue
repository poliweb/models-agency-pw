<template>
  <section class="body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center"
            alt="hero"
            src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_600,w_720/v1636259784/Fashen/women-office_1920_rj7adp.webp"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h2
            class="title-color text-3xl md:text-4xl title-font font-semibold mb-3"
          >Leave your application<br/> for a modeling agency</h2>
          <p
            class="mb-8 leading-relaxed"
          >Intrinsicly pursue customer directed opportunities through accurate value. Intrinsicly unleash covalent applications through sticky services.</p>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-2/3 w-2/4">
              <label for="hero-field" class="leading-7 text-sm">Your E-mail</label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                class="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="btn border-black inline-flex  items-center py-1 px-5 text-lg"
            >Send <IconArrowBtn class="w-4 h-4 ml-2"/>
            </button>
          </div>
          <p class="text-sm mt-2 mb-8 w-full">Or call the number +7 701 721 1284.</p>
        </div>
      </div>
    </section>
</template>

<script>
import IconArrowBtn from "~/assets/icons/arrow-btn.svg?inline";
export default {
  components: { IconArrowBtn },
};
</script>

<style>
</style>
