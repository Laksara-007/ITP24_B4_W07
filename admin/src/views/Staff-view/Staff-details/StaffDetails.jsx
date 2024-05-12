import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "../../../components/Lists/List";
import { getAllStaff } from "../../../api/staff/staffServices";
import { staffColumns } from "../../../data/dataTable";

const StaffDetails = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllStaff().then((res) => {
      if (!res.success) alert(res.message);
      else setUsers(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-between items-center mt-5 mr-4">
          <input
            type="text"
            placeholder="Search Staff Members"
            value={searchQuery}
            onChange={handleSearch}
            className="w-64 h-10 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
          <Link to="/staff/add">
            <button className="w-36 h-10 rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-primary focus:border-primary">
              Add Staff
            </button>
          </Link>
        </div>

        <List response={filteredUsers} title={"Staff"} dataCols={staffColumns} />
      </div>
    </div>
  );
};

export default StaffDetails;
