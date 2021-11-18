<template>
  <div>
    <div class="main-tool-bar top-block"></div>
    <header class="main-tool-bar border-bottom header-main">
      <div class="container mx-auto flex flex-wrap lex-row items-center py-3">
        <div class="w-3/4 md:w-2/4 lg:w-1/4">
          <NuxtLink to="/" class="flex title-font font-medium items-center md:mb-0">
            <Logo />
            <span
              class="text-logo ml-3 text-gray-100 font-extrabold text-xl uppercase"
            >fashion Models</span>
          </NuxtLink>
        </div>
        <div class="w-1/4 md:w-2/4 lg:w-3/4 flex flex-row items-center ml-auto">
          <nav class="md:ml-auto hidden lg:flex lg:flex-wrap items-center text-base justify-center">
             <!-- Список верхнего меню сайта -->
            <NuxtLink
              v-for="menuLink in menuLinks"
              :key="menuLink.index"
              :to="menuLink.to"
              class="mr-5"
              >{{ menuLink.title }}
            </NuxtLink>
            <!-- <NuxtLink to="/" class="mr-5">Homepage</NuxtLink>
            <NuxtLink to="/models" class="mr-5">Models</NuxtLink>
            <NuxtLink to="/models-details" class="mr-5">Models details</NuxtLink>
            <NuxtLink to="/news" class="mr-5">News</NuxtLink>
            <NuxtLink to="/about" class="mr-5">About</NuxtLink>
            <NuxtLink to="/contact" class="mr-5">Contact</NuxtLink> -->
          </nav>
          <a
            href="tel:+77017211284"
            class="tel ml-auto lg:ml-0 hidden md:inline-flex items-center gap-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
          >
            +7 701 721 1284
            <IconTel class="w-6 h-6" />
          </a>
          <!-- Button mobile menu -->
        <button @click="toggleMenu" class="ml-auto block lg:hidden justify-self-end ButtonColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
          <!-- //Button mobile menu -->
        </div>
      </div>
    </header>
      <!-- Блок DIV - Мобильного Меню -->
    <div :class="[isOpenMenu ? 'show-mobile-menu' : '']" class="offcanvas-mobile-menu">
      <div @click="toggleMenu" class="mobile-menu-overlay"></div>
      <div class="inner">
        <div class="mobile-header border-bottom">
          <div @click="toggleMenu" class="logo text-white">
            <NuxtLink to="/" class="flex title-font font-medium items-center md:mb-0">
              <Logo/>
              <span
                class="text-logo ml-3 text-gray-100 font-extrabold text-xl uppercase"
              >{{ LogoTitle }}</span>
            </NuxtLink>
          </div>
          <button @click="toggleMenu" class="mobile-close-btn"></button>
        </div>
        <div class="menu-content">
          <div class="mobile-navigation">
            <ul class="offcanvas-navigation flex flex-col">
              <!-- ===================================== -->
              <li v-for="menuLink in menuLinks" :key="menuLink.index" @click="toggleMenu">
                <NuxtLink :to="menuLink.to" class="py-2 block">
                  {{
                    menuLink.title
                  }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- //Блок DIV - Мобильного Меню -->
  </div>
</template>

<script>
import IconTel from "~/assets/icons/tel.svg?inline";
export default {
  components: { IconTel },
  data: function () {
    return {
      isOpenMenu: false,
      // Список меню сайта
      LogoTitle: "fashion models",
      menuLinks: [
        {
          title: "Главная",
          to: "/",
        },
        {
          title: "Models",
          to: "/models",
        },
        {
          title: "Models details",
          to: "/models-details",
        },
        {
          title: "News",
          to: "/news",
        },
        {
          title: "About",
          to: "/about",
        },
        {
          title: "Contact",
          to: "/contact",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style>
:root {
  --nv-primary-accent: #d1bd6c;
  --nv-secondary-accent: #dec664;
  --nv-site-bg: #ffffff;
  --nv-light-bg: #fffaf2;
  --nv-dark-bg: #161616;
  --nv-text-color: #0a0909;
  --nv-text-dark-bg: #ffffff;
  --nv-tel-btn-bg: #e5e7eb;
  --nv-tel-text-bg: #0a0909;
  --nv-c-1: #77b978;
  --nv-c-2: #f37262;
  --nv-fallback-ff: Arial, Helvetica, sans-serif;
  --nv-bg-logo: #e5e7eb;
  --nv-text-logo: #e5e7eb;
  --nv-button-mobile-menu: #d1bd6c;
}

.dark-mode {
  --nv-tel-text-bg: #fffaf2;
  --nv-tel-btn-bg: #41b38a;
  --nv-bg-logo: #41b38a;
  --nv-text-logo: #41b38a;
  --nv-dark-bg: #091a28;
  --nv-button-mobile-menu: #ffffff;
}

.sepia-mode {
  --nv-tel-text-bg: #433422;
  --nv-tel-btn-bg: #f1e7d0;
  --nv-bg-logo: #f1e7d0;
  --nv-text-logo: #f1e7d0;
}

.header-main {
  background-color: var(--nv-dark-bg);
}
/* .nav-link-text {
  color: var(--nv-text-dark-bg);
} */
.border-bottom {
  border-bottom: 2px solid var(--btn-border-white);
}
nav a {
  color: var(--nv-text-dark-bg);
}
nav a.nuxt-link-exact-active {
  color: var(--nv-primary-accent);
}
.header-main a.tel {
  color: var(--nv-tel-text-bg);
  background-color: var(--nv-tel-btn-bg);
  transition: background-color 0.3s;
}
nav a:hover {
  color: var(--nv-secondary-accent);
}
.bg-logo {
  background-color: var(--nv-bg-logo);
}
.text-logo {
  color: var(--nv-text-logo);
}

.header-main.main-tool-bar--scrolled {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  position: fixed;
  -webkit-animation: fadeInDown 0.5s ease-in-out;
  animation: fadeInDown 0.5s ease-in-out;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
}


.main-tool-bar.top-block {
  height: 0;
}
.main-tool-bar.top-block.main-tool-bar--scrolled {
  height: 74px;
}

/* CSS Мобильного меню */
.ButtonColor {
  color: var(--nv-button-mobile-menu);
}
.show-mobile-menu.offcanvas-mobile-menu {
  opacity: 1;
  visibility: visible;
}
.offcanvas-mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 99999;
}
.offcanvas-mobile-menu .inner .mobile-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 74px;
  background-color: var(--nv-dark-bg);
  color: #fff;
  padding: 0 15px 0 30px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  position: absolute;
  top: 19px;
  left: 8px;
  content: "";
  width: 24px;
  height: 3px;
  background: #fff;
  transform-origin: 50% 50%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.offcanvas-mobile-menu .mobile-menu-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.show-mobile-menu.offcanvas-mobile-menu .inner {
  transform: none;
}
.offcanvas-mobile-menu .inner {
  position: absolute;
  width: 400px;
  max-width: 80%;
  height: 100%;
  right: 0;
  top: 0;
  text-align: left;
  transition: all 0.3s;
  transform: translateX(100%);
  cursor: default;
  background-color: var(--bg);
  z-index: 1;
}
.menu-content {
  min-height: 360px;
  margin: 30px;
  max-height: 400px;
  overflow-y: auto;
}
.offcanvas-navigation ul li a {
  color: #212529;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  display: block;
}
.offcanvas-mobile-menu .mobile-menu-overlay {
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn {
  cursor: pointer;
  border: none;
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after,
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  position: absolute;
  top: 14px;
  left: 1px;
  content: "";
  width: 30px;
  height: 3px;
  background: var(--nv-button-mobile-menu);
  transform-origin: 50% 50%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:before {
  transform: rotate(-45deg);
}
.offcanvas-mobile-menu .inner .mobile-header .mobile-close-btn:after {
  transform: rotate(45deg);
}
/* //CSS Мобильного меню */
</style>
