import React, {useState, useEffect} from "react";
import { calculateTotalSales, calculateTotalCashSale, calculateTotalCreditSale, calculateBuyerWithMostSale } from './Reports';

import "./Dashboard.css";

function Dashboard() {


  return (
    <div className="dashboard">
      <div className="card">
        <h2>Total Sales</h2>
        <p>{totalSales}</p>
      </div>
      <div className="card">
        <h2>Total Cash Sales</h2>
        <p>{totalCashSales}</p>
      </div>
      <div className="card">
        <h2>Total Credit Sales</h2>
        <p>{totalCreditSales}</p>
      </div>
      <div className="card">
        <h2>Buyer with Most Sales</h2>
        <p>{mostSalesBuyer.buyerName}</p>
        <p>{mostSalesBuyer.saleTotal}</p>
      </div>
    </div>
  );
}

export default Dashboard;
