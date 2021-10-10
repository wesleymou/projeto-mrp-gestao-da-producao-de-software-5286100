import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      {/* Brand Logo */}
      <a href='/' className='brand-link'>
        {/* <img src='dist/img/AdminLTELogo.png' alt='AdminLTE Logo' className='brand-image img-circle elevation-3' style={{ opacity: '.8' }} /> */}
        <span className='brand-text font-weight-light' style={{ marginLeft: '54px' }}>
          Sistema MRP
        </span>
      </a>

      {/* Sidebar */}
      <div className='sidebar'>
        {/* Sidebar Menu */}
        <nav className='mt-2'>
          <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu' data-accordion='false'>
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className='nav-item'>
              <a href='/dashboard' className='nav-link'>
                <i className='nav-icon fas fa-th'></i>
                <p>Dashboard</p>
              </a>
            </li>

            <div
              style={{
                width: '100%',
                margin: '5px 0px',
                borderBottom: '1px solid gray',
              }}
            />
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
