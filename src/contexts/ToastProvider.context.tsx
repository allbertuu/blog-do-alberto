'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
