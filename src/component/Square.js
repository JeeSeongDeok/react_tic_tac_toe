import React from 'react';

function Square(props) {
  let squareInText;
  if (props.value != null) {
    squareInText = props.value;
  } else {
    squareInText = props.number;
  }
  return (
    <button className='square' onClick={props.onClick}>
      {squareInText}
    </button>
  );
}

export default Square