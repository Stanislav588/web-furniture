import "./App.css";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import Success from "./pages/Success/Success";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <Login setLogin={setLogin} login={login} /> : <></>}
      <div className="App">
        <NavBar login={login} setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/success" element={<Success />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
