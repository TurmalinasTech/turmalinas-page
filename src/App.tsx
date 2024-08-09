import React from "react";
import { Menu } from "./components/menu";
import { Hero } from "./components/hero";
import { Values } from "./components/values";
import { AboutUs } from "./components/aboutUs";
import { Projects } from "./components/projects";
import { Event } from "./components/event";
import { Store } from "./components/store";
import { Footer } from "./components/footer";

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <Hero />
      <Values/>
      <AboutUs/>
      <Projects/>
      <Event />
      <Store />
      <Footer/>
    </div>
  );
};

export default App;
