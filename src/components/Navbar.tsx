import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar h-16 bg-base-100">
      <ul className="menu menu-horizontal space-x-4">
        <li>
        <Link href="/" className="hover:bg-primary hover:text-white h-16 flex rounded-none hover:text-lg transition-all duration-200">Home</Link>
        </li>
        <li>
        <Link href="/" className="hover:bg-primary hover:text-white">Home</Link>
        </li>
        <li>
        <Link href="/" className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white">Home</Link>
        </li>
        <li>
        <Link href="/" className="hover:scale-105 transition-transform duration-200 hover:bg-primary hover:text-white">Home</Link>
        </li>
        <li>
        <Link href="/" className="hover:shadow-lg hover:bg-primary hover:text-white p-2 rounded-md transition-shadow">Home</Link>
        </li>

        {/* Underline options */}
        <li>
        <Link href="/" className="hover:bg-transparent after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Home</Link>
        </li>
        
        
        
        

        <li>
          <Link href="/resume" className="hover:text-primary">Resume</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
