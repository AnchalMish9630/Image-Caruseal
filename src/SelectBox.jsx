import React, { useState } from "react";

const SelectBox = ({ label }) => {
  const [inputVal, setInputVal] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    // debugger
    const updatedArray = [...inputVal];
    updatedArray[index] = value;
    setInputVal(updatedArray);
  };

  const allFilled = inputVal.every((val) => val !== "");
  const handleSubmit = () => {
    alert("OTP submitted");
  };
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <label>
            <input
              type="text"
              style={{ padding: "12px", width: "20px" }}
              value={inputVal[index]}
              onChange={(e) => {
                const re = /^[0-9\b]+$/;

                // if value is not blank, then test the regex

                if (e.target.value === "" || re.test(e.target.value)) {
                  handleChange(index, e.target.value);
                } else {
                  alert("Enter value between 1-9");
                }
              }}
              disabled={index !== 0 && inputVal[index - 1] === ""}
            />
            <span>{label}</span>
          </label>
        </div>
      ))}

      <button disabled={!allFilled} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SelectBox;
