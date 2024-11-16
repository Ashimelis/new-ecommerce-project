
import Logo from "../../assets/logo.jpg"
export default function Navbar ()
{
  return (
  <div>
    <div>
        {/* upper navbar*/}
        <div>
            <div>
                < div className="h-50 w-80 bg-slate-300" >
                    <a href="#">
                        <img src={Logo} alt="logo"  />
                    </a>
                   
                </div>
               
            </div>
        </div>
        <h1> We are in the community for community</h1>

    </div>
    <div>
        {/* lower navbar*/}
    </div>
    
  </div>
  );
  
}

