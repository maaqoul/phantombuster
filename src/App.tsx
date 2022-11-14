import React from "react";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

import "./styles/index.css";

export function App(): JSX.Element {
  return (
    <div className="bg-gray-75 w-full h-screen">
      <div className="h-full">
        <Header />
        <main className="container h-full w-full">
          <SideBar />
        </main>
      </div>
    </div>
  );
}
