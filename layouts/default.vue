<template>
  <div>
    <TopNav />
    <Nuxt />
    <Footer/>
    <div class="fixed bottom-0 right-0 z__top-menu">
      <ColorModePicker/>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Demo of using @nuxtjs/color-mode for NuxtJS, supporting dark mode and custom colors",
      },
    ],
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  font-family: "Roboto", Montserrat, sans-serif;
  overflow-x: hidden;
  position: relative;
  background-color: var(--bg);
  color: var(--color);
  transition: background-color 0.3s;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Montserrat;
}
p {
  padding: 20px 0;
  margin: 0;
}
.note {
  transition: all 0.3s;
  display: inline-block;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}

.z__top-menu {
  z-index: 100000;
}
</style>
