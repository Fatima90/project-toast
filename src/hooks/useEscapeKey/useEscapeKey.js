import React from 'react';

function useEscapeKey(code, handleKeyboardAction) {
  React.useEffect(() => {
    const handleKeyboardEvent = (event) => {
      if(event.code === code){
        handleKeyboardAction();
      }
    };
    window.addEventListener('keydown', handleKeyboardEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyboardEvent);
    }
  },[code, handleKeyboardAction]);
}

export default useEscapeKey;
