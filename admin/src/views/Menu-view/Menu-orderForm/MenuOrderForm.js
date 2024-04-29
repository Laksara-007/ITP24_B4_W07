import React from "react";
import { useLocation } from "react-router-dom";
import { createOrder } from "../../../api/menu/menuServices";
import Form from "../../../components/Forms/form";

const MenuOrderForm = () => {
  const formInfo = [
    { key: "Food ID", name: "foodId", type: "text" },
    { key: "Quantity", name: "quantity", type: "number" },
    { key: "NIC", name: "NIC", type: "text" },
    {
      key: "Location",
      name: "location",
      type: "text",
    },
    {
      key: "Phone number",
      name: "phoneNumber",
      type: "text",
    },
    {
      key: "orderStatus",
      name: "orderStatus",
      type: "select",
      options: ["PENDING","DELIVERED"],
    },
  ];

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];

  return (
    <div className="flex item-center justify-center">
      <Form
        formInfo={formInfo}
        title={path === "addOrder" ? "CREATE ORDER" : null}
        func={
          route === "menu"
            ? path === "addOrder"
              ? createOrder
              : null
            : null
        }
        path={route === "menu" ? "/menu/orders" : "/"}
      />
    </div>
  );
};

export default MenuOrderForm;
