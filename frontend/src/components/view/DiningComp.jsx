import React from "react";
//import { useState } from "react";
//import { getAllMenuItems } from "../../api/requests";

const DiningComp = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   getAllMenuItems().then((res) => setMenu(res.data));

  //   return () => {};
  // }, []);

  // const order = (id) => {};

  const menu = [
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
    {
      id: "1",
      image: "",
      foodItemName: "Food Menu",
      available: "LUNCH 12 NOON TO 3PM DINNER 7PM TO 11PM",
      price: "Rs.100/=",
    },
  ];

  return (
    <div className="pt-28 flex flex-col items-center px-32">
      <span className="text-2xl font-normal tracking-wider">
        DINING AT OUR HOTEL
      </span>
      <div className="text-xl font-light pt-4 pb-8">
        Your explorations of Anuradhapura's historic core will take on new hues
        after a delectable supper.The greatest option for individuals who like
        to go on a culinary adventure is to visit the restaurants at Heritage
        Hotel.Savor deliciously hot Asian and Sri Lankan cuisine, as well as
        select your favorites from a variety of foreign cuisines. Take advantage
        of our hotel's family-friendly setting as you dine and create treasured
        memories.
      </div>
      <div className="grid grid-cols-3 w-full gap-y-5">
        {menu.map((item) => {
          return (
            <div className="max-w-[327px] w-full">
              <div className="max-h-[377px] min-h-[377px] h-[377px] w-[327px] max-w-[327px] min-w-[327px] bg-[#FFF2DE]">
                {item.image}
              </div>
              <div className="text-2xl font-medium pt-5">{item.foodItemName}</div>
              <div className="w-full h-px bg-black my-8" />
              <div className="font-light text-sm">{item.available}</div>
              <div className="pt-5">{item.price}</div>
              <div className="text-black text-sm py-10 cursor-pointer">Find out more</div>
            </div>
          );
        })}
      </div>
      {/* {menu.map((item) => {
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
      })} */}
    </div>
  );
};

export default DiningComp;
