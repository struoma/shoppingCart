import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import ProductImage from "./components/image";
import ProductName from "./components/name";
import ProducDescription from "./components/description";
import ProductPrice from "./components/price";
import Order from "./components/order";
import Thanks from "./components/thanks";
import Footer from "./components/footer";
//App js
function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col 4">
            <ProductImage />
            <ProductName />
            <ProducDescription />
            <ProductPrice />
            <Order />
          </div>
          <div className="col 4">
            <ProductImage />
          </div>
          <div className="col 4">
            <ProductImage />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col 4"></div>
          <div className="col 4 thanksBorder">
            <Thanks />
          </div>
          <div className="col 4"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
