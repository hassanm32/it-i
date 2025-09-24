import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import "./LandingPage.css";
import "./SidebarMenu"
import SidebarMenu from "./SidebarMenu";


export default function LandingPage() {
    return (
    <div>
      {/* Header */}
        <header className="header" data-aos="fade-down">
        <div className="logo">Bond</div>
    <header style={{ background: "#004aad", padding: "10px 20px", color: "#fff" }}>
      <SidebarMenu />
    </header>

        </header>

      {/* Hero Section */}
        <section className="hero">
        <div className="hero-text" data-aos="fade-right">
            <h1>Powerful ERP Solutions for Your Business</h1>
            <p>
            We design and implement innovative ERP systems that streamline your
            operations, reduce costs, and boost productivity.
            </p>
            <button className="hero-btn">Request a Demo</button>
        </div>
        <div className="hero-image" data-aos="fade-left">
            <img src="/page2.webp" alt="ERP Solutions" />
        </div>
        </section>

      {/* Services Section */}
        <section id="services" className="services" data-aos="fade-up">
        <h2>Our ERP Services</h2>
        <div className="service-cards">
            <div className="card" data-aos="zoom-in">
            <h3>Custom ERP Development</h3>
            <p>Tailored ERP systems built to fit your unique business needs.</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Integration & Migration</h3>
            <p>Seamless integration with your existing tools and data migration.</p>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Support & Maintenance</h3>
            <p>Continuous updates, support, and training for your ERP system.</p>
            </div>
        </div>
        </section>



      {/* Call to Action Section */}
        <section className="cta" data-aos="flip-up">
        <h2>Ready to Transform Your Business?</h2>
        <p>Contact our experts today and get your ERP demo.</p>
        <button className="cta-btn">Get Started</button>
        </section>

                <section className="testimonials" data-aos="fade-up">
  <h2>What Our Clients Say</h2>
  <div className="testimonial-cards">
    <div className="testimonial">
      <p>“Great ERP system, improved our workflow!”</p>
      <span>- Company A</span>
    </div>
    <div className="testimonial">
      <p>“Excellent support and easy migration.”</p>
      <span>- Company B</span>
    </div>
  </div>
</section>

      {/* Footer */}
        <footer id="contact" data-aos="fade-up">
            <div className="socials">
  <a href="#"><FaLinkedin /></a>
  <a href="#"><FaFacebook /></a>
  <a href="#"><FaTwitter /></a>
</div>
        <p>© 2025 ERB. All rights reserved.</p>
        <p>Contact us: info@erb.com</p>
        </footer>
    </div>
    );
}
