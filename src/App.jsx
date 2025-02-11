import { useState, useContext } from "react";
import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import ProjectTab from "./Projects";
import { FaRegSmile } from "react-icons/fa";

function App() {
  const [section, setSection] = useState("About");
  const sections = ["About", "Projects", "Contact"];

  const handleSection = (sect) => {
    setSection(sect);
  };

  const projects = ["1", "2", "3", "4"];

  return (
    <>
      <Header
        handleSection={handleSection}
        section={section}
        listOfSections={sections}
      />
      <div className="h-screen lg:pt-24 pt-56 flex flex-col justify-center items-center">
        {section == "About" && <Hero section={section} />}
        {/* Projects */}
        {section == "Projects" && <ProjectTab />}
        {/* Contact */}
        {section == "Contact" && (
          <div className={"shadow-lg text-xl m-10 w-11/12 p-5 bg-white"}>
            <h1>Contact</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
