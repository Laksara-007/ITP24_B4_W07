import { DateRange } from "react-date-range";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Navbar from "../../components/common/Navbar";
import "./reservationView.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { format } from "date-fns";
/* eslint-disable */
const reservationView = () => {
  const [openDate, setOpenDate] = useState(false);

  const [availableRooms, setAvailableRooms] = useState([]);

  const getAvailableRooms = async () => {
    const rooms = await axios.get("http://localhost:5000/api/v1/room");
    const availableRooms = rooms.data.filter((room) =>
      isAvailable(room, startDate, endDate)
    );
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div>
      <Navbar />
      <div className="imageContainer">
        <img className="HeaderImage" src="/images/resBackground.png" />
        <div className="OptionsTray">
          <div className="headerItem">
            <FontAwesomeIcon icon={faCalendarDays} />

            <div>
              <Button color="success">Check Availability</Button>
            </div>

            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDtate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
        </div>
      </div>
      <div className="roomContainer">
        <div>
          {/* <div className="roomCard"></div> */}
          <CardGroup>
            {/* <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card> */}
          </CardGroup>
        </div>
      </div>
    </div>
  );
};
export default reservationView;
