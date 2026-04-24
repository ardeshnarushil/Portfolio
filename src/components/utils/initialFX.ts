import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  // SplitText plugin disabled - trial plugin not available
  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });
  // Animation effects disabled - requires SplitText plugin
}
