import React from 'react'
import {useLocation } from 'react-router-dom';
import { createMenuItem, updateMenuItem } from '../../../api/menu/menuServices';
import Form from '../../../components/Forms/form';

const MenuForm = () => {

  const formInfo = [
    { key: "Food Item Name", name: "foodItemName", type: "text" },
    { key: "Description", name: "foodItemDescription", type: "text" },
    { key: "Price", name: "price", type: "number" },
    { key: "Availibity", name: "available", type: "select",options:["True","False"], },
    { key: "Cuisine Type", name: "cuisineType", type: "select", options:["Chineese","Indian","Chineese","Italian","Mongolian","French"] },
    {
      key: "Meal Type",
      name: "mealType",
      type: "select",
      options: ["breakfast", "lunch", "dinner"],
    },
    { key: "Image", name: "image", type: "file"},
    { key: "Consumption", name: "consumption", type: "number" },
  ];

   

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];

return (
  <div className="flex item-center justify-center">
    <Form
      formInfo={formInfo}
      title={path === "add" ? "CREATE MENU" : "EDIT MENU"}
      func={
        route === "menu"
          ? path === "add"
            ? createMenuItem
            : updateMenuItem
          : null
      }
      path={route === "menu" ? "/menu/view" : "/"}
      id={path === "edit" ? id : null}
    />
  </div>
);
}

export default MenuForm