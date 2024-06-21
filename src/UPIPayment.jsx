import React, { useState, useEffect } from "react";

const UPIPayment = () => {
  const [amtToBePaid, setAmtToBePaid] = useState(0);

  useEffect(() => {
    const storedVariant = localStorage.getItem("selected_variant");
    if (storedVariant) {
      const variant = JSON.parse(storedVariant);
      setAmtToBePaid(variant.price);
    }
  }, []); // Empty dependency array means this runs once after initial render

  // const upiId = "himanshukr1151@axl";
  // const payeeName = "Himanshu Kumar";
  // const transactionNote = "Payment for Payee";

  const upiId = "9099681841@hdfcbank";
  const payeeName = "Ganesh Pharma";
  const transactionNote = "Payment for Payee";

  const initiateUPIPayment = () => {
    const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${encodeURIComponent(amtToBePaid)}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;

    // Open the UPI link, which will prompt the user to choose an app
    window.location.href = upiLink;
  };

  return (
    <div>
      <button onClick={initiateUPIPayment}>Pay with UPI</button>
    </div>
  );
};

export default UPIPayment;
