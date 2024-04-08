import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [messageInput, setMessageInput] = React.useState('');
  const [variantInput, setVariantInput] = React.useState('notice');
  const {stack, setStack} = React.useContext(ToastContext);

  const handleSubmitform = React.useCallback((event) => {
    event.preventDefault();
    const newToast = {id: crypto.randomUUID(), message: messageInput, variant: variantInput};
    setStack([...stack, newToast])
    setMessageInput('');
    setVariantInput('notice');
  },[stack, setStack, messageInput, variantInput]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={handleSubmitform}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={messageInput} onChange={(e) => {
                setMessageInput(e.target.value)
              }}/>
              <VisuallyHidden>{messageInput}</VisuallyHidden>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option, index) => (
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variantInput === option}
                    onChange={(e) => {
                      setVariantInput(e.target.value)
                    }}
                  />
                  {option}
              </label>
              ))}            
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
