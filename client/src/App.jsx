import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CartPage from "./Pages/CartPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const userLogin = useSelector((state) => state.user.currentUser);
  const userRegister = useSelector((state) => state.user.newUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/cart"
          element={userLogin ? <CartPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={userLogin ? <Navigate to={"/"} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={userRegister ? <Navigate to={"/login"} /> : <RegisterPage />}
        />
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
