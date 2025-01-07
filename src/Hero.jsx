import React from "react";

export const Hero = ({section}) => {
    const icons = "🙋‍♂️💻"
  const text = (
    <p className=" items-center text-2xl w-1/2 text-white">
      I'm <span className="font-bold">Charles Hodgins,</span> and aspiring
      <span className="text-blue-500 font-bold">    Software Engineer </span>
      studying Computer Engineering at{" "}
      <span className="text-green-700 font-bold"> Binghamton University, </span>
      with a passion for software, machine learning and embedded systems!
    </p>
  );

  return (
    <>
      {section == "About" && (
        <div className="flex flex-col shadow-inner m-10 w-11/12 p-5 h-96 justify-evenly items-center bg-slate-800">
            <div className="flex flex-row justify-evenly">
                <h1 className="text-9xl flex flex-row">{icons}</h1>
                {text}
            </div>
            <p>poopy stinky!</p>

        </div>
      )}
    </>
  );
};

