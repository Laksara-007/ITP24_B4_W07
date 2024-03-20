import React from "react";
import Charts from "../../../components/Charts/Charts";
import Featured from "../../../components/Featured/Featured";
import Table1 from "../../../components/Tables/Table1";

const StaffHome = () => {
  return (
    <div className="flex">
      <div className="">
        {/* <div className="flex">
          <div className="flex-[3]">
            <Featured />
          </div>
          <div className="flex-[6]">
            <Charts />
          </div>
        </div> */}

        <div className="p-8 ml-10 mr-10 mt-10 shadow-xl">
          <h1>Staff Overview</h1>
          <Table1 />
        </div>
      </div>
    </div>
  );
};

export default StaffHome;