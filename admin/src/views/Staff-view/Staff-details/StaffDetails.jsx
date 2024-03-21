import List from "../../../components/Lists/List";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStaff } from "../../../api/staff/staffServices";
import { staffColumns } from "../../../data/dataTable";

const StaffDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllStaff().then((res)=>{
      if(!res.success) alert(res.message)
      else setUsers(res.data)
    })
  }, []);
  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/staff/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Add Staff
            </button>
          </Link>
        </div>

        <List
          response={users}
          title={"Staff Details"}
          dataCols={staffColumns}
        />
      </div>
    </div>
  );
};

export default StaffDetails;