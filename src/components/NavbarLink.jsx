import { Link } from "react-router-dom";
const NavbarLink = () => {
    return (
      <Link
        to="/FoodDelivery"
        className="text-white p-3 rounded-2xl transition-colors duration-200 bg-blue-700"
      >
        Go Back
      </Link>
    );
  };
  
  export default NavbarLink;
  