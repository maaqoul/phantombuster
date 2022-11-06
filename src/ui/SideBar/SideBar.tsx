import React from "react";

export default function SideBar(): JSX.Element {
  return (
    <div className="w-80 p-4">
      <div className="search">
        search
        <input type="text" name="search" id="" />
      </div>
      <div className="categories">category</div>
    </div>
  );
}
