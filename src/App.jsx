import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const calculateLove = () => {
    const randomPercentage = Math.floor(Math.random() * 100) + 1;
    setPercentage(randomPercentage);

    if (randomPercentage >= 30 && randomPercentage <= 50) {
      setStatus("Average Relationship ❤️");
    } else if (randomPercentage > 50 && randomPercentage <= 75) {
      setStatus("Good Relationship 💕");
    } else if (randomPercentage > 75 && randomPercentage <= 100) {
      setStatus("Made for Each Other 💖");
    } else {
      setStatus("Not Compatible 😢");
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header text-center p-4">
        <h1>Love Meter 💖by Kunal </h1>
        <p>Find out how strong your love is!</p>
      </header>

      {/* Main Content */}
      <div className="main-content text-center p-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name 1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name 2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <button className="btn btn-pink mb-4" onClick={calculateLove}>
          Calculate Love
        </button>
        {percentage !== null && (
          <div className="result-container">
            <h2 className="percentage">{percentage}%</h2>
            <h3 className="status">{status}</h3>
          </div>
        )}
      </div>

      {/* Feedback Form */}
      <div className="feedback-form text-center p-5">
        <h2>We'd Love Your Feedback! 💌</h2>
        {!submitted ? (
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              className="form-control mb-3"
              placeholder="Tell us how we can improve..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              required
            />
            <button type="submit" className="btn btn-pink">
              Submit Feedback
            </button>
          </form>
        ) : (
          <p className="thank-you">Thank you for your feedback! 💖</p>
        )}
      </div>

      {/* Footer */}
      <footer className="footer text-center p-3">
        <p>Made with ❤️ by Kunal Malviya</p>
        <p>© 2023 Love Meter. All rights reserved. </p>
      </footer>
    </div>
  );
}

export default App;