import React from 'react';

export function SortMenu(props) {
  return (
    <select className="form-select" aria-label="Default select example" {...props}>
      <option defaultValue value="1">Sort alphabetically</option>
      <option value="2">Sort by age</option>
    </select>
  )
}

export function ShowMenu(props) {
  return (
    <select className="form-select" aria-label="Default select example" {...props}>
      <option defaultValue value="0">Show all</option>
      <option defaultValue value="1">Men</option>
      <option value="2">Women</option>
    </select>
  )
}