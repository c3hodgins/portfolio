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
      <div className="bg-slate-700 flex flex-col justify-center items-center">
        {/*About*/}
        {section == 'About' && <div className="text-xl m-10 w-3/4 p-5 bg-white">
          <h1>About</h1>
        </div>}
        {/* Projects */}
        {section == 'Projects' &&
        <div className="text-xl m-10 w-3/4 p-5 bg-white">
          <h1>Projects</h1>
        </div>}
        {/* Contact */}
        {section == 'Contact' && <div className={"shadow-inner text-xl m-10 w-3/4 p-5 bg-white"}>
          <h1 className={section == "Contact"  ? 'opacity-100' : 'opacity-0' +' duration-200'} >Contact</h1>
        </div>}
      </div>
    </>
  );
}

export default App;
