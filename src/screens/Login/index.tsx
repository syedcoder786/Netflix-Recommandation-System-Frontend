import { useNavigate } from "react-router-dom";
import NetflixLogo from "@/assets/images/Logonetflix.png";
import bgImage from "@/assets/images/netflix-background.jpg";

import squidGame from "@/assets/images/squid-game-netflix.jpg";
import knightAgent from "@/assets/images/knight-agent-netflix.jpg";
import bhoolBhulaiyaa from "@/assets/images/Bhool_Bhulaiyaa_3_netflix.jpg";
import luckyBhasker from "@/assets/images/lucky-bhasker-netflix.jpg";
import xoKitty from "@/assets/images/xo-kitty-netflix.jpg";
import mismatched from "@/assets/images/mismatched-netflix.jpg";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <nav className="z-2 w-[80%]">
          <img src={NetflixLogo} alt="netflix" />
          <div className="nav-container">
            <select className="selectlan max-md:hidden">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <button
              className="btn btn-sm cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign In
            </button>
          </div>
        </nav>

        <div className="content w-[40%] max-md:w-[90%]">
          <h1>Unlimited movies, TV shows and more</h1>
          <p id="info1">Starts at ₹149. Cancel at any time.</p>
          <p id="info2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex max-md:flex-col">
            <input
              type="text"
              value="test@test.com"
              placeholder="Email address"
            />
            <button
              className="btn-lg w-[35%] flex flex-col justify-center items-center max-md:w-[65%] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Get Started {">"}
            </button>
          </form>
        </div>
      </header>

      <main className="main-login">
        <div>
          <h2 className="text-2xl font-bold">Trending Now</h2>

          <div className="login-img-container">
            <img src={squidGame} alt="Squid Game" />
            <img src={knightAgent} alt="Knight Agent" />
            <img src={bhoolBhulaiyaa} alt="Bhool Bhulaiyaa 3" />
            <img src={luckyBhasker} alt="Lucky Bhasker" />
            <img src={xoKitty} alt="XO Kitty" />
            <img src={mismatched} alt="Mismatched" />
            <div className="slider">
              <div className="btn-slider">{">"}</div>
            </div>
          </div>
        </div>
      </main>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SignIn;
