import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditorWindow = ({ onChange, language, theme, defaultCode }) => {
  const [value, setValue] = useState('');

  const handleEditorChange = (v, event) => {
    setValue(v);
    onChange('code', v);
  };

  return (
    <div className="overflow-hidden w-full h-full rounded-md">
      <Editor
        height="85vh"
        width="{`100%`}"
        language={language || 'python'}
        value={value || defaultCode}
        theme={theme}
        saveViewState={false}
        options={{ scrollbar: { vertical: 'hidden',horizontal: 'hidden' }}}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
