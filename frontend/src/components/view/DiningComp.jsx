import React, { useEffect } from "react";
import { useState } from "react";
import { getAllMenuItems } from "../../api/requests";

const DiningComp = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getAllMenuItems().then((res) => setMenu(res.data));

    return () => {};
  }, []);

  const order = (id) => {};

  return (
    <div className="pt-28 flex flex-col items-center">
      <span className="text-lg font-bold tracking-wider">DINING</span>

      {menu.map((item) => {
        console.log(item.image);
        return (
          <div className="flex flex-row w-2/5 h-40 mt-3 shadow-xl">
            <div className="flex-1">
              <img
                src={item.image}
                alt="menu image"
                className="h-full w-full"
              />
            </div>
            <div className="flex-1 flex flex-col p-2 justify-center">
              <span>
                Food Name:{" "}
                <span className="text-xl font-bold">{item.foodItemName}</span>
              </span>
              <span>
                Availability:{" "}
                <span className="text-xl font-bold">{item.available}</span>
              </span>
              <span>
                Food Price:{" "}
                <span className="text-xl font-bold">${item.price}</span>
              </span>
              <a href={`/placeOrder/` + item._id}>
                <button
                  onClick={() => order(item._id)}
                  className="bg-blue-400 w-2/4 mt-2 text-white rounded-md"
                >
                  Order
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiningComp;
