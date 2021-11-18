import {
  gsap
} from "gsap";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: "top -200",
  end: 99999,
  toggleClass: {
    targets: ".main-tool-bar",
    className: "main-tool-bar--scrolled",
  },
});
