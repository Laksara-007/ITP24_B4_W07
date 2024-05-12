import React, { useState, useEffect } from "react";
import BookingModal from "./bookingModal";
import axios from "axios";
import {
  format,
  addDays,
  parseISO,
  formatISO,
  isAfter,
  isBefore,
  isSameDay,
} from "date-fns";

function ReservationView() {
  const [startDate, setStartDate] = useState(
    format(addDays(new Date(), 1), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState(
    format(addDays(parseISO(startDate), 1), "yyyy-MM-dd")
  );
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]); // Track filtered rooms [default empty array]
  const [currentRoom, setCurrentRoom] = useState(null); // Track current room [default null]
  const [currentPrice, setCurrentPrice] = useState(0); // Track current price [default 0]
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal

  useEffect(  () => {
    async function fetchData() {
     await axios
      .get("http://localhost:5000/api/v1/room")
      .then((response) => {
        console.log("Rooms data: ", response.data);
        const roomsData = response.data.map((room) => {
          const ret = {
            roomId: room._id,
            name: room.type,
            description: room.description,
            maxGuests: 2,
            pricePerNight: room.price,
            unavailableDates: room.unavailableDates || [],
          };
          switch (room.type) {
            case "DELUX":
              ret.imageUrl =
                "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
              break;
            case "STANDARD":
              ret.imageUrl =
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
              break;
            case "SUPREME":
              ret.imageUrl =
                "https://images.unsplash.com/photo-1572987669554-0ba2ba9aee1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
              break;
            case "VIP":
              ret.imageUrl =
                "https://images.unsplash.com/photo-1660731513683-4cb0c9ac09b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
              break;
            default:
              ret.imageUrl =
                "https://images.unsplash.com/photo-1618221823713-ca8c0e6c9992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
              break;
          }
          return ret;
        });
        setRooms(roomsData);
        setFilteredRooms(rooms);

      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
    }
    fetchData();
    filterRooms();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      filterRooms();
    }, 100);
  }, []);

  const handleBookNow = (pricePerNight) => {
    // calculate the total price using the price per night and the number of days
    var totalDays =
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
    console.log("Total days: ", totalDays);
    if (totalDays < 1) {
      totalDays = 1;
    }
    setCurrentPrice(pricePerNight * totalDays);
    console.log("Current price: ", currentPrice);
    // setCurrentPrice(pricePerNight);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleStartDateChange = (event) => {
    if (event.target.value > endDate) {
      alert("Please select a date before the end date");
    } else if (event.target.value < format(new Date(), "yyyy-MM-dd")) {
      alert("Please select a date after today");
    } else {
      const newStartDate = format(new Date(event.target.value), "yyyy-MM-dd");
      setStartDate(newStartDate);
      filterRooms();
    }
  };

  const handleEndDateChange = (event) => {
    if (event.target.value < startDate) {
      alert("Please select a date after the start date");
    } else if (event.target.value < format(new Date(), "yyyy-MM-dd")) {
      alert("Please select a date after today");
    } else {
      const newEndDate = format(new Date(event.target.value), "yyyy-MM-dd");
      setEndDate(newEndDate);
      filterRooms();
    }
  };

  const filterRooms = () => {
    console.log("Filtering rooms with rooms: ", rooms);
    const filtered = rooms.filter((room) => {
      let isAvailable = true;
      console.log("Room: ", room);
      console.log("Room unavailable dates: ", room.unavailableDates);
      console.log("Start date: ", formatISO(new Date(startDate)));
      console.log("End date: ", formatISO(new Date(endDate)));
      if (room.unavailableDates.length === 0) {
        return room;
      }
      room.unavailableDates.forEach((date) => {
        if (
          isAfter(new Date(date), new Date(startDate)) &&
          isBefore(new Date(date), new Date(endDate))
        ) {
          isAvailable = false;
        }
        if (
          isSameDay(new Date(date), new Date(startDate)) ||
          isSameDay(new Date(date), new Date(endDate))
        ) {
          isAvailable = false;
        }
      });
      if (isAvailable) {
        return room;
      }
    });
    setFilteredRooms(filtered);
  };

  const createReservation = async (name) => {
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    console.log(" currentRoom: ", currentRoom);
    const reservation = {
      customerName: name,
      roomId: currentRoom.roomId,
      name: currentRoom.name,
      price: currentPrice,
      startDate: startDate,
      endDate: endDate,
    };
    console.log("Reservation: ", reservation);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/reservation",
        reservation
      );
      console.log("Reservation created: ", response.data);
      alert("Reservation created successfully!");
      handleCloseModal();
      //redirect to home page
      // window.location.href = "/";
    } catch (error) {
      console.error("Error creating reservation: ", error);
      alert("Error creating reservation");
      handleCloseModal();
    }
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
            value={new Date(startDate).toISOString().split("T")[0]}
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
            value={new Date(endDate).toISOString().split("T")[0]}
            onChange={handleEndDateChange}
          />
        </div>
      </div>
      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredRooms.map((room) => (
            <div
              key={room.roomId}
              className="shadow rounded-md overflow-hidden"
            >
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
                <button
                  className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {
                    setCurrentRoom(room);
                    handleBookNow(room.pricePerNight);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-center">
          No rooms available for these dates. Please select a different date
        </p>
      )}
      {isModalOpen && (
        <BookingModal
          startDate={startDate}
          endDate={endDate}
          open={isModalOpen}
          price={currentPrice}
          handleClose={handleCloseModal}
          createReservation={createReservation}
        />
      )}
    </div>
  );
}

export default ReservationView;
