import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar shadow">
      <img className='w-10 hover:scale-110 transition-transform ' src="/7.jpg" alt="Ameer Hamza" />
      
      <div className="navbar-start">
     
        <Link
          className="link text-base-content/90 link-neutral text-xl font-bold text-white no-underline ps-4 "
          to="/"
        >
         
          Ameer Hamza
        </Link>
      </div>

      <div className="navbar-center max-sm:hidden">
        <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
          <li className="dropdown relative inline-flex [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white">
            <a href=""><Link to='/src/pages/About.tsx'>About</Link></a>
           </li>
          <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white">
           
          <a href=""><Link to='/src/pages/Projects.tsx'>App Projects</Link></a>
           
              
            
          
          </li>
          <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white">
           
           <a href=""><Link to='/src/pages/WebProject.tsx'>Web Projects</Link></a>
            
               
             
           
           </li>
        </ul>
      </div>

      <div className="navbar-end items-center gap-4">
        <div className="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-outline btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white text-center">
             
              
                <a href=""><Link to='/src/pages/About.tsx'>About</Link></a>
                
              
             
            </li>
            <br />
            <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white text-center px-px ">
             
            <a href=""><Link to='/src/pages/Projects.tsx'>App Projects</Link></a>
             
            </li>
            <br />
            <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom] text-white text-center px-px ">
             
            <a href=""><Link to='/src/pages/WebProject.tsx'>Web Projects</Link></a>
             
            </li>
          </ul>
        </div>

        <div className="dropdown relative inline-flex rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-primary btn-outline max-sm:btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="max-sm:hidden">Theme</span>
            <span className="icon-[tabler--aperture] block size-6 sm:hidden"></span>
            <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-5 max-sm:hidden"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-40"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-text w-full justify-start"
                aria-label="Default"
                value="dark"
                defaultChecked
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-text w-full justify-start"
                aria-label="Dark"
                value="dark"
              />
            </li>
          
            
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-text w-full justify-start"
                aria-label="Luxury"
                value="luxury"
              />
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
