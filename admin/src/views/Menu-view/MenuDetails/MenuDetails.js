import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMenuItems } from "../../../api/menu/menuServices";
import List from "../../../components/Lists/List";
import { menuColumns } from "../../../data/dataTable";

const MenuDetails = () => {
  const [menuDetails, setMenuDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllMenuItems().then((res) => {
      if (!res.success) alert(res.message);
      else setMenuDetails(res.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMenu = menuDetails.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <input
            type="text"
            placeholder="Search Menu Items"
            value={searchQuery}
            onChange={handleSearch}
            className="w-64 h-10 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
          <Link to="/menu/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>

        <List response={filteredMenu}
        title={"Menu"} 
        dataCols={menuColumns} />
      </div>
    </div>
  );
};

export default MenuDetails;
