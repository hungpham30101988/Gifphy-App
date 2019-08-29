import React from 'react';
import Loader from 'react-loader-spinner';

const MakeLoader = (props) => {
  return (
    <div className="loader-container">
      <Loader
        type={props.type}
        height={Number(props.height)}
        width={Number(props.width)}
        color={props.color}
      />
    </div>
  )
};

export default MakeLoader;