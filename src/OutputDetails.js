import React from 'react';

const OutputDetails = ({ outputDetails }) => {
  // console.log(outputDetails)
  return (
    <div className="metrics-container flex flex-row space-x-16  pl-6 pr-8 items-center rounded-xl bg-[rgb(245,245,247)]">
      {/* <p className="text-sm bg-gray-100">
        status:
        <span className="font-semibold px-2 py-1 rounded-md ">
          {outputDetails?.status?.description}
        </span>
      </p> */}
      <p className="text-base  w-36 text-left">
        Memory:
        <span className="font-semibold mx-2 ">
          {outputDetails?.memory}
        </span>
      </p>
      <p className=" text-base  w-36 text-left">
        Time: 
        <span className="font-semibold mx-2 ">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
