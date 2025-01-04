import jsPDF from "jspdf";

const ExportToPDF = ({ articles = [], totalPayout }) => {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Payout Report", 10, 10);

    articles.forEach((article, index) => {
      doc.text(`${index + 1}. ${article.title} - ${article.author}`, 10, 20 + index * 10);
    });

    doc.text(`Total Payout: $${totalPayout.toFixed(2)}`, 10, 30 + articles.length * 10);
    doc.save("payout_report.pdf");
  };

  return <button onClick={exportPDF}>Export to PDF</button>;
};

export default ExportToPDF;
