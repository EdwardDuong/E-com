import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Feature from "../../components/feature/Feature";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Header type="home" />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guess Love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
