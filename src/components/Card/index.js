import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Age: {props.age}</p>
        <p className="card-text">Contact: {props.email}</p>
        <img alt={props.name} src={props.picture} style={{ float: "right" }} />
      </div>
    </div>
  )
}

export default Card;