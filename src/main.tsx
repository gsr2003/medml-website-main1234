import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./ui-components/Header";
import { BrowserRouter } from "react-router-dom"; // Remove ScrollRestoration
import Footer from "./ui-components/Footer";
import Home from "./ui-components/Home";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ui-components/ScrollToTop";
import Support from "./ui-components/support";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
