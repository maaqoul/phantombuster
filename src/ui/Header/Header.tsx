import React from "react";
export default function Header(): JSX.Element {
  return (
    <nav className="bg-white py-2 md:py-4 w-full">
      <div className="container px-4 flex flex-rwo justify-between w-full">
        <div className="logo">
          <a href="#" className="font-bold text-xl text-indigo-600">
            PB
          </a>
        </div>
        <nav className="dashboard">
          <a href="#">Dashboard</a>
        </nav>
        <div className="user">
          <a href="#">user</a>
        </div>
      </div>
    </nav>
  );
}
