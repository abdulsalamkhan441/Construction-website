import { Link } from 'react-router-dom';

const NavLink = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-gray-300 transition-colors duration-200"
    >
      {text}
    </Link>
  );
};

export default NavLink;
