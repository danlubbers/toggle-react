// This way makes it completely reusable to have multiple toggle buttons that are independent 
import React, { useState } from 'react';

const Toggle = (props) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on)
  } 

  const {render} = props;
  return (
    <div>
      {render(on, toggle)}
    </div>
  )
}

export default Toggle;