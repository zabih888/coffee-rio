import React from "react";
import Header from "./components/UI/Header/Header";
import Globals from "./components/Global/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Shop from "./pages/Shop/ShopPage";
import Cart from "./pages/Cart/CartPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/UI/Theme";
import CartProvider from "./context/CartProvider";
import Cup from "./pages/Cup";
import Signup from "./components/Login_Signup/Signup";
import Login from "./components/Login_Signup/Login";
import AuthProvider from "./context/AuthProvider";
import Checkout from "./pages/CheckoutPage";
import ShopUniquePage from "./pages/Shop/ShopUniquePage";
import Footer from "./components/UI/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Globals />
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/itemid" element={<ShopUniquePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cup" element={<Cup />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
