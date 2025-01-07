import { useState, useRef } from "react";
import "./App.css";
import { Header } from "./Header";

function App() {
  const [section, setSection] = useState("About");

  const sections = ["About", "Projects", "Contact"];

  const handleSection = (sect) => {
    setSection(sect);
  };

  return (
    <>
      <Header
        handleSection={handleSection}
        section={section}
        sections={sections}
      ></Header>
      <div className="pt-24 bg-slate-700 flex flex-col justify-center items-center">
        {/*About*/}
        {section == "About" && (
          <div className="text-xl m-10 w-11/12 p-5 h-screen bg-white">
            <h1>About</h1>
          </div>
        )}
        {/* Projects */}
        {section == "Projects" && (
          <div className="text-xl shadow-inner m-10 w-11/12 p-5 bg-white">
            <h1>Projects</h1>
          </div>
        )}
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
