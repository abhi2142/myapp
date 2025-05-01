import React from "react";
import "./Home.css"; // Assume all styles are in App.css

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h2 className="hero-heading">Modernize Your HR Operations</h2>
        <p className="hero-subtext">
          HR Cloud Hub simplifies employee management, from onboarding to payroll,<br />
          empowering both HR teams and employees.
        </p>
        <button className="hero-button">Explore Features ✅</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h3 className="features-heading">Key Features</h3>
        <div className="features-grid">
          {[
            { icon: "👥", title: "Employee Onboarding", desc: "Streamline the process of welcoming new hires." },
            { icon: "⏰", title: "Leave & Attendance", desc: "Track time off and attendance effortlessly." },
            { icon: "📄", title: "Performance Reviews", desc: "Manage employee evaluations and feedback." },
            { icon: "💲", title: "Payroll Management", desc: "Simplify payroll processing and compliance." }
          ].map((feature, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h3 className="testimonials-heading">What Our Users Say</h3>
        <div className="testimonials-grid">
          {[
            {
              text: "HR Cloud Hub transformed our onboarding. What used to take days now takes hours!",
              name: "Alice Chen",
              title: "HR Manager, Tech Innovate",
              img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              text: "Managing leave requests is finally simple. Our team loves the transparency.",
              name: "Bob Williams",
              title: "CEO, Creative Solutions",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              text: "Accessing my payslips and checking attendance is super easy now. Great platform!",
              name: "Charlie Davis",
              title: "Employee, Global Corp",
              img: "https://randomuser.me/api/portraits/men/45.jpg"
            }
          ].map((t, i) => (
            <div className="testimonial-card" key={i}>
              <blockquote>
                <span className="quote-line"></span>“{t.text}”
              </blockquote>
              <div className="testimonial-user">
                <img src={t.img} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <p>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
