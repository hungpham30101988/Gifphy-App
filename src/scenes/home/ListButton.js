import React from 'react';

const ListButton = (props) => {
  return (
    <div className="button-container">
      {props.offset > 20 ?
        <button
          onClick={
            () => props.action('previous')
          }>Previous
        </button>
        : null
      }
      <button onClick={
        () => props.action()
      }>
        Next
      </button>
    </div>
  )
};

export default ListButton;