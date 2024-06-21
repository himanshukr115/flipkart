import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import PaymentPage from "./pages/PaymentPage";
import ThankyouPage from "./pages/ThankyouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/products/:id" Component={ProductPage} />
        <Route path="/checkout" Component={FormPage} />
        <Route path="/product-details" Component={ConfirmationPage} />
        <Route path="/payment-request" Component={PaymentPage} />
        <Route path="/thank-you" Component={ThankyouPage} />
      </Routes>
    </Router>
  );
}

export default App;
