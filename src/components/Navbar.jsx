import React from "react";
import { menus } from "../utils/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-screen flex-col items-center">
      <div className="p-3 h-[25%]">Navbar</div>
      <div className="p-3 h-[50 %] grid grid-rows gap-2">
        {menus &&
          menus.map((menu) => {
            const MenuIcon = menu.icon;
            return (
              <>
                <div
                  key={menu.name}
                  className="w-full py-2 px-3 hover:bg-gray-100"
                >
                  <Link className="flex items-center" to={menu.url}>
                    <MenuIcon size={18} className="mr-2" />
                    <span>{menu.name}</span>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
      <div className="p-3 h-[25%]"></div>
    </div>
  );
};

export default Navbar;
