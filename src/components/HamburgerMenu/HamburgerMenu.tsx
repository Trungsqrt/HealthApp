import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

import iconMenu from "../icons/icon_menu.svg";
import iconClose from "../icons/icon_close.svg";

// Define the type for a single menu item
type MenuItem = {
  path: string;
  label: string;
};

// Define the props for the component
type HamburgerMenuProps = {
  menuItems: MenuItem[];
};

export default function HamburgerMenu({ menuItems }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button
        className={styles.menuButton}
        aria-label="menu"
        onClick={toggleMenu}
      >
        <img
          src={isOpen ? iconClose : iconMenu}
          alt="Menu toggle"
          className={styles.icon}
        />
      </button>

      {isOpen && (
        <div className={styles.dropMenu}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={styles.menuItem}
              onClick={toggleMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
