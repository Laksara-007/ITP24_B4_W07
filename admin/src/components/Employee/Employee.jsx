import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const StaffDetails = ({ staff }) => {
  // Example data for staff details
  const exampleStaff = {
    totalStaff: 50,
    completionRate: 70, // Percentage completion rate
    previousReleasesInfo: " Need to add something meaningful here.",
  };

  return (
    <div className="p-4 mt-10 shadow-xl ml-10">
      <div className="flex justify-between items-center">
        <h1 className="title">Staff Details</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 flex justify-center w-full">
          <CircularProgressbar value={exampleStaff.completionRate} text={`${exampleStaff.completionRate}%`} strokeWidth={5} />
        </div>
        <p className="text-[#999]">Total number of staff</p>
        <p className="">{exampleStaff.totalStaff}</p>
        <p className="text-center text-[#999]">
          {exampleStaff.previousReleasesInfo}
        </p>
      </div>
    </div>
  );
};

export default StaffDetails;
