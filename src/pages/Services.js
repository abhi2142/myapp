import React from "react";
import "./Services.css";

function Services() {
  const services = [
    "Employee Onboarding",
    "Attendance Management",
    "Payroll Insights",
    "Leave Approvals",
    "Performance Reviews",
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service}</h3>
            <p>Comprehensive {service.toLowerCase()} system.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
