
import Logo from "../../assets/logo.jpg";
import { FaSearch } from "react-icons/fa";



export default function Navbar ()
{
  return (
  <div>
    <div>
        {/* upper navbar*/}
        <div>
            <div>
                < div className="self-center flex bg-blue-200 gap-2 content-center pe-0 space-x-2">
                    <a href="#" className="w-20 h-30">
                        <img src={Logo} alt="logo"  />
                    </a>
                    <div className="ms-0 flex">
                    <input type="text" placeholder="search" />
                    <span><FaSearch /></span>
                    <span>Search</span><span><img/></span>
                     </div>
                     <div className="m">
                        <a href="#">Sign Up</a>
                     </div>
                     <div className="space-x-1">
                        <a href="#">Register</a>
                     </div>
                </div> 
                
            </div>
        </div>
    </div>
    <div>
        {/* lower navbar*/}
        <div className="bg-amber-400">
            <ul className="flex justify-between gap-px bg-amber-600">
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Credit</a></li>
                <li><a href="#">saving</a></li>
                <li><a href="#">Investment</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About us</a></li>
            </ul>
              
        </div>

    </div>
    
  </div>
  );
}

