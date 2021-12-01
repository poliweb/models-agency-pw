<template>
  <section class="body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <iframe
          width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32891.59912311256!2d76.85621732018055!3d43.22555127402949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1638351491723!5m2!1sru!2skz"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-color title-font font-semibold tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1 text-contact">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-color title-font font-semibold tracking-widest text-xs">EMAIL</h2>
            <a class="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 class="title-color title-font font-semibold tracking-widest text-xs mt-4">PHONE</h2>
            <p class="text-contact leading-relaxed">+7 701 721 1284</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4">
        <h2 class="title-color title-font text-3xl md:text-4xl title-font font-semibold mb-4">Feedback</h2>
        <p
          class="leading-relaxed mb-5 text-contact"
        >Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-contact">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-contact">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm  text-contact">Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <NuxtLink to="#"
          class="btn border-black text-contact text-center py-2 px-6 focus:outline-none text-lg"
        >
        <div class=" inline-flex items-center">
          Send a message <IconArrowBtn class="w-4 h-4 ml-2"/>
        </div>
        </NuxtLink>
        <p
          class="text-xs   text-contact mt-3"
        >Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
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
.title-color {
  color: var(--title-color);
}
.text-contact {
  color: var(--text-contact-form);
}

.btn {
  transition: all 0.3s ease-in-out;
}

.border-black {
  border: 2px solid var(--btn-border-black);
}
</style>
