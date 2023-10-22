import React, { useState } from 'react';
import './CodeEditor.css';

function CodeEditor() {
  const [code, setCode] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [buttonText, setButtonText] = useState({
    copy: 'Copy',
    save: 'Save',
    lock: 'Lock',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setButtonText((prev) => ({ ...prev, copy: 'Copied!' }));
    });
  };

  const handleSave = () => {
    setButtonText((prev) => ({ ...prev, save: 'Saved!' }));
  };

  const handleLockUnlock = () => {
    if (!isLocked) {
      setButtonText((prev) => ({ ...prev, lock: 'Locked' }));
    } else {
      setButtonText((prev) => ({ ...prev, lock: 'Unlocked' }));
    }
    setIsLocked(!isLocked);
  };

  const handleCodeChange = (e) => {
    if (!isLocked) {
      setCode(e.target.value);
    }
  };

  return (
    <div className={`code-editor ${isLocked ? 'locked' : ''}`}>
      <div className="code-toolbar">
        <button onClick={handleCopy} className="code-button code-button--copy">{buttonText.copy}</button>
        <button onClick={handleSave} className="code-button code-button--save">{buttonText.save}</button>
        <button onClick={handleLockUnlock} className="code-button code-button--lock">
          {buttonText.lock}
        </button>
      </div>
      <textarea
        className="code-display"
        value={code}
        onChange={handleCodeChange}
        readOnly={isLocked}
      ></textarea>
    </div>
  );
}

export default CodeEditor;
