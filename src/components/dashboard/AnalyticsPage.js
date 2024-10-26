import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

function AnalyticsPage({ transactions, savingsTracker, expenseBreakdown }) {
  // Prepare data for charts
  const transactionData = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: 'Transactions',
        data: transactions.map(t => t.amount),
        backgroundColor: transactions.map(t => (t.amount < 0 ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)')),
      },
    ],
  };

  const expenseData = {
    labels: expenseBreakdown.map(exp => exp.category),
    datasets: [
      {
        data: expenseBreakdown.map(exp => exp.amount),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const savingsData = {
    labels: savingsTracker.map(s => s.month),
    datasets: [
      {
        label: 'Savings Over Time',
        data: savingsTracker.map(s => s.amount),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div className="analytics-page">
      <h1>Analytics Overview</h1>
      <div className="chart">
        <h2>Transaction Overview</h2>
        <Line data={transactionData} />
      </div>
      <div className="chart">
        <h2>Expense Breakdown</h2>
        <Pie data={expenseData} />
      </div>
      <div className="chart">
        <h2>Savings Tracker</h2>
        <Bar data={savingsData} />
      </div>
    </div>
  );
}

export default AnalyticsPage;
