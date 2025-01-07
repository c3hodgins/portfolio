import { useState, useContext } from "react";
import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { FaRegSmile } from "react-icons/fa";

function App() {
  const [section, setSection] = useState("About");
  const sections = ["About", "Projects", "Contact"];

  const handleSection = (sect) => {
    setSection(sect);
  };

  const projects = ["1","2","3","4"];

  console.log(sections.indexOf(section))

  return (
    <>
      <Header
        handleSection={handleSection}
        section={section}
        sections={sections}
      />
      <div className="h-screen pt-24 flex flex-col justify-center items-center">
        <Hero section = {section}/>
        {/* Projects */}
        {section == "Projects" && (
          <div className="text-xl shadow-inner m-10 w-11/12 p-5 bg-white">
            <h1>Projects</h1>
            <div className="flex justify-evenly flex-wrap ">
              {projects.map((project) => (
                <div key = {project} className="bg-slate-500 h-40 w-20">
                  <h1>{project}</h1>
                </div>
            ))}
            </div>
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
