import Navbar from "./satiate/Navba";
import Home from "./satiate/Home";
import Cards from "./satiate/Card";
import Partners from "./satiate/Partners";
import Testimonials from "./satiate/Testimonials";
import Rating from "./satiate/Ratings";
import Search from "./satiate/Search";
import Popular from "./satiate/Popular";
import Jollibee from "./satiate/RestaurantsJol";
import Mcdo from "./satiate/RestaurantsMcdo";
import Greenwich from "./satiate/RestaurantsGreenwich";
import OrderProcessing from "./satiate/OrderProcessing";
import Cart from "./satiate/Cart";

// import OrderProcessing from "./Satiate/OrderProcessing";
// import OrderTracking from "./Satiate/OrderTracking";
import Footer from "./satiate/Footer";
import { BrowserRouter, Route, Routes, Navlink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Cards />
              <Partners />
              <Testimonials />
              <Rating />
              <Footer />
            </>
          }
        />

        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <Search />
              <Popular />
              <Footer />
            </>
          }
        />

        <Route
          path="/restaurants"
          element={
            <>
              <Navbar />
              <Jollibee />
              <Footer />
            </>
          }
        />

        <Route
          path="/restaurants/mcdo"
          element={
            <>
              <Navbar />
              <Mcdo />
              <Footer />
            </>
          }
        />

        <Route
          path="/restaurants/greenwich"
          element={
            <>
              <Navbar />
              <Greenwich />
              <Footer />
            </>
          }
        />

        <Route
          path="/order-processing"
          element={
            <>
              <Navbar />
              <OrderProcessing />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
