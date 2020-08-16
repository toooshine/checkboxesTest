import React from 'react';
import './App.css';

function CheckBox({item, handleClickParent}) {

const handleClick = () => {
    handleClickParent();
};

const toggleCheckboxChange = (item) => {
    handleClick(item);
}
  return (
    <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={item}
            checked={ item[1]?item[1]: false}
            onChange={ () => toggleCheckboxChange(item) }
        />
        {item}
        </label>
      </div>
  );
}

export default CheckBox;