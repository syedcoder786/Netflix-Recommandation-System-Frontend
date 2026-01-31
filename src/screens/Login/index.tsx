import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <header
        style={{
          backgroundImage: `url(/src/assets/images/netflix-background.jpg)`,
        }}
      >
        <nav className="z-2 w-[80%]">
          <img src="/src/assets/images/Logonetflix.png" alt="netflix" />
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
            <img src="/src/assets/images/squid-game-netflix.jpg" alt="" />
            <img src="/src/assets/images/knight-agent-netflix.jpg" alt="" />
            <img
              src="/src/assets/images/Bhool_Bhulaiyaa_3_netflix.jpg"
              alt=""
            />
            <img src="/src/assets/images/lucky-bhasker-netflix.jpg" alt="" />
            <img src="/src/assets/images/xo-kitty-netflix.jpg" alt="" />
            <img src="/src/assets/images/mismatched-netflix.jpg" alt="" />
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
