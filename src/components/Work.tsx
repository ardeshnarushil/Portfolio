import "./styles/Work.css";
import { useEffect } from "react";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Online Shopping Cart</h4>
                  <p>E-commerce Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, HTML, SQL - Product browsing, Cart management, User authentication, Checkout system</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="Online Shopping Cart" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>PMS &amp; Kiosk System</h4>
                  <p>Hotel Management Backend</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, AWS Lambda, PostgreSQL - RESTful APIs, Check-in/Check-out, Role-based access, Push notifications</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="PMS Kiosk System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
