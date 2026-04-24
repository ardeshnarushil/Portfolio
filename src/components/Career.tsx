import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Information Technology</h4>
                <h5>Uka Tarsadia University</h5>
              </div>
              <h3>2021-2023</h3>
            </div>
            <p>
              Bachelor's Degree in Information Technology with CGPA: 7.8. Gained strong foundation in programming, databases, and software development principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Online Shopping Cart Project</h4>
                <h5>Python Developer</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed a full-featured online shopping cart system with Python, HTML, and SQL. Features include product browsing, add/remove/update items, cart calculations with discounts, user authentication system, and checkout functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PMS & Kiosk System</h4>
                <h5>Backend Developer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built Hotel Property Management System (PMS) backend with Python, AWS Lambda, and PostgreSQL. Developed RESTful APIs for users, hotels, bookings, and payments. Implemented role-based access control, guest check-in/check-out system, booking dashboard, and Apple VoIP Push Notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
