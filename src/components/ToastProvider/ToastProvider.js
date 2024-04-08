import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [stack, setStack] = React.useState([]);

  const value = React.useMemo(() => ({
    stack, setStack
  }),[stack]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
