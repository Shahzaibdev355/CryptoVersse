import React, { useState } from "react";
import { Range } from "react-range";
import './index.css'
const RangeSlider = ({ setFormData, formData }) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 1;
  return (
    <Range
      values={formData?.strength}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => setFormData((prevData) => ({ ...prevData, "strength": values }))}
      renderTrack={({ props, children }) => {
        const percentage = ((formData?.strength[0] - MIN) / (MAX - MIN)) * 100;
        return (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: `linear-gradient(to right, #ff7357, #ff2957)`, // The gradient
              borderRadius: "4px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "6px",
                width: `${percentage}%`,
                background: `linear-gradient(to right, #ff7357, #ff2957)`, // Gradient for filled portion
                borderRadius: "4px",
              }}
            />
            <div
              style={{
                position: "absolute",
                height: "6px",
                width: `${100 - percentage}%`,
                left: `${percentage}%`,
                background: "#ccc", // Unfilled track background
                borderRadius: "4px",
              }}
            />
            {children}
          </div>
        );
      }}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "50px",
            width: "50px",
            backgroundImage: "linear-gradient(to right, #ff7357, #ff2957)",
            borderRadius: "100px",
            padding: "1px"
          }}
        >
          <div className="slider-circle-inner">
            <p>{formData?.strength}</p>
          </div>
        </div>
      )}
    />
  );
};

export default RangeSlider;
