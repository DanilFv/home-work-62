import Logo from '../../Logo/Logo.tsx';

const ToolBar = () => {
    return (
         <nav className='navbar navbar-expand-lg navbar-light bg-black'>
          <div className='container'>
            <Logo className='navbar-brand' />
              <div className='collapse navbar-collapse'>
                  <ul className='navbar-nav ms-auto'>
                      <li className='nav-item'>
                          <a
                              href="#"
                              className="nav-link text-white"
                          >
                              Home
                          </a>
                      </li>
                      <li className='nav-item'>
                          <a
                              href=""
                              className="nav-link text-white"
                          >
                              About me
                          </a>
                      </li>
                      <li className='nav-item text-white'>
                          <a
                              href="#"
                              className="nav-link text-white"
                          >
                              Contacts
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    );
};

export default ToolBar;