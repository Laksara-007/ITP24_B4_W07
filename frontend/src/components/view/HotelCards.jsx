import React from "react";

const HotelCards = () => {
  const rooms = [
    {
      image1:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      image2:
        "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "DELUX LAKE VIEW HOTEL",
    },
    {
      image1:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      image2:
        "https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "VIP ROOMS",
    },
    {
      image1:
        "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      image2:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "SUPREME LUXURY ROOMS",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-28">
      <span className="text-2xl font-normal tracking-wider capitalize">
        HERITAGE HOTEL
      </span>
      <div className="text-xl font-light pt-4 pb-8 text-center px-32">
        Your explorations of Anuradhapura's historic core will take on new hues
        after a delectable supper.The greatest option for individuals who like
        to go on a culinary adventure is to visit the restaurants at Heritage
        Hotel.Savor deliciously hot Asian and Sri Lankan cuisine, as well as
        select your favorites from a variety of foreign cuisines. Take advantage
        of our hotel's family-friendly setting as you dine and create treasured
        memories.
      </div>
      {rooms.map((room) => {
        return (
          <div className="flex flex-row h-96 w-3/4 mt-6 mb-10">
            <div className="flex-1 p-2">
              <img src={room.image1} alt="room" className="h-full" />
            </div>
            <div className="flex flex-col flex-1 p-2">
              <div className="flex-1">
                <img src={room.image2} alt="" className="h-48 w-full" />
              </div>
              <div className="flex-1 bg-[#967F57] mt-2 flex flex-col items-center justify-center">
                <span className="text-white">{room.title}</span>
                <div className="w-32 h-0.5 bg-white mt-2"></div>
                <button className="bg-transparent border-2 border-white mt-2 w-2/4 text-white">
                  BOOK THIS ROOM
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelCards;
