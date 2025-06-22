import React from 'react';
import './About.css';


const About = () => {
  return (
    <><div className='about-whole'>
      <header>
        <nav>
          <div className="logo">AI TAX GUIDE</div>
          <ul>
            <li><a href="./taxguide">Home</a></li>
            <li><a href="./about">About us</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="about">
        <div className="about-us-section">
          <div className="about-us-container">
            <h1 className="about-title">ABOUT US</h1>
            <p className="about-intro">Welcome to AI-Tax Guide– your AI-powered tax assistant.</p>
            <p>
              We are on a mission to make tax filing simple, transparent, and stress-free for every individual.
              Our intelligent platform guides users through the entire process of filing income taxes in a
              step-by-step manner, using the power of artificial intelligence to simplify legal complexities
              and eliminate confusion.
            </p>

            <h2 className="about-subtitle">What We Do</h2>
            <p>
              Filing taxes can be overwhelming, especially with changing rules, various income sources, and
              multiple deductions. Our AI tax assistant is designed to solve this problem by:
            </p>
            <ul>
              <li><strong>Providing Personalized Guidance:</strong> Our system interacts with users like a virtual consultant, offering clear, step-by-step instructions tailored to their unique tax situation.</li>
              <li><strong>Clearing Tax-Related Confusions:</strong> Whether it's about deductions under Section 80C, HRA exemptions, or capital gains tax, our AI resolves user doubts in real time using natural language understanding.</li>
              <li><strong>Accurate Tax Calculation:</strong> Users simply input their income, deductions, and other financial details. The system calculates the taxable income and final tax liability based on the latest slab rates and rules.</li>
              <li><strong>Accessible Anytime, Anywhere:</strong> No appointments, no queues—just open your browser and get started.</li>
            </ul>

            <h2 className="about-subtitle">Why Our Approach is Better</h2>
            <p>
              Unlike the current system, which often involves manual form filling, interpreting legal jargon,
              or hiring expensive consultants, our AI-driven platform is:
            </p>
            <ul>
              <li><strong>Automated and Intuitive:</strong> No tax knowledge required. We handle the complexity so users don't have to.</li>
              <li><strong>Faster and Error-Resistant:</strong> Real-time validations and automated calculations reduce the chances of mistakes.</li>
              <li><strong>Cost-Effective:</strong> No need for paid intermediaries—our tool is designed to empower individuals directly.</li>
              <li><strong>Always Updated:</strong> Our models are trained to reflect the most recent tax laws, removing the need for users to keep up with every policy change.</li>
              <li><strong>Truly AI-First:</strong> While traditional platforms often connect you with a human professional for complex queries, our solution handles everything automatically with the help of a proficient and context-aware AI model.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          At AI-Tax Guide, we believe everyone deserves a fair, easy, and informed way to manage their taxes.
          Join us in transforming the tax experience from a burden to a breeze.
        </p>
      </footer>
      </div>
    </>
  );
};

export default About;
