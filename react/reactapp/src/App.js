import logo from './logo.svg';
import './App.css';
import './extcss.css'

// import Arrow from './Arrow.jsx';
// import Classes from './Classes';
// import Test from './Test'
// import Variables from './Variables';
// import ArrayMethods from './ArrayMethods';
// import Destructuring from './Destructuring';
// import SpreadOperator from './SpreadOperator';
// import TernaryOperator from './TernaryOperator';
// import Imp from'./Imp';
// import JavascriptXML from './JavascriptXML';
// import Props from './Props'
// import Events from './Events'
// import Conditional from './Conditional'

import Reactrouter from './Reactrouter';



function App() {
  const mystyle = {
    color:"blue",
    backgroundColor:"yellow"
  }

  const name ="Rama"

  return (
    // <div className="App">
    //   <Arrow/>

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

      {/* <h1 style={{backgroundColor:"red", color:"green", marginTop:"100px"}}>HELLO WORLD</h1>
      <h2 style={mystyle}>HELLO WORLD : {name}</h2>
      <h3 className='content'>HELLO WORLD</h3>
      <h4>HELLO WORLD</h4>
      <h5>HELLO WORLD</h5>
      <h6>HELLO WORLD</h6> */}

      {/* <Classes/>
      <Arrow/>
      <Test/>
      <Variables/>
      <ArrayMethods/>
      <Destructuring/>
      <SpreadOperator/>
      <TernaryOperator/>
      <Imp/>
      <JavascriptXML/>
      <Props/>
      <Events/>
      <Conditional/> */}

      <Reactrouter/>
      
    </>
  );
}

export default App;
