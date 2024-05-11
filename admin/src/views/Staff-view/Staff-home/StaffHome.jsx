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
          <div className="flex-[1]">
            <Employee />
          </div>
          <div className="flex-[4]">
            <Headcount />
          </div>
        </div>

{/* 
        <div className="p-8 ml-10 mr-10 mt-10 shadow-xl">
          <h1>Staff Overview</h1>
          <Table1 />
        </div> */}
      </div>
    </div>
  );
};

export default StaffHome;

// import React from "react";
// import Employee from "../../../components/Employee/Employee";
// import Headcount from "../../../components/Headcount/Headcount";

// const StaffHome = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-grow">
//         <div className="flex-1 h-3/4"> {/* Adjust the height of Employee */}
//           <Employee />
//         </div>
//         <div className="flex-1 h-1/4"> {/* Adjust the height of Headcount */}
//           <Headcount />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffHome;
