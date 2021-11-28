<template>
  <section class="body-font">
    <div class="container px-5 py-24 mx-auto max-w-6xl">
      <h2 class="title-color title-font text-3xl md:text-4xl title-font font-semibold mb-8">News</h2>
      <!-- Item News  -->
      <div class="items__news">
        <!-- Item News1  -->
      <div class="items__news-item flex items-center mb-4">
        <div class="news-foto m-2.5 overflow-hidden model-img">
          <a
              data-fancybox="gallery-news"
              href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_1400,w_1400/v1636094400/Fashen/fashion-3_1920_j5gq8i.webp"
            >
          <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_400,w_400/v1636094400/Fashen/fashion-3_1920_j5gq8i.webp" alt="" class="w-full">
          </a>
        </div>
        <div class="news-text p-2.5">
          <h3 class="text-2xl title-color">You were made for love – Official Video</h3>
          <h4 class="">by Author</h4>
          <p class="">Introduction Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book fingerstache schlitz retro cronut man bun copper mug small batch trust fund ethical bicycle rights… </p>
          <NuxtLink to="/" class="inline-flex  items-center">Read More <IconArrowBtn class="w-4 h-4 ml-2"/></NuxtLink>
        </div>
      </div>
      <!-- //Item News1  -->
      <!-- Item News2  -->
      <div class="items__news-item flex items-center mb-4">
        <div class="news-foto m-2.5 overflow-hidden model-img">
          <a
              data-fancybox="gallery-news"
              href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_1400,w_1400/v1636094398/Fashen/girl-4_1920_votltj.webp"
            >
          <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_400,w_400/v1636094398/Fashen/girl-4_1920_votltj.webp" alt="" class="w-full">
          </a>
        </div>
        <div class="news-text p-2.5">
          <h3 class="text-2xl title-color">How To prepare for a Model Casting</h3>
          <h4 class="">by Author</h4>
          <p class="">Introduction Readymade godard brooklyn, kogi shoreditch hashtag hella shaman kitsch man bun pinterest flexitarian. Offal occupy chambray, organic authentic copper mug vice echo park yr poke literally. Ugh coloring book fingerstache schlitz retro cronut man bun copper mug small batch trust fund ethical bicycle rights … </p>
          <NuxtLink to="/" class="inline-flex  items-center">Read More <IconArrowBtn class="w-4 h-4 ml-2"/></NuxtLink>
        </div>
      </div>
      <!-- //Item News2  -->
      <!-- Item News3  -->
      <div class="items__news-item flex items-center mb-4">
        <div class="news-foto m-2.5 overflow-hidden model-img">
          <a
              data-fancybox="gallery-news"
              href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north_east,h_1400,w_1400/v1636094319/Fashen/woman-5_1920_xoh24f.webp"
            >
          <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_north_east,h_400,w_400/v1636094319/Fashen/woman-5_1920_xoh24f.webp" alt="" class="w-full">
          </a>
        </div>
        <div class="news-text p-2.5">
          <h3 class="text-2xl title-color">Limo Fashion Show with Maria Smith</h3>
          <h4 class="">by Mihai</h4>
          <p class="">Holisticly implement client-based internal or "organic" sources whereas emerging users. Monotonectally pursue goal-oriented systems through backward-compatible e-business. Progressively conceptualize multimedia based leadership with revolutionary customer service. Efficiently productivate impactful experiences without … </p>
          <NuxtLink to="/" class="inline-flex  items-center">Read More <IconArrowBtn class="w-4 h-4 ml-2"/></NuxtLink>
        </div>
      </div>
      <!-- //Item News3  -->
      <!-- Item News4  -->
      <div class="items__news-item flex items-center mb-4">
        <div class="news-foto m-2.5 overflow-hidden model-img">
          <a
              data-fancybox="gallery-news"
              href="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_1400,w_1400/v1636094321/Fashen/woman-2_1920_lsote0.webp"
            >
          <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,g_center,h_400,w_400/v1636094321/Fashen/woman-2_1920_lsote0.webp" alt="" class="w-full">
          </a>
        </div>
        <div class="news-text p-2.5">
          <h3 class="text-2xl title-color">Assertively incentivize covalent "outside the.</h3>
          <h4 class="">by Mihai</h4>
          <p class="">Assertively procrastinate collaborative intellectual capital via high-quality resources. Collaboratively impact prospective metrics for timely total linkage. Competently engineer distinctive scenarios through interactive catalysts for change. Uniquely redefine interoperable outsourcing for long-term high-impact supply chains. Objectively myocardinate fully tested benefits for prospective channels… </p>
          <NuxtLink to="/" class="inline-flex  items-center">Read More <IconArrowBtn class="w-4 h-4 ml-2"/></NuxtLink>
        </div>
      </div>
      <!-- //Item News4  -->
      </div>
      <!-- //Item News  -->
    </div>
     <!-- Leave your application EmailSend for a modeling agency -->
    <EmailSend/>
    <!-- //Leave your application EmailSend for a modeling agency -->
  </section>
</template>

<script>
import IconArrowBtn from "~/assets/icons/arrow-btn.svg?inline";
export default {
  components: { IconArrowBtn },
};
</script>

<style>
.items__news .items__news-item .news-foto {
  width: 100%;
}

.items__news .items__news-item .news-text {
  width: 100%;
}

.items__news .items__news-item {
  flex-direction: column;
}
.model-img img {
  transition: all 0.5s ease-in-out;
}

.items__news-item:hover .model-img img {
  transform: scale(1.3);
}

@media (min-width: 640px) {
  .items__news .items__news-item .news-foto {
    width: 50%;
  }

  .items__news .items__news-item .news-text {
    width: 50%;
  }
  .items__news .items__news-item {
    flex-direction: row;
  }
  .items__news .items__news-item:nth-child(2n) {
    flex-direction: row-reverse;
  }
}

@media (min-width: 768px) {
  .items__news .items__news-item .news-foto {
    width: 33.333333%;
  }

  .items__news .items__news-item .news-text {
    width: 66.666667%;
  }

  .items__news .items__news-item {
    flex-direction: row;
  }

  .items__news .items__news-item:nth-child(2n) {
    flex-direction: row-reverse;
  }
}
</style>
