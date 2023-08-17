import React from 'react';
import ComingSoon from './CommonComponent';
import { GiBoatPropeller } from "react-icons/gi"; // Import the GiCastle icon

const DAODash = () => {
  return (
    // Pass the GiCastle icon as the IconComponent prop to ComingSoon
    <ComingSoon IconComponent={GiBoatPropeller} />
  );
};

export default DAODash;
