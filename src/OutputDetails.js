import React from 'react';

const OutputDetails = ({ OutputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm">
        status:
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {OutputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {OutputDetails?.memory}
        </span>
      </p>
      <p className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        Time:
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {OutputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
