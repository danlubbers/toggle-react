import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      


      {/* Used with ToggleRenderProps.JSX */}
      {/* <Toggle render={(on, toggle) => (
        <div>
         {on && <h1>First Toggle Test</h1>}
          <button onClick={toggle}>Show / Hide</button>
        </div>
        
      )}/> */}

      {/* Testing for reusable independent component */}
      {/* <Toggle render={(on, toggle) => (
        <div>
         {on && <h1>Independant Toggle Component</h1>}
          <button onClick={toggle}>Toggle ME!</button>
        </div>
        
      )}/> */}

      </header>
      {/* Used with ToggleRPC */}
      <Toggle>
        {(on, toggle) => (
          <>
            {on && <h1>First Toggle Test</h1>}
            <button onClick={toggle}>Show / Hide</button>
          </>
        
        )}
      </Toggle>

      {/* <Portal>
        <h1>I am the Portal</h1>
      </Portal> */}


    </div>
  );
}

export default App;
