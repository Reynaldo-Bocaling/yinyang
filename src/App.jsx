import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tokenomics from "./pages/Tokenomics";
import Banner from "./pages/Banner";

const App = () => {
  return (
    <main className="w-full overflow-hidden min-h-screen bg-[#fdccae]">
      <Header />

      <Hero />
      <About />
      <Tokenomics />
      <Banner />
      <Contact />
      <img
        src="/img/bg.jpg"
        className="fixed top-0 left-0 w-full h-full"
        alt=""
      />
    </main>
  );
};

export default App;
