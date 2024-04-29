import React from "react";
import { useLocation } from "react-router-dom";
import {
  createPackage,
  updatePackage,
} from "../../../api/package-api/packageServices";
import Form from "../../../components/Forms/form";

const formInfo = [
  { key: "Package ID", name: "packageID", type: "text" },
  {
    key: "Package Category",
    name: "packageCategory",
    type: "select",
    options: ["Bread & Breakfast", "Half Board", "Full Board", "All Inclusive"],
  },
  { key: "Package Description", name: "description", type: "text" },
  { key: "Terms And Conditions", name: "termsAndConditions", type: "text" },
  { key: "Valid Date Range", name: "validDates", type: "Number" },
  { key: "Room Details", name: "RoomDetails", type: "text" },
  { key: "Package Price", name: "price", type: "Number" },
  { key: "Availability", name: "isAvailable", type: "Boolean" },
];

const PackageForm = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];

  return (
    <div className="flex item-center justify-center">
      <Form
        formInfo={formInfo}
        title={path === "add" ? "CREATE PACKAGE" : "EDIT PACKAGE"}
        func={
          route === "package"
            ? path === "add"
              ? createPackage
              : updatePackage
            : null
        }
        path={route === "package" ? "/package/view" : "/"}
        id={path === "edit" ? id : null}
      />
    </div>
  );
};

export default PackageForm;