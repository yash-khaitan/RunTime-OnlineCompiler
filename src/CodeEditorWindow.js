import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, language, theme }) => {

  const [value, setValue] = useState('');

  const handleEditorChange = (v, event) => {
    setValue(v);
    onChange('code', v);
  };
  
  return (
    <div className="overflow-hidden w-full h-full shadow-2xl rounded-md overlay">
      <Editor
        height="85vh"
        width="{`100%`}"
        language={language || 'python'}
        value={value}
        theme={theme}
        defaultValue="# Write code"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
