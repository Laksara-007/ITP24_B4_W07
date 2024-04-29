import React, { useState } from "react";
import BookingModal from "./bookingModal";

function ReservationView() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
  ); // Default 1 day after

  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  
  const handleBookNow = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };


  const rooms = [
    // Replace with API call
    {
      id: 1,
      name: "Deluxe Room",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description:
        "Spacious room with a king-size bed and a balcony overlooking the city.",
      maxGuests: 2,
      pricePerNight: 150,
    },
    {
      id: 2,
      name: "Standard Room",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description: "Comfortable room with a queen-size bed.",
      maxGuests: 3,
      pricePerNight: 120,
    },
    {
      id: 3,
      name: "Suite",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description:
        "Luxurious suite with a separate living area, a king-size bed, and a jacuzzi.",
      maxGuests: 4,
      pricePerNight: 200,
    },
    {
      id: 4,
      name: "Suite",
      imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
      description:
        "Luxurious suite with a separate living area, a king-size bed, and a jacuzzi.",
      maxGuests: 4,
      pricePerNight: 200,
    },
  ];

  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event) => {
    setEndDate(new Date(event.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 mt-16">Book Your Stay</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center">
          <label htmlFor="startDate" className="mr-2 text-gray-700">
            Check-in Date:
          </label>
          <input
            type="date"
            id="startDate"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={startDate.toISOString().split("T")[0]}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="endDate" className="mr-2 text-gray-700">
            Check-out Date:
          </label>
          <input
            type="date"
            id="endDate"
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={endDate.toISOString().split("T")[0]}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="shadow rounded-md overflow-hidden">
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{room.name}</h3>
                <p className="text-gray-700 mb-2">{room.description}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">
                    Guests: {room.maxGuests}
                  </span>
                  <span className="text-blue-500 font-bold">
                    ${room.pricePerNight} / night
                  </span>
                </div>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleBookNow}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">
          No rooms available for these dates.
        </p>
      )}
      {isModalOpen && (
        <BookingModal
          startDate={startDate}
          endDate={endDate}
          open={isModalOpen}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ReservationView;
