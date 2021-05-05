import React from 'react';

function Menu(props) {
  return (
    <select className="form-select" aria-label="Default select example" {...props}>
      <option defaultValue value="1">Sort alphabetically</option>
      <option value="2">Sort by age</option>
    </select>
  )
}

export default Menu;