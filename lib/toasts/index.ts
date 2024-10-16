import toast, { DefaultToastOptions } from 'react-hot-toast';

const baseToastConfig: DefaultToastOptions = {
  ariaProps: {
    'aria-live': 'polite',
    role: 'status',
  },
  className: 'bg-background text-foreground',
  position: 'top-right',
};

const successToastConfig = {
  ...baseToastConfig,
  duration: 4000,
  icon: '👏',
};

const infoToastConfig = {
  ...baseToastConfig,
  duration: 6000,
  icon: '💡',
};

const failToastConfig = {
  ...baseToastConfig,
  duration: 6000,
  icon: '❌',
};

export const failSendToast = (message: string) => toast(message, failToastConfig);
export const successSendToast = (message: string) => toast(message, successToastConfig);
export const infoSendToast = (message: string) => toast(message, infoToastConfig);
