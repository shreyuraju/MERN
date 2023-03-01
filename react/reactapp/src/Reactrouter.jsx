import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Arrow from './Arrow.jsx';
import Classes from './Classes';
import Test from './Test'
import Variables from './Variables';
import ArrayMethods from './ArrayMethods';
import Destructuring from './Destructuring';
import SpreadOperator from './SpreadOperator';
import TernaryOperator from './TernaryOperator';
import Imp from'./Imp';
import JavascriptXML from './JavascriptXML';
import Props from './Props'
import Events from './Events'
import Conditional from './Conditional'
import Home from './Home.jsx';
import UseState from './UseState.jsx';
import UseEffect from './UseEffect.jsx';
import PropsDrill from './PropsDrill.jsx';
import UseContext from './UseContext';

export default function Reactrouter() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/arrow' element={<Arrow/>}></Route>
                <Route exact path='/classes' element={<Classes/>}></Route>
                <Route exact path='/test' element={<Test/>}></Route>
                <Route exact path='/variables' element={<Variables/>}></Route>
                <Route exact path='/arraymethods' element={<ArrayMethods/>}></Route>
                <Route exact path='/destructuring' element={<Destructuring/>}></Route>
                <Route exact path='/spreadoperator' element={<SpreadOperator/>}></Route>
                <Route exact path='/ternaryoperator' element={<TernaryOperator/>}></Route>
                <Route exact path='/conditional' element={<Conditional/>}></Route>
                <Route exact path='/imp' element={<Imp/>}></Route>
                <Route exact path='/javascriptxml' element={<JavascriptXML/>}></Route>
                <Route exact path='/props' element={<Props/>}></Route>
                <Route exact path='/events' element={<Events/>}></Route>
                <Route exact path='/usestate' element={<UseState/>}></Route>
                <Route exact path='/useeffect' element={<UseEffect/>}></Route>
                <Route exact path='/propsdrill' element={<PropsDrill/>}></Route>
                <Route exact path='/usecontext' element={<UseContext/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
