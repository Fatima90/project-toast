import React, { useCallback } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

function ToastShelf() {
  const {stack, setStack} = React.useContext(ToastContext);

  const dismissToast = useCallback((index) => {
    setStack(stack.filter((elem, i) => i !== index))
  },[setStack, stack]);

  const keyHandler = useCallback(() => {
    setStack(stack.slice(0,stack.length -1))
  },[setStack, stack]);

  useEscapeKey('Escape', keyHandler);

  if(stack.length === 0){
    return;
  }

  return (
    <ol className={styles.wrapper} aria-live="polite" aria-label="Notification" role="region">
      {stack?.map((item, index) => (
        <li className={styles.toastWrapper} key={item.id}>
          <Toast variant={item.variant} handleDismissToast={() => dismissToast(index)}>{item.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
