<template>
   <section class="body-font">
      <div class="px-0 md:px-5 py-24 mx-auto max-w-6xl">
        <client-only placeholder="Loading...">
          <agile :autoplay="true" :autoplaySpeed="5000">
            <div>
              <img
                src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north,h_600,w_1152/v1637637498/Fashen/Girls/woman-7_1920_tabm2n.webp"
                alt
                class
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_1152/v1636094397/Fashen/girl_1920_iwvucn.webp"
                alt
                class
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_1152/v1637640701/Fashen/Girls/woman-8_1920_s1yctu.webp"
                alt
                class
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_face:center,h_600,w_1152/v1637640701/Fashen/Girls/woman-9_1920_dqq00g.webp"
                alt
                class
              />
            </div>
            <!-- Button PREV and NEXT -->
            <template slot="prevButton">
              <button class="prev">&#10094;</button>
            </template>
            <template slot="nextButton">
              <button class="next">&#10095;</button>
            </template>
          </agile>
        </client-only>
      </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>
