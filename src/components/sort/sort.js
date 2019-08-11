import React from 'react';

import './sort.css';

const Sort = () => {
  return (
    <div className="sort">
      <span className="sort-text sort__sort-text">СОРТИРОВАТЬ:</span>
      <div className="sort btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-primary active">
          <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked="" /> Новые
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option2" autoComplete="off" /> Популярные
        </label>
        <label className="btn btn-primary">
          <input type="radio" name="options" id="option3" autoComplete="off" /> По цене
        </label>
      </div>
    </div>
  );
}

export default Sort;