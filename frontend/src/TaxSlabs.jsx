import React from "react";
import "./TaxSlabs.css"

const TaxSlabs = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Slab Range</th>
            <th>Rate</th>
            <th>Taxable Amount</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4,00,000</td>
            <td>NIL</td>
            <td>₹4,00,000</td>
            <td>₹0</td>
          </tr>

          <tr>
            <td>₹4,00,001 - ₹8,00,000</td>
            <td>5%</td>
            <td>₹4,00,000</td>
            <td>{400000 * 0.05}</td>
          </tr>

          <tr>
            <td>₹8,00,001 - ₹12,00,000</td>
            <td>10%</td>
            <td>₹4,00,000</td>
            <td>{400000 * 0.10}</td>
          </tr>

          <tr>
            <td>₹12,00,001 - ₹16,00,000</td>
            <td>15%</td>
            <td>₹4,00,000</td>
            <td>{400000 * 0.15}</td>
          </tr>

          <tr>
            <td>₹16,00,001 - ₹20,00,000</td>
            <td>20%</td>
            <td>₹4,00,000</td>
            <td>{400000 * 0.20}</td>
          </tr>

          <tr>
            <td>₹20,00,001 - ₹24,00,000</td>
            <td>25%</td>
            <td>₹4,00,000</td>
            <td>{400000 * 0.25}</td>
          </tr>

          <tr>
            <td>₹24,00,001 - ₹50,00,000</td>
            <td>30%</td>
            <td>₹26,00,000</td>
            <td>{2600000 * 0.30}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TaxSlabs;
