import "./assets/style/header.css"
function Header(){

  return(
    <header className="bg-white">

      
      <nav className="flex justify-center items-center w-[96%] mx-auto py-4">
        <div>
          <img className="w-16" src="" alt="logo" />
        </div>

        <div className="md:static md:min-h-fit absolute md:justify-center bg-white min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1.6vw] gap-8">
          <li>
            <a className="hover:text-gray-500" href="">Home</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">Home</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">Home</a>
          </li>          
          <li>
            <a className="hover:text-gray-500" href="">Home</a>
          </li>
        </ul>
        </div>
        
      <div className="w-[10%]">
        <button className="w-[90%] bg-black hover:bg-amber-50 text-white py-2 px-4 rounded-full">Get Started</button>
      </div>
      </nav>

      
    </header>
  );
}

export default Header