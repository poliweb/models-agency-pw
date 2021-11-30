<template>
   <!-- Content Female and Male -->
    <section class="body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col md:flex-row max-w-6xl mx-auto">
          <div class="sm:w-full md:w-2/4 m-5 relative overflow-hidden models-block">
            <NuxtLink to="/models">
              <h3
                class="z-10 text-5xl px-10 py-32 text-center font-black text-primary-accent"
              >Female Models</h3>
            </NuxtLink>
            <img
              src="~/assets/images/neve-fashion-agency-29.jpg"
              alt="Female Models"
              class="absolute top-0 fone"
            />
          </div>
          <div class="sm:w-full md:w-2/4 m-5 relative overflow-hidden models-block">
            <NuxtLink to="/">
              <h3
                class="z-10 text-5xl px-10 py-32 text-center font-black text-primary-accent"
              >Male Models</h3>
            </NuxtLink>
            <img
              src="~/assets/images/neve-fashion-agency-22.jpg"
              alt="Male Models"
              class="absolute top-0 fone"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- //Content Female and Male -->
</template>

<script>
export default {};
</script>

<style>
img.fone {
  z-index: -1;
  transition: all 0.5s ease-in-out;
}

.models-block:hover img.fone {
  transform: scale(1.3);
}
</style>
