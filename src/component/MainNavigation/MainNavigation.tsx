import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} className="dropbtn">
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainNavigation;
