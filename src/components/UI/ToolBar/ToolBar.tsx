import Logo from '../../Logo/Logo.tsx';

import {NavLink} from 'react-router-dom';

const ToolBar = () => {
    return (
         <nav className='navbar navbar-expand-lg navbar-light bg-black'>
          <div className='container'>
              <NavLink to='/'>
                  <Logo className='navbar-brand' />
              </NavLink>
              <div className='collapse navbar-collapse'>
                  <ul className='navbar-nav ms-auto'>
                      <li className='nav-item'>
                          <NavLink
                              to='/'
                              className="nav-link text-white"
                          >
                              Home
                          </NavLink>
                      </li>
                      <li className='nav-item'>
                           <NavLink
                              to='/works'
                              className="nav-link text-white"
                           >
                                Works
                          </NavLink>
                      </li>
                      <li className='nav-item text-white'>
                          <NavLink
                              to='/contacts'
                              className="nav-link text-white"
                          >
                              Contacts
                          </NavLink>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    );
};

export default ToolBar;