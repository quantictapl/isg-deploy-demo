import React, { useState } from "react";
import './componentcss/IndustryDropdown.css'
function IndustryDropdown(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    props.onIndustryChange(selectedOption);
  };
  return (
    <div>
      <select className="industry" defaultValue="" name="industry" id="idustry"  onChange={handleSelectChange}>
        <option value="" disabled>
          Industry
        </option>
        <option value="IT">Fintech</option>
        <option value="Banking">Banking</option>
        <option value="other">Merchant</option>
      </select>
    </div>
  );
}

export default IndustryDropdown;
