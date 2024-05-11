import React from "react";
import Charts from "../../../components/Charts/Charts";
import Featured from "../../../components/Featured/Featured";
import Table1 from "../../../components/Tables/Table1";
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