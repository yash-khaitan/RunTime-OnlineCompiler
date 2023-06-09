import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { languageOptions } from './constants/languageOptions';

import LanguagesDropdown from './LanguagesDropdown';
import CodeEditorWindow from './CodeEditorWindow';
import OutputWindow from './OutputWindow';
import CustomInput from './CustomInput';
import OutputDetails from './OutputDetails';

const Landing = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState('');
  const [theme, setTheme] = useState('light');
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);

  const onSelectChange = (sl) => {
    console.log('selected language', sl);
    setLanguage(sl);
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: 'POST',
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);

        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
    }
  };

  const onChange = (action, data) => {
    console.log(action, data);
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };
  return (
    <>
      <div className=" flex flex-row border-2 border-black">
        <div className="px-4 pt-2">
          {/* // px-4 py-2 */}
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        {/* This is for theme change. I dont want to change the theme.*/}
        <div className="px-4 py-2">
          <button
            onClick={handleCompile}
            disabled={!code}
            className={`cursor-pointer py-[6px] px-[16px] bg-[#0556f3] text-[14px] leading-5 text-white border-none outline-none rounded-sm z-10 font-bold flex-shrink-0 ${
              !code ? 'opacity-50' : ''
            }`}
          >
            {processing ? 'Processing...' : 'Run'}
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-2 py-4">
        <div className="flex flex-col w-[70%] h-full justify-start items-end py-2 border-[#aca] border-2">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme}
          />
        </div>
        {/* // Output window, input window and other detail box */}
        <div className=" right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            {/* <button
              onClick={handleCompile}
              disabled={!code}
              className={`cursor-pointer py-[6px] px-[16px] bg-[#0556f3] text-[14px] leading-5 text-white border-none outline-none rounded-sm z-10 font-bold flex-shrink-0 ${
                !code ? 'opacity-50' : ''
              }`}
            >
              {processing ? 'Processing...' : 'Run'}
            </button> */}
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
    </>
  );
};

export default Landing;
