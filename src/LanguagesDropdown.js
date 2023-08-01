import React from 'react';
import Select from 'react-select';
// import { customStyles } from './constants/customStyles';
import { languageOptions } from './constants/languageOptions';


const LanguagesDropdown = ({ onSelectChange }) => {

  return (
    <div className=''>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: state.isFocused ? '1.5px solid #d3dce6 ' : ' 1.5px solid #d3dce6',
            borderRadius: '10px',
            width:"220px",
            textAlign:'left',
            paddingLeft:'5px',
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            '&:hover': {
              border: state.isFocused ? '1.5px solid #d3dce6 ' : ' 1.5px solid #d3dce6'
            },

          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            width: '95%',
            margin: 'auto',
            cursor: 'pointer',
            color: state.isSelected? 'black':'#6d6a6a',
            backgroundColor: state.isSelected? '#d3dce640':null,
            borderRadius: '20px'
            
          })

        }}
        placeholder={`Choose Language`}
        options={languageOptions}
        // styles={customStyles}
        defaultValue={languageOptions[0]}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
      />
    </div>
  );
};

export default LanguagesDropdown;
