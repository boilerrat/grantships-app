import React from 'react';
import ComingSoon from './CommonComponent';
import { GiWhaleTail } from "react-icons/gi"; // Import the GiCastle icon

const DAODash = () => {
  return (
    // Pass the GiCastle icon as the IconComponent prop to ComingSoon
    <ComingSoon IconComponent={GiWhaleTail} />
  );
};

export default DAODash;
