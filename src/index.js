import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './pages/landing-page/landing';
import Enduser from "./pages/enduser/enduser"
import Userlicenseagree from "./pages/license/license"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
      {/* <Route path="lilmodal" element={<Lilmodal />} /> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route exact path="/enduser" element={<Enduser />}></Route>
            <Route exact path="/license" element={<Userlicenseagree />}></Route>
            </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
