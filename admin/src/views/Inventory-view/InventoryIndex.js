import React from "react";
import Featured from "../../components/Featured/Featured";
import Charts from "../../components/Charts/Charts";
import Tables from "../../components/Tables/Table";
import { useEffect, useState } from "react";
import { getAllReleaseRequests } from "../../api/inventory/inventoryServices";


const InventoryIndex = () => {
  const [rows, setRows] = useState([]);

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    let unsub = false;

    if (!unsub) {
      getAllReleaseRequests().then((res) => {
        console.log(res.data);
          setRows(res.data)
      })
    }

    return () => {
      unsub = true;
    };
  }, []);

  return (
    <div className="flex">
      <div className="">
        <div className="flex">
          <div className="flex-[3]">
            <Featured />
          </div>
          <div className="flex-[6]">
            <Charts />
          </div>
        </div>

        <div className="p-8 ml-10 mr-10 mt-10 shadow-xl">
          <h1>Recent stock release requests</h1>
          <Tables rows = {rows} />
        </div>
      </div>
    </div>
  );
};

export default InventoryIndex;
