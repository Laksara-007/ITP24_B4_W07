import React from 'react'
import {useLocation } from 'react-router-dom';
import { createEventItem, updateEventItem } from '../../../api/event/eventServices';
import Form from '../../../components/Forms/form';


const formInfo = [
  { key: "Location Name", name: "eventName", type:"select", options:['Amber Poolside', 'Cloud Cafe', 'Loft Lounge Bar', 'Grape Expectation' ] },
  { key: "Description", name: "eventDescription", type: "text", required:true},
  { key: "Event Type", name: "eventType", type: "select", options:['weddings', 'social', 'meetings', 'gatherings' ] },
  { key: "Event space", name: "eventspace", type: "select", options:['outdoor', 'indoor', 'ground' ] },
  { key: "Starting Date", name: "startingDate", type: "date"  },
  { key: "Ending Date", name: "endingDate", type: "date" },
  { key: "EventPrice", name: "eventplanPrice", type: "number", required:true },
];

const EventForm = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const route = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[3];

return (
  <div className="flex item-center justify-center">
    <Form
      formInfo={formInfo}
      title={path === "add" ? "CREATE EVENT" : "EDIT EVENT"}
      func={
        route === "event"
          ? path === "add"
            ? createEventItem
            : updateEventItem
          : null
      }
      path={route === "event" ? "/event/view" : "/"}
      id={path === "edit" ? id : null}
    />
  </div>
);
}

export default EventForm