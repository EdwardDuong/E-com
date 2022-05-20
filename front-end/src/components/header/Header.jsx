import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faTaxi,
  faCar,
  faArchway,
  faPlane,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [calendar, setCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openoption, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const countOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={type === "home" ? "headerContainer" : "headerContainer V2"}
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faArchway} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airpod Taxi</span>
          </div>
        </div>
        {type === "home" && (
          <>
            <h1 className="headerText">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
              get rewarded for your travels - unlock instant savings of 10% or
              more with a free Fukbooking account
            </p>
            <button className="headerButton">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCar} className="headerIcon" />
                <input
                  type="text"
                  className="searchBar"
                  placeholder="Where are you looking for"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setCalendar(!calendar)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {calendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <div
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openoption)}
                >
                  {`#${options.adult} Adult -${options.children} Childrens -${options.room} Rooms`}
                </div>
                {openoption && (
                  <div className="options">
                    <div className="option">
                      <div className="optionText">Adult</div>
                      <div className="optionContainer">
                        <div className="counter">{options.adult}</div>
                        <button
                          className="optionButton"
                          onClick={() => countOption("adult", "-")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <button
                          className="optionButton"
                          onClick={() => countOption("adult", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <div className="optionText">Children</div>
                      <div className="optionContainer">
                        <div className="counter">{options.children}</div>
                        <button
                          className="optionButton"
                          onClick={() => countOption("children", "-")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <button
                          className="optionButton"
                          onClick={() => countOption("children", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option">
                      <div className="optionText">Room</div>
                      <div className="optionContainer">
                        <span className="counter">{options.room}</span>
                        <button
                          className="optionButton"
                          onClick={() => countOption("room", "-")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <button
                          className="optionButton"
                          onClick={() => countOption("room", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="searchButton" onClick={() => handleSearch()}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
