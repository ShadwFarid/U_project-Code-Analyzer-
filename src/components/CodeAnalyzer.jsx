import React, { useState } from "react";
import "./CodeAnalyzer.css";

export default function CodeAnalyzer() {
  const [code, setCode] = useState("");

  const handleAnalyze = () => {
    // هنا تضيفي منطق تحليل الكود أو Fake Data مؤقتاً
    alert("Analyzing code...");
  };

  return (
    <div className="code-analyzer">
      {/* Header */}
      <div className="header">
        <h1>Project Name</h1>
        <select>
          <option>Language</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
        </select>
      </div>

      <div className="layout">
        {/* Code Editor */}
        <div className="editor">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
          <button onClick={handleAnalyze}>Analyze Code</button>
        </div>

        {/* Errors & Recommendations */}
        <div className="results">
          <h2>Errors</h2>
          <table>
            <thead>
              <tr>
                <th>Line</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12</td>
                <td>Syntax</td>
                <td>Missing semicolon</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Warning</td>
                <td>Unused variable</td>
              </tr>
            </tbody>
          </table>

          <h2>Recommendations</h2>
          <p>
            Consider removing unused variables and fixing syntax issues.
          </p>
        </div>
      </div>
    </div>
  );
}
