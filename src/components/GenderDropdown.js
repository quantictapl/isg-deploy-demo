import React, { useState } from "react";
import './componentcss/GenderDropdown.css'

function GenderDropdown(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    props.onGenderChange(selectedOption);
  };

  return (
    <div>
      <select
        className='gender'
        defaultValue=""
        name="gender"
        id="gender"
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default GenderDropdown;