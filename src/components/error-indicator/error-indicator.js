/*
Error handling
*/

import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator jumbotron container">
      <h1 className="text-danger">Ошибка!</h1>
      <span>
        Что-то пошло не так
      </span>
    </div>
  );
}

export default ErrorIndicator;