

  import { useState, useEffect } from "react";
  import "./PayoutCalculator.css";
  import ExportToPDF from "../Export/ExportToPDF";

const PayoutCalculator = ({ articles = [] }) => {
    const [payoutRate, setPayoutRate] = useState(() => {
      // Retrieve payout rate from local storage or use default (10)
      const storedRate = localStorage.getItem("payoutRate");
      return storedRate ? parseFloat(storedRate) : 10;
    });
  
    const [totalPayout, setTotalPayout] = useState(0);
  
    useEffect(() => {
      // Calculate total payout whenever payout rate or articles change
      setTotalPayout(articles.length * payoutRate);
    }, [articles, payoutRate]);
  
    const handleRateChange = (e) => {
      const newRate = parseFloat(e.target.value) || 0;
      setPayoutRate(newRate);
      localStorage.setItem("payoutRate", newRate); // Save rate to localStorage
    };
  
    const exportToCSV = () => {
      const csvContent =
        "Title,Author\n" +
        articles.map((article) => `${article.title},${article.author}`).join("\n");
  
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "payout_report.csv";
      link.click();
    };
  
    return (
      <div className="payout-calculator">
        <h2>Payout Calculator</h2>
        <div className="rate-input">
          <label htmlFor="payout-rate">Payout per Article:</label>
          <input
            id="payout-rate"
            type="number"
            value={payoutRate}
            onChange={handleRateChange}
          />
        </div>
        <p>Total Articles: {articles.length}</p>
        <p>Total Payout: ${totalPayout.toFixed(2)}</p>
        <div className="export-buttons">
          <button onClick={exportToCSV}>Export as CSV</button>
          <ExportToPDF articles={articles} totalPayout={totalPayout} />
        </div>
      </div>
    );
  };
  
  export default PayoutCalculator;
