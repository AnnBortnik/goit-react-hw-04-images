import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
      <div className="Loader">
        <BallTriangle
          type="BallTriangle"
          color="deepskyblue"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

export default Loader;