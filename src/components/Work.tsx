import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
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
