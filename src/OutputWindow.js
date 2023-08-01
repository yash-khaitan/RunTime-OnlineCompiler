import React from 'react';

const OutputWindow = ({ outputDetails }) => {
  // console.log(outputDetails)
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="Px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };

  return (
    <>
      {/* <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1> */}
      <div className="w-[97%] h-[49%] bg-[#1e293b] text-white font-normal text-sm overflow-y-auto text-left px-2 py-1 rounded-xl relative">
        <div className='absolute text-7xl opacity-[0.08] tracking-wide top-[35%] right-[39%]'> Shell </div>
     <span className='text-lg font-bold text-[#d3dce6]'> {'>'}  </span>  {outputDetails ? <>{getOutput()}</> : null }
      </div>
    </>
  );
};

export default OutputWindow;
