import React from "react";
import { NavLink } from "react-router-dom";
export default function UserMenu() {
  return (
    <div className="text-center">
      <div className="list-group">
        <h3>Dashbaord</h3>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action "
          aria-current="true"
        >
         Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action"
        >
        Orders
        </NavLink>
       
      </div>
    </div>
  );
}
