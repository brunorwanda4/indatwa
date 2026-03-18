import MyImage from "@/components/my-components/my-Image";
import React from "react";

const ProjectsCard = () => {
  return (
    <div className=" flex items-center max-w-3xl space-x-14">
      <div className=" ">
        <MyImage
          src="/websites/1.jpg"
          className=" size-96"
          classname=" object-contain"
        />
      </div>
      <div className=" flex  flex-col">
        <div className="w-12 h-4 bg-base-content text-xs" />
        <div className=" border-l-2 border-base-content pl-4">
          <div>
            <h4 className=" font-medium text-lg">Project Name</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quos odit nam velit a enim, sit sequi vero ea
              <br />
              <br />
              blanditiis culpa impedit soluta nisi porro, cupiditate architecto
              magnam, neque molestiae.
            </p>
          </div>
        </div>
        <div className=" bg-base-content size-4 rounded-full" />
      </div>
    </div>
  );
};

export default ProjectsCard;
