import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Para from "./Para";
import Box from "./Box";
import Footer from "./Footer";
import './style.css';

export default function App() {
  return (
    <div>
      <div className="parent">
        <Header />
        <Slider />
        <Para />
        <Box />
        <Footer />
      </div>
    </div>
  );
}
