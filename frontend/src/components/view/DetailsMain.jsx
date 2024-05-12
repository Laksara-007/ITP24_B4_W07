import React from "react";
import PackageCard from "./PackageCard";

const DetailsMain = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-[#967F57] to-[#FFFFFF]">
      <div className="flex flex-col w-full  items-center justify-center mt-10">
        <span className="text-5xl font-medium">Heritage Hotel</span>
        <span className="mt-10 max-w-7xl tracking-wider text-center">
          Welcome to Heritage Hotel, where elegance meets comfort. Nestled in
          the heart of Anuradapura, our boutique hotel offers a blend of historic
          charm and modern amenities. Whether you're here for business or
          leisure, our attentive staff ensures a memorable stay. Indulge in
          luxurious accommodations, exquisite dining, and personalized service.
          Experience the legacy of hospitality at Heritage Hotel
        </span>
      </div>

      <PackageCard />
    </div>
  );
};

export default DetailsMain;
