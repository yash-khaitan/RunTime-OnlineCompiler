import React, { useState } from 'react';

const CustomInput = ({ customInput, setCustomInput }) => {
  return (<div className=' h-[49%] w-[97%]  bg-[#fffffe]'>
    <textarea className=' h-full w-full focus:outline-none resize-none py-1 px-2 border border-[#d3dce6] rounded-xl' name='customInput' value={customInput} onChange={e => setCustomInput(e.target.value)} placeholder="Your custom input here" />
  </div>);
};

export default CustomInput;
