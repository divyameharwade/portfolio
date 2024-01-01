import React from "react";
import profile from "../assets/profile.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p
            className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text py-4 max-w-screen-lg"
          >
            <div className="flex flex-col space-y-1.5">
              <div>
                WEB APPLICATIONS
                <br />
              </div>
              <div>
                SOFTWARE DEVELOPMENT <br />
              </div>
              <div>
                ANALYTICAL SYSTEMS <br />
              </div>
              <div>
                PROCESS AUTOMATIONS <br />
              </div>
              <div>
                LITERATURE REVIEW <br />
              </div>
            </div>
          </p>

          <div>
            <Link
              to="experience"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdKeyboardDoubleArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          -{" "}
          <img
            src={profile}
            alt="my profile"
            className="rounded-full mx-auto w-2/5  md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
