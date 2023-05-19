import React from 'react';
import { Route, Routes } from "react-router-dom";
import ListEmployeeComponent from './ListEmployeeComponent';

const AdminDashb = () => {
  return (
    <div>
    <Routes>
    <div className = "container">
    <Route path = "/employeetable" exact component = {ListEmployeeComponent}></Route>
      </div>
      </Routes>
    </div>
  );
}

export default AdminDashb;

