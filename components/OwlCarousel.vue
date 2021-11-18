<template>
<div class="">
    <client-only placeholder="Loading...">
    <!-- important to add no-ssr-->
    <carousel
      :margin="0"
      :nav="true"
      :autoplay="true"
      :autoplayHoverPause="true"
      :responsive="{
        0: { items: 1, nav: false },
        540: { items: 2, nav: true },
        1024: { items: 3, nav: true },
        1280: { items: 4, nav: true },
        1920: { items: 4, nav: true }
      }"
    >
      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420/v1636871720/Fashen/Girls/girl-22_1920_fqc7rh.webp" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636880038/Fashen/Carousel/fashion-3080644_960_720_v2uusn.jpg" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636879225/Fashen/Carousel/woman-1274056_960_720_ng2cju.jpg" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636880351/Fashen/Carousel/woman-1867093_960_720_qwbmzp.jpg" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636879140/Fashen/Carousel/man-1866574_960_720_uxfpki.jpg" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636879048/Fashen/Carousel/woman-97088_960_720_yiwpyw.jpg" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636879109/Fashen/Carousel/man-1283231_960_720_zeyyoq.webp" />

      <img src="https://res.cloudinary.com/poliweb/image/upload/c_fill,h_420,w_420/v1636879016/Fashen/Carousel/musician-664432_960_720_ghku5x.webp" />
    </carousel>
  </client-only>
</div>
</template>

<script>
export default {};
</script>

<style>
.owl-carousel .owl-nav button.owl-prev,
.owl-carousel .owl-nav button.owl-next {
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  font-size: 28px !important;
  transition: all 0.3s ease-out;
}

.owl-carousel .owl-nav [class*="owl-"] {
  margin: 0px !important;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}

.owl-carousel .owl-nav {
  margin-top: 24px !important;
  margin-bottom: 12px !important;
  text-align: center !important;
  -webkit-tap-highlight-color: transparent !important;
}

.owl-carousel .owl-nav [class*="owl-"]:hover {
  background: #d1bd6c !important;
  color: #fff;
  text-decoration: none;
}

.owl-carousel .owl-nav [class*="owl-"] span {
  padding: 0px 20px;
}

.owl-carousel .owl-dots .owl-dot span {
  width: 10px;
  height: 10px;
  margin: 5px 7px;
  background: #d1bd6c91 !important;
  display: block;
  -webkit-backface-visibility: visible;
  transition: opacity 200ms ease;
  border-radius: 30px !important;
}
.owl-carousel .owl-dots .owl-dot.active span,
.owl-carousel .owl-dots .owl-dot:hover span {
  background: #d1bd6c !important;
}
</style>
