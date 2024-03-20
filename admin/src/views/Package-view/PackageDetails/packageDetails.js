import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPackages } from "../../../api/package-api/packageServices";
import List from "../../../components/Lists/List";
import { packageColumns } from "../../../data/dataTable";

const PackageDetails = () => {
  const [packageDetails, setPackagedetails] = useState([]);

  useEffect(() => {
    getAllPackages().then((res) => {
      setPackagedetails(res.data);
    });
  }, []);

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/package/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Create Package
            </button>
          </Link>
        </div>

        <List
          response={packageDetails}
          title={"Package"}
          dataCols={packageColumns}
        />
      </div>
    </div>
  );
};

export default PackageDetails;