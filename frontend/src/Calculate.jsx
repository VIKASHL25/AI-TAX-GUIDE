import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import Login from './Login';

const Calculate = () => {
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [deductions, setDeductions] = useState({
    standard: false,
    npsEmployer: false,
    agniveer: false,
    section57: false,
  });

  const [agniveerAmount, setAgniveerAmount] = useState('');
  const [npsOption, setNpsOption] = useState('');
  const [section57Option, setSection57Option] = useState('');

  const handleCheckboxChange = (key) => {
    setDeductions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateTax = (taxableAmount) => {
    var taxAmount=0;
   var tax={
      "slab1":[0,0],
      "slab2":[0,0],
      "slab3":[0,0],
      "slab4":[0,0],
      "slab5":[0,0],
      "slab6":[0,0],
      "slab7":[0,0],
      "totalTax":0
   };
    if(taxableAmount<=400000){
      tax.slab1[0]=taxableAmount;
      tax.slab1[1]=0;
      tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
    }
    else{
      tax.slab1[0]=400000;
      tax.slab1[1]=0;
     taxableAmount=taxableAmount-400000;
     if(taxableAmount<=400000){
      tax.slab2[0]=taxableAmount;
        taxAmount+= Math.round(taxableAmount*(5/100))
        tax.slab2[1]=taxAmount;
        tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
     }
     else{
        tax.slab2[0]=400000;
        taxAmount=Math.round(400000*(5/100))
        tax.slab2[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab3[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(10/100))
        tax.slab3[1]=taxAmount;
        tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
     }
     else{
      tax.slab3[0]=400000;
        taxAmount= Math.round(400000*(10/100))
        tax.slab3[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab4[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(15/100))
        tax.slab4[1]=taxAmount;
       tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
     }
     else{
      tax.slab4[0]=400000;
        taxAmount=Math.round(400000*(15/100))
        tax.slab4[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab5[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(20/100))
        tax.slab5[1]=taxAmount;
        tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
     }
     else{
      tax.slab5[0]=400000;
        taxAmount=Math.round(400000*(20/100))
        tax.slab5[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount<=400000){
      tax.slab6[0]=taxableAmount;
        taxAmount= Math.round(taxableAmount*(25/100))
        tax.slab6[1]=taxAmount;
        tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

        return tax;
     }
     else{
      tax.slab6[0]=400000;
        taxAmount= Math.round(400000*(25/100))
        tax.slab6[1]=taxAmount;
        taxableAmount=taxableAmount-400000;
     }
     if(taxableAmount>0)
    {tax.slab7[0]=taxableAmount;
      taxAmount= Math.round(taxableAmount*(30/100))
      tax.slab7[1]=taxAmount;
    }
    tax.totalTax = tax.slab1[1] + tax.slab2[1] + tax.slab3[1] + tax.slab4[1] + tax.slab5[1] + tax.slab6[1] + tax.slab7[1];

     return tax
    }
  };
  const [taxResult, setTaxResult] = useState(null);

const handleCalculateTax = () => {
  let totalDeductions = 0;

  if (deductions.standard) totalDeductions += 50000;

  if (deductions.npsEmployer) {
    const incomeVal = parseFloat(income);
    if (npsOption === "gov") {
      totalDeductions += Math.min(0.14 * incomeVal, 200000);
    } else if (npsOption === "others") {
      totalDeductions += Math.min(0.10 * incomeVal, 200000);
    }
  }

  if (deductions.agniveer) {
    totalDeductions += parseFloat(agniveerAmount || 0);
  }

  if (deductions.section57) {
    if (section57Option === "15000") {
      totalDeductions += 15000;
    } else if (section57Option === "1/3rd") {
      totalDeductions += (parseFloat(income || 0) / 3);
    }
  }

  const taxableIncome = Math.max(parseFloat(income) - totalDeductions, 0);
  const result = calculateTax(taxableIncome);
  setTaxResult(result);
};


  return (
    <div style={styles.appWrapper}>
      <header style={styles.header}>
        <div style={styles.logo}>AI TAX GUIDE</div>
        <nav style={styles.nav}>
          <a style={styles.navLink} href="./taxguide">Home</a>
          <a style={styles.navLink} href="./">Login</a>
          <a style={styles.navLink} href="./about">About Us</a>
        </nav>
      </header>

      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Enter your Details</h2>
        <input
          type="number"
          placeholder="Annual Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Age Group"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <div>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="Standard Deduction"
              style={styles.checkbox}
              checked={deductions.standard}
              onChange={() => handleCheckboxChange('standard')}
            />
            Standard Deduction
          </label>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="NPS-Employer contribution (80CCD(2))"
              style={styles.checkbox}
              checked={deductions.npsEmployer}
              onChange={() => handleCheckboxChange('npsEmployer')}
            />
            NPS-Employer contribution (80CCD(2))
          </label>
          {deductions.npsEmployer && (
            <select
              id="NPS"
              value={npsOption}
              onChange={(e) => setNpsOption(e.target.value)}
              style={styles.select}
            >
              <option style={styles.opt} value="">Select Type</option>
              <option value="gov">Government Emp</option>
              <option value="others">Others</option>
            </select>
          )}

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="Agniveer Corpus (80CCH(2))"
              style={styles.checkbox}
              checked={deductions.agniveer}
              onChange={() => handleCheckboxChange('agniveer')}
            />
            Agniveer Corpus (80CCH(2))
          </label>
          {deductions.agniveer && (
            <input
              type="text"
              id="agniveer-amount"
              placeholder="Enter Amount"
              value={agniveerAmount}
              onChange={(e) => setAgniveerAmount(e.target.value)}
              style={styles.input}
            />
          )}

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="Section 57(IIA)"
              style={styles.checkbox}
              checked={deductions.section57}
              onChange={() => handleCheckboxChange('section57')}
            />
            Section 57(IIA)
          </label>
          {deductions.section57 && (
            <select
              value={section57Option}
              onChange={(e) => setSection57Option(e.target.value)}
              style={styles.select}
            >
              <option style={styles.opt} value="">Select Option</option>
              <option value="15000">Rs 15000</option>
              <option value="1/3rd">1/3rd Family Pension</option>
            </select>
          )}
        </div>

        <button onClick={handleCalculateTax} style={styles.button}>
          CALCULATE TAX <FaCalculator style={{ marginLeft: '10px' }} />
        </button>
        {taxResult && (
  <div style={styles.result}>
    <h3>Tax Calculation Result</h3>
    
    <ul style={styles.slabs}>
      {Object.keys(taxResult).map((slab, index) => (
        slab.startsWith("slab") && taxResult[slab][0] > 0 && (
          <li key={index} style={styles.slabItem}>
            <strong>{slab.toUpperCase()}</strong>: Taxable Amount ₹{taxResult[slab][0]}, Tax ₹{taxResult[slab][1]}
          </li>
        )
      ))}
    </ul>
    <p><strong>Total Tax:</strong> ₹{taxResult.totalTax}</p>
  </div>
)}

      </div>
    </div>
  );
};

const styles = {
  slabItem: {
  color: 'white',
  marginBottom: '8px',
},

  slabs:{
    color:'white',
    listStyleType: 'none', 
  paddingLeft: 0, 
  },
  result: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    color: 'white'
  },
  appWrapper: {
    background: "url('./img3.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100%',
    height: 'auto',
    color: 'white',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #fff3',
    backgroundColor: '#1f2c3e',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
  },
  formWrapper: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#101d2e',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 0 20px #0005',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
  select: {
    padding: '12px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: '#585555',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    marginTop: '10px',
  },
  checkbox: {
    marginRight: '10px',
    marginBottom: '10px',
    accentColor: '#2d6cdf', 
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '16px',
    marginBottom: '10px',
  },
  
  
  button: {
    padding: '14px',
    borderRadius: '30px',
    border: '2px solid white',
    backgroundColor: '#2d6cdf',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Calculate;
