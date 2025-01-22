import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./index.css";
const AccordionCustom = ({ heading, index }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveCircleOutlineIcon style={{ color: "#FEFEFE" }} />
            ) : (
              <AddCircleOutlineIcon style={{ color: "#FEFEFE" }} />
            )
          }
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
        >
          <Typography className="accordion-heading">
            {index + 1}. {heading}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default AccordionCustom;
