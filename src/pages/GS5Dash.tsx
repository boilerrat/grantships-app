import React from 'react';
import ComingSoon from './CommonComponent';
import { GiShipWheel } from "react-icons/gi"; // Import the GiCastle icon

const DAODash = () => {
  return (
    // Pass the GiCastle icon as the IconComponent prop to ComingSoon
    <ComingSoon IconComponent={GiShipWheel} />
  );
};

export default DAODash;
