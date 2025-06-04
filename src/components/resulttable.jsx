import React from 'react';
import '../styles/globals.css';
import '../styles/resulttable.css';

const resultsData = [
  { trait: 'Hidden TOP-5', level: '?', sufficient: '?', needsBoost: '?', importance: 4.89 },
  { trait: 'Hidden TOP-5', level: '?', sufficient: '?', needsBoost: '?', importance: 4.87 },
  { trait: 'Hidden TOP-5', level: '?', sufficient: '?', needsBoost: '?', importance: 4.75 },
  { trait: 'Hidden TOP-5', level: '?', sufficient: '?', needsBoost: '?', importance: 4.70 },
  { trait: 'Hidden TOP-5', level: '?', sufficient: '?', needsBoost: '?', importance: 4.67 },
  { trait: 'Critical thinking', level: '5.00', sufficient: '✓', needsBoost: '-', importance: 4.65 },
  { trait: 'Responsibility', level: '3.67', sufficient: '-', needsBoost: '0.91', importance: 4.58 },
  { trait: 'Planning', level: '3.67', sufficient: '-', needsBoost: '0.86', importance: 4.53 },
  { trait: 'Curiosity', level: '3.67', sufficient: '-', needsBoost: '0.83', importance: 4.50 },
  { trait: 'Stress resistance', level: '3.67', sufficient: '-', needsBoost: '0.83', importance: 4.50 },
  { trait: 'Goal-orientation', level: '4.00', sufficient: '-', needsBoost: '0.48', importance: 4.48 },
  { trait: 'Proactivity', level: '4.00', sufficient: '-', needsBoost: '0.47', importance: 4.47 }
];

const ResultsTable = () => {
  return (
    <div className="results-container">
      <h2>Your Results Overview</h2>
      <section className="description">
        <h3>The written description of your results will look like this:</h3>
        <p><strong>Your Strengths:</strong> Sufficiently developed traits: <span className="highlight">Responsibility</span>.</p>
        <p><strong>Your Weaknesses:</strong></p>
        <ul>
          <li><strong>-Stress resistance:</strong> Needs improvement by <span className="highlight">1.20 points</span>.</li>
          <li><strong>-Intuition:</strong> Needs improvement by <span className="highlight">0.88 points</span>.</li>
          <li><strong>-Trustfulness:</strong> Also recommended for growth and improvement.</li>
        </ul>
      </section>

      <table>
        <thead>
          <tr>
            <th>Personality Trait</th>
            <th>Your Level</th>
            <th>Sufficient</th>
            <th>Needs Boost</th>
            <th>Importance / Success Level</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((item, index) => (
            <tr key={index} className={item.trait.includes('Hidden') ? 'hidden-row' : ''}>
              <td>{item.trait}</td>
              <td>{item.level}</td>
              <td>{item.sufficient}</td>
              <td>{item.needsBoost}</td>
              <td>{item.importance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
