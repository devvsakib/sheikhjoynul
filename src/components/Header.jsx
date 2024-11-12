import { Link } from 'react-router-dom';
import { images } from '../config/images';

function Header() {
  return (
    <header className="w-full fixed top-5 z-[999]">
      <nav className="p-4 w-[800px] rounded-full shadow-black/10 px-5 shadow-2xl mx-auto backdrop-blur-sm flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img src={images.logo} className='rounded-full w-10'/>
          {/* <div className="text-2xl font-bold">Dr. Joynul Abadin</div> */}
        </div>
        <ul className="flex gap-4"
          style={{
            filter: "invert"
          }}
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/lectures">Lectures</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
