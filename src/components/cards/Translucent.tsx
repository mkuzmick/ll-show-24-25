import React, { ReactElement } from 'react';

type TranslucentProps = {
  children: React.ReactNode;
};

const Translucent: React.FC<TranslucentProps> = ({ children }): ReactElement => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Translucent;
