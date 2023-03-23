import React, { FC } from 'react';

import './Container.sass';

interface IContainerProps {
  children: React.ReactNode
}

const Container: FC<IContainerProps> = ({ children }) => {

  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container;
