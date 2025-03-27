import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EducationLoan() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEMI] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(tenure) * 12;

    if (principal && rate && months) {
      const emiValue =
        (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
      setEMI(emiValue.toFixed(2));
    } else {
      setEMI(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary">Education Loan EMI Calculator</h2>

        <div className="mb-3">
          <label className="form-label">Loan Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interest Rate (%)</label>
          <input
            type="number"
            className="form-control"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Loan Tenure (Years)</label>
          <input
            type="number"
            className="form-control"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={calculateEMI}>
          Calculate EMI
        </button>

        {emi && (
          <h4 className="text-center mt-4 p-3 bg-light border border-primary rounded">
            📌 Monthly EMI: ₹{emi}
          </h4>
        )}
      </div>
    </div>
  );
}
