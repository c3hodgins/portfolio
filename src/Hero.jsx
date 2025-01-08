import React from "react";

export const Hero = ({ section }) => {
  const icons = "💻";
  const text = (
    <p className=" items-center text-2xl w-1/2 text-white">
      I'm <span className="font-bold">Charles Hodgins,</span> an aspiring
      <span className="text-blue-500 font-bold"> Software Engineer </span>
      studying Computer Engineering at{" "}
      <span className="text-green-700 font-bold"> Binghamton University, </span>
      with a passion for software, machine learning and embedded systems!
    </p>
  );

  return (
    <>
      {section == "About" && (
        <div className="flex flex-col shadow-inner m-10 w-11/12 p-5 justify-evenly items-center bg-slate-800">
          <div className="flex flex-row flex-wrap justify-evenly gap-8 items-center">
            <img className = "lg:h-80 md:h-40  rounded-full" src="https://media.licdn.com/dms/image/v2/D4E03AQFBDheys8Vb2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697303529156?e=2147483647&v=beta&t=kaURF2pKegkGpdeA6kLw_ZIPXIaZPb4_ZByNNsTbR7k" />{" "}
            {text}
          </div>
        </div>
      )}
    </>
  );
};
