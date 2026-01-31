import NetflixLogo from "@/assets/images/Logonetflix.png";
import Search from "../components/Search";
import UserProfileDropdown from "./UserProfileDropdown";
import { useNavigate } from "react-router-dom";

const Navbar = ({ open, setOpen, query, setQuery }) => {
  const navigate = useNavigate();

  return (
    <nav className="z-5 w-[80%]">
      <img
        src={NetflixLogo}
        alt="netflix"
        className={open ? "max-md:hidden cursor-pointer" : ""}
        onClick={() => navigate("/")}
      />

      <div className="nav-container">
        <Search
          open={open}
          setOpen={setOpen}
          query={query}
          setQuery={setQuery}
        />
        <UserProfileDropdown />
      </div>
    </nav>
  );
};

export default Navbar;
