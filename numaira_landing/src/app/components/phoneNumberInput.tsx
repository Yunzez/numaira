"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Colors from "@/app/colors"; // Adjust your color path
import Formats from "@/app/formats"; // Adjust your formats path

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState("+1"); // Default to USA

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  return (
    <SelectContainer>
      <CountryCodeSelect value={countryCode} onChange={handleCountryCodeChange}>
        <option value="+1">🇺🇸 +1 (USA)</option>
        <option value="+44">🇬🇧 +44 (UK)</option>
        <option value="+91">🇮🇳 +91 (India)</option>
        <option value="+86">🇨🇳 +86 (China)</option>
        <option value="+61">🇦🇺 +61 (Australia)</option>
        {/* Add more country codes as needed */}
      </CountryCodeSelect>
    </SelectContainer>
  );
};

// Styled Components

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px; /* Padding around the select element */
  border-radius: ${Formats.roundmd}; /* Add rounded corners */
  border: 1.5px solid ${Colors.neutral300}; /* Border around the div */
  margin: 5px;
`;

const CountryCodeSelect = styled.select`
  flex-grow: 1;
  border: none; /* Remove border from the select element */
  font-size: ${Formats.textMD};
  color: ${Colors.neutral1000};
  background-color: ${Colors.neutral};

  &:focus {
    outline: none;
  }

  appearance: none; /* Remove default dropdown arrow (optional, if you want to style it) */
`;

export default PhoneNumberInput;
