import React, { useState, useEffect } from "react";

const UPIPayment = () => {
  const [amtToBePaid, setAmtToBePaid] = useState(0);
  const [payType, setPayType] = useState('');

  useEffect(() => {
    const storedVariant = localStorage.getItem("selected_variant");
    if (storedVariant) {
      const variant = JSON.parse(storedVariant);
      setAmtToBePaid(variant.price);
    }
  }, []); // Runs once after initial render

  const upiId = "8700710792@ptaxis";
  const payeeName = "Rajat Shrivastava";
  const transactionNote = "Payment for Payee";

  const isIOS = () => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const initiateUPIPayment = () => {
    let redirectUrl = '';

    switch (payType) {
      case 'gpay':
        redirectUrl = isIOS() ? `gpay://upi/pay?pa=${upiId}&pn=${payeeName}&am=${amtToBePaid}&cu=INR&tn=${transactionNote}` 
                              : `tez://upi/pay?pa=${upiId}&pn=${payeeName}&am=${amtToBePaid}&cu=INR&tn=${transactionNote}`;
        break;

      case 'phonepe':
        redirectUrl = `phonepe://pay?pa=${upiId}&pn=${payeeName}&am=${amtToBePaid}&cu=INR&tn=${transactionNote}`;
        break;

      case 'paytm':
        redirectUrl = `paytmmp://pay?pa=${upiId}&pn=${payeeName}&am=${amtToBePaid}&cu=INR&tn=${transactionNote}`;
        break;

      case 'upi':
        redirectUrl = `upi://pay?pa=${upiId}&pn=${payeeName}&am=${amtToBePaid}&cu=INR&tn=${transactionNote}`;
        break;

      default:
        alert('Please select a payment method.');
        return;
    }

    if (isIOS()) {
      // Use Universal Links or alternative handling for iOS
      window.location.href = redirectUrl;
    } else {
      // Open the UPI link for Android
      window.location.href = redirectUrl;
    }
  };

  return (
    <div>
      <h3>Select Payment Method:</h3>
      <div className="payment-options">
        <label>
          <input
            type="radio"
            name="paymentType"
            value="gpay"
            onChange={(e) => setPayType(e.target.value)}
          />
          Google Pay
        </label>
        <label>
          <input
            type="radio"
            name="paymentType"
            value="phonepe"
            onChange={(e) => setPayType(e.target.value)}
          />
          PhonePe
        </label>
        <label>
          <input
            type="radio"
            name="paymentType"
            value="paytm"
            onChange={(e) => setPayType(e.target.value)}
          />
          Paytm
        </label>
        <label>
          <input
            type="radio"
            name="paymentType"
            value="upi"
            onChange={(e) => setPayType(e.target.value)}
          />
          UPI
        </label>
      </div>
      <button onClick={initiateUPIPayment}>Pay with UPI</button>
    </div>
  );
};

export default UPIPayment;
