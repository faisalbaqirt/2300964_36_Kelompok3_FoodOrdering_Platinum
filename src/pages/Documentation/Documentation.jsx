import React from "react";
import Navbar from "../../components/Navbar";
import APIDocumentation from "../../components/APIDocumentation";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import "./docs.css";

const APIDocsPage = () => {
  return (
    <>
      <div className="docs-page">
        <Navbar />
        <APIDocumentation />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default APIDocsPage;
