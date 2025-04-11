import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Images
import CollegeLogo from './college-logo.jpeg';
import SkillrackLogo from './skillrack-logo.jpeg';
import LeetCodeLogo from './leetcode-logo.jpeg';
import HackerRankLogo from './hackerrank-logo.jpeg';
import GeeksforGeeksLogo from './gfg-logo.jpeg';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img src={CollegeLogo} alt="College Logo" className="college-logo" />
          <h1 className="college-name">NATIONAL ENGINEERING COLLEGE</h1>
        </div>
      </nav>

      {/* Title */}
      <h2 className="app-title">DIGITAL TUTOR RECORD</h2>

      {/* Welcome Message */}
      <p className="welcome-message">
        Welcome to the Digital Tutor Record system. Manage your personal and academic details efficiently.
      </p>

      {/* Main Cards */}
      <div className="cards-container">
        <Link to="/personal-details" className="card-link">
          <div className="card">
            <h3>Personal Details</h3>
            <p>View and edit your personal information.</p>
          </div>
        </Link>

        <Link to="/semester-details" className="card-link">
          <div className="card">
            <h3>Semester Details</h3>
            <p>View and edit your semester-wise performance.</p>
          </div>
        </Link>

        <a href="https://www.knowafest.com/explore/events" target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="card">
            <h3>Upcoming Events</h3>
            <p>Explore tech fests, symposiums, and external events.</p>
          </div>
        </a>
      </div>

      {/* Daily Checklist Section */}
      <h2 className="app-title" style={{ marginTop: '60px' }}>Daily Checklist</h2>
      <p className="welcome-message">
        Navigate to your favorite coding platforms and stay consistent!
      </p>

      <div className="cards-container">
        <a href="https://www.skillrack.com" target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="daily-checklist-card">
            <img src={SkillrackLogo} alt="Skillrack" className="card-logo" />
            <h3>Skillrack</h3>
            <p>Practice college-level coding problems and tests.</p>
          </div>
        </a>

        <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="daily-checklist-card">
            <img src={LeetCodeLogo} alt="LeetCode" className="card-logo" />
            <h3>LeetCode</h3>
            <p>Sharpen your DSA skills for tech interviews.</p>
          </div>
        </a>

        <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="daily-checklist-card">
            <img src={HackerRankLogo} alt="HackerRank" className="card-logo" />
            <h3>HackerRank</h3>
            <p>Solve coding challenges and build skills.</p>
          </div>
        </a>

        <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="card-link">
          <div className="daily-checklist-card">
            <img src={GeeksforGeeksLogo} alt="GeeksforGeeks" className="card-logo" />
            <h3>GeeksforGeeks</h3>
            <p>Learn DSA concepts with articles and quizzes.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
