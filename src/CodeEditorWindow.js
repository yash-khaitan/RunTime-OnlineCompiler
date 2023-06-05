import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    console.log(value);
    setValue(value);
    onChange('code', value);
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
        onchange={() => handleEditorChange()}
      />
    </div>
  );
};

export default CodeEditorWindow;
