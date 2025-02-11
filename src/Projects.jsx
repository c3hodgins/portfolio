import React from "react";

const projectInfo = [
  {
    Title: "F1Tenth Autonomous RC Car",
    Blurb:
      "Train and test an open source competition autonomous racecar in ROS2 using a camera, lidar and machine learning",
  },
  {
    Title: "Notes App/To Do List",
    Blurb:
      "Front end implemented with React.js in Vite with backend implemented in Node.js anbd mySQL",
  },
  {
    Title: "IR Controlled Robot Tank Robot",
    Blurb:
      "Programmed a robot in embedded C to avoid walls and obstacles using peripheral Infrared Sensors",
  },
];

function ProjectTab({}) {
  return (
    <div className="flex text-xl flex-col shadow-inner m-10 w-11/12 p-5 justify-evenly items-center bg-slate-800">
      <div className="text-white flex flex-grow justify-evenly ">
        {projectInfo.map((project) => (
          <div
            key={project}
            className="bg-slate-700 flex flex-col flex-grow p-4 m-5"
          >
            <h1 className="text-2xl font-bold">{project.Title}</h1>
            <p className="text-xl">{project.Blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTab;
