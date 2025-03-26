import React from "react";
import { projects } from "../../utils/data";

const Project = () => {
  return (
    <div>
      <div className="w-full py-6">
        <p className="text-3xl">Projects</p>
        <p>Lorem ipsum is a dummy text</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => {
          return (
            <>
              <div key={project.name} className="shadow rounded-lg ">
                <div className="">
                  <img src={project.image[0]} />
                </div>
                <div className="p-3">
                  <p className="font-bold text-xl">{project.name}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
