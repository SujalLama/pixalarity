import React from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Section from "../Section";
import Section2 from "../Section2";
import Section3 from "../Section3";
import SliderContent from "../Slider";
import SubscribeContent from "../Subscribe/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Section2 />
      <Section3 />
      <SliderContent />
      <SubscribeContent />
      <Footer />
    </>
  );
};

export default Home;
