import React, { useState } from "react";
import { createCustomer } from "../api/userServices";

const Register = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhonenumber, setCustomerPhonenumber] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerRanking, setCustomerRanking] = useState("");

  const handleRegister = async () => {
    try {
      const customerData = {
        customertName: customerName,
        customerEmail: customerEmail,
        customerPhonenumber: customerPhonenumber,
        customerAddress: customerAddress,
        customerRanking: customerRanking,
      };

      const response = await createCustomer(customerData);
      console.log("Customer created successfully:", response);
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhonenumber("");
      setCustomerAddress("");
      setCustomerRanking("");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#977F57] bg-opacity-40">
      <div className="flex w-full m-auto justify-center items-center">
        <form className="p-10 flex flex-col gap-4 max-w-[40%] h-full w-full bg-white rounded-lg mt-60">
          <div className="text-center text-xl font-medium">Register</div>
          <div className="">
            <div>
              <div className="text-base font-normal">Name</div>
            </div>
            <div className="mt-px">
              <input
                type="text"
                placeholder="Enter your name"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Email</div>
            </div>
            <div className="mt-px">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Phone Number</div>
            </div>
            <div className="mt-px">
              <input
                type="text"
                placeholder="Enter your phone number"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
                value={customerPhonenumber}
                onChange={(e) => setCustomerPhonenumber(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Address</div>
            </div>
            <div className="mt-px">
              <input
                type="text"
                placeholder="Enter your address"
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-base font-normal">Ranking</div>
            </div>
            <div className="mt-px">
              <select
                className="h-full w-full rounded-r-[7px] rounded-l-[7px] bg-white px-3  py-2.5 text-base font-normal text-blue-gray-700  outline outline-none placeholder:text-gray-500 focus:border-r-2 focus:border-y-2 disabled:border-0 bg-blue-gray-50 border border-black"
                value={customerRanking}
                onChange={(e) => setCustomerRanking(e.target.value)}
              >
                <option value="">Select Ranking</option>
                <option value="LOYAL">Loyal</option>
                <option value="REGULAR">Regular</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#F59E0B] text-white rounded-[7px] px-3 py-2 text-base font-medium"
              type="button"
              onClick={() => handleRegister()}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
