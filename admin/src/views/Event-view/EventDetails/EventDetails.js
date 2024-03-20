import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEventItems } from "../../../api/event/eventServices";
import List from "../../../components/Lists/List";
import { eventColumns } from "../../../data/dataTable";

const EventDetails = () => {

const[eventDetails, setEventDetails] = useState([])

useEffect(()=>{
    getAllEventItems().then((res)=>{
      if(!res.success) alert(res.message)
      else setEventDetails(res.data)
    })
},[])

  return (
    <div className="flex">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/event/add">
            <button className="w-36 h-10 rounded-sm text-white bg-primary">
              Add an Event Plan
            </button>
          </Link>
        </div>

        <List
          response={eventDetails}
          title={"Event"}
          dataCols={eventColumns}
        />
      </div>
    </div>
  );
};

export default EventDetails;
