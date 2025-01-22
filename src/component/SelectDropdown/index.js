import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./index.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const SelectDropdown = ({ data, selected, setSelected }) => {
  
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="dropdown">
        <Button
          variant="text"
          disableRipple={true}
          className="dropdown-btn"
          onClick={() => {
            // document.getElementById("dropdown-content").style.display = "block";
            setShow(!show);
          }}
        >
          <div>
            <p>{selected ?? ""}</p>
            <ArrowDropDownIcon style={{ color: "#FEFEFE", marginLeft: "10px" }} />
          </div>
        </Button>
        {show && (
          <div className="dropdown-content" id="dropdown-content">
            <div className="dropdown-content-items-main">
              <div>
                {data?.map((val, index) => {
                  return (
                    <Button
                      variant="text"
                      disableRipple={true}
                      className="dropdown-item"
                      key={index}
                      onClick={() => {
                        if (setSelected) setSelected(val.heading);
                        setShow(false);
                        // document.getElementById(
                        //   "dropdown-content"
                        // ).style.display = "none";
                      }}
                      style={{
                        borderBottomWidth:
                          index < data.length - 1 ? "0.7px" : "0px",
                        borderBottomColor: "#FFFFFF33",
                      }}
                    >
                      <div>
                        <p className="dropdown-item-heading">{val.heading}</p>
                        <p className="dropdown-item-title">{val.title}</p>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectDropdown;
