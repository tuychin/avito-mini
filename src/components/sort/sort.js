import React from 'react';

import './sort.css';

const Sort = () => {
  return (
    <div className="sort btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-primary active">
        <input type="radio" name="options" id="option1" autocomplete="off" checked="" /> Новые
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="options" id="option2" autocomplete="off" /> Популярные
      </label>
      <label className="btn btn-primary">
        <input type="radio" name="options" id="option3" autocomplete="off" /> По возрастанию цены
      </label>
    </div>
  );
}

export default Sort;