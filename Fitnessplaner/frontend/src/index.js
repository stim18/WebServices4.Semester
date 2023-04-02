import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import App2 from "./App2";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App2 />, document.getElementById("root1"));


// Wenn Sie die Performance Ihrer App messen möchten, können Sie eine Funktion
// an reportWebVitals übergeben (z.B.: reportWebVitals(console.log))
// oder an einen Analytics-Endpoint senden. Erfahren Sie mehr: https://bit.ly/CRA-vitals
reportWebVitals();
