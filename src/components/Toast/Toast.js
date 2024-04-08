import React, { useCallback, useEffect } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, variant, handleDismissToast}) {
  const ToastIcon = ICONS_BY_VARIANT[variant];
  
  const dismissToast = useCallback(() => {
    handleDismissToast();
  },[handleDismissToast])

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton} onClick={dismissToast} aria-label="Dismiss message" aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
