/*
Header component for traversing
*/
const Header = (props:any) => {
    return (
      <nav className="absolute h-12">
        <ul className="flex justify-between items-center p-8 mr-4">
          <li className=""></li>
          <ul className="flex font-semibold text-md space-x-6">
            <li><a onClick={(e) => props.behaviour(e)} href="#about" className="text-slate-400 hover:text-white transition-all">About</a></li>
            <li><a onClick={(e) => props.behaviour(e)} href="#portfolio" className="text-slate-400 hover:text-white transition-all">Portfolio</a></li>
            <li><a onClick={(e) => props.behaviour(e)} href="#experience" className="text-slate-400 hover:text-white transition-all">Work Experience</a></li>
            <li><a onClick={(e) => props.behaviour(e)} href="#contact" className="text-slate-400 hover:text-white transition-all">Contact</a></li>
          </ul>
        </ul>
      </nav>
    );
  };

export default Header