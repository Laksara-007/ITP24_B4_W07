import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "../../../components/Lists/List";
import { inventoryColumns } from "../../../data/dataTable";
import { getAllInventories } from "../../../api/inventory/inventoryServices";

const InventoryDetails = () => {
  const [inventory, setInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllInventories().then((res) => {
      setInventory(res.data);
    });
  }, []);

  // Function to handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter inventory based on search query
  const filteredInventory = inventory.filter((item) =>
    item.inventoryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/inventory/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create New
            </button>
          </Link>
        </div>
        
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="mt-5 p-2 border rounded-md"
        />

        {/* Display filtered inventory */}
        <List
          response={filteredInventory}
          title={"Inventory"}
          dataCols={inventoryColumns}
        />
      </div>
    </div>
  );
};

export default InventoryDetails;
