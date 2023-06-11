import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import BasicInfo from './components/BasicDetails'
import Dashboard from "./components/Dashboard";

export default function App() {
  return(
  <div className="App">
    <NavBar/>
    <BasicInfo/>
    <Dashboard/>
  </div>
  )
}