import React from "react";
import Employee from "../../../components/Employee/Employee";
import Headcount from "../../../components/Headcount/Headcount";

const StaffHome = () => {
  return (
    <div className="flex">
      <div className="">
        <div className="flex">
          <div className="flex-[3] ">
            <Employee />
          </div>
          <div className="flex-[6]">
            <Headcount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffHome;