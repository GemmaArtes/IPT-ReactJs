import React, { useState } from 'react';
import {
  BsCartCheck,
  BsCartPlus,
  BsFolder,
  BsFolderPlus,
  BsFileEarmark,
} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/dash/products',
      name: 'Products',
      icon: <BsCartCheck />,
    },
    {
      path: '/dash/add_products',
      name: 'Add Products',
      icon: <BsCartPlus />,
    },
    {
      path: '/dash/category',
      name: 'Categories',
      icon: <BsFolder />,
    },
    {
      path: '/dash/add_category',
      name: 'Add Categories',
      icon: <BsFolderPlus />,
    },
    {
      path: '/dash/reports',
      name: 'Reports',
      icon: <BsFileEarmark />,
    },
    {
      path: '/',
      name: 'Logout',
      icon: <CiLogout />,
    },
  ];
  return (
    <div className="sidecontainer">
      <div
        style={{ width: isOpen ? '180px' : '45px', position: 'fixed', height: '100%', top: 0, left: 0 }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">LIMS</h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? '200px' : '50px' }}>{children}</main>
    </div>
  );
};

export default Sidebar;