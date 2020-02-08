// This way uses render props children 
import React, { useState } from 'react';

const Toggle = (props) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on)
  } 

  const { children } = props;
  return (
    <>
      {children(on, toggle)}
    </>
  )
}

export default Toggle;