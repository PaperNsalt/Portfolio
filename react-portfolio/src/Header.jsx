import "./assets/style/header.css"
import logo from './assets/vector/IamJem.svg'
function Header(){

  return(
    <header className="mb-10">

      
      <nav className="flex justify-between items-center w-[96%] py-4 px-2 ">
        <div>
          <img className="w-10" src={logo} alt="logo" />
        </div>

        <div className="px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1.6vw] gap-8 text-[1.4rem]">
          <li>
            <a className="hover:text-gray-500" href="">01.ABOUT ME</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">02.SKILLS</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">03.PROJECTS</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">04.EMAIL</a>
          </li>
        </ul>
        </div>
      </nav>

      
    </header>
  );
}

export default Header