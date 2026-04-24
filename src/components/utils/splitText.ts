import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  // SplitText disabled - trial plugin not available
  // This function is a placeholder that can be extended later
  ScrollTrigger.config({ ignoreMobileResize: true });
  
  if (window.innerWidth < 900) return;
}
