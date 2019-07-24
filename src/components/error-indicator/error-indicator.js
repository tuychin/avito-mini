/*
Обработка ошибки
*/

import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator center-block">
      <span className="text-danger">Ошибка!</span>
      <span>
        Что-то пошло не так
      </span>
    </div>
  );
}

export default ErrorIndicator;