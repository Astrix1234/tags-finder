import { toast } from 'react-toastify';
import scss from './ErrorButton.module.scss';

export const ErrorButton = () => {
  const handleError = () => {
    toast.error('An error occurred');
  };

  return (
    <button className={scss.errorButton} onClick={handleError}>
      Show Error
    </button>
  );
};
