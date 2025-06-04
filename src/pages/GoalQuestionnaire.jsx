'use client';

import React, { useState } from "react";
import professionQuestions from "../data/professionQuestions";
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import "../styles/GoalQuestionnaire.css";

const options = [
  "Absolutely YES",
  "Mostly YES",
  "It depends",
  "Mostly NO",
  "Absolutely NO",
];

export default function GoalQuestionnaire() {
  const goals = Object.keys(professionQuestions);

  const [selectedGoal, setSelectedGoal] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [otherDetails, setOtherDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const questions = selectedGoal ? professionQuestions[selectedGoal] : [];

  const handleGoalChange = (e) => {
    const goal = e.target.value;
    setSelectedGoal(goal);
    setCurrentIndex(0);
    setAnswers(Array(professionQuestions[goal].length).fill(null));
    setSubmitted(false);
  };

  const handleOptionChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (answers[currentIndex] === null) {
      alert("Please select an option to proceed.");
      return;
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers[currentIndex] === null) {
      alert("Please select an option to submit.");
      return;
    }
    setSubmitted(true);
  };

  const handleRestart = () => {
    setSelectedGoal("");
    setAnswers([]);
    setOtherDetails("");
    setSubmitted(false);
  };

  return (
    <div id="goal-questionnaire">
      <Navbar />
      <div className="container">
        {!selectedGoal ? (
          <>
            <h2 className="heading">Select a Goal to Begin</h2>
            <select
              className="goal-select"
              value={selectedGoal}
              onChange={handleGoalChange}
            >
              <option value="" disabled>
                -- Select Goal --
              </option>
              {goals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </>
        ) : submitted ? (
          <>
            <h2 className="heading">Thank you for your responses!</h2>
            <p className="summary">
              Goal: <strong>{selectedGoal}</strong>
            </p>
            <p className="summary">Here are your answers:</p>
            <ul className="answer-list">
              {questions.map((q, i) => (
                <li key={i} className="answer-item">
                  <strong>{q}</strong>: {answers[i]}
                </li>
              ))}
            </ul>
            <p className="summary">
              <strong>Other Details:</strong> {otherDetails || "(none)"}
            </p>
            <button className="restart-button" onClick={handleRestart}>
              Restart
            </button>
          </>
        ) : (
          <>
            <h2 className="heading">{selectedGoal} Questionnaire</h2>
            <p className="progress">
              Question {currentIndex + 1} of {questions.length}
            </p>
            <p className="question">{questions[currentIndex]}</p>

            <form onSubmit={currentIndex < questions.length - 1 ? handleNext : handleSubmit}>
              <div className="options-form">
                {options.map((option) => (
                  <div key={option} className="option-item">
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={answers[currentIndex] === option}
                        onChange={handleOptionChange}
                      />{" "}
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              <div className="button-group">
                {currentIndex < questions.length - 1 ? (
                  <button type="submit" className="next-button">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                )}
              </div>
            </form>

            <div className="details-section">
              <h3 className="details-heading">Additional Details</h3>
              <textarea
                className="details-textarea"
                rows={5}
                placeholder="Enter any other details here..."
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
