import { useState } from "react";
import { Outlet } from "react-router-dom";
import NetflixHeroModal from "./Home/NetflixHeroModal";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showHeroModal, setShowHeroModal] = useState(null);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} query={query} setQuery={setQuery} />
      <Outlet
        context={{
          open,
          setOpen,
          query,
          setQuery,
          showHeroModal,
          setShowHeroModal,
        }}
      />
      {showHeroModal && (
        <NetflixHeroModal
          movie={showHeroModal}
          setShowHeroModal={setShowHeroModal}
          onClose={() => setShowHeroModal(false)}
        />
      )}
    </>
  );
};

export default Layout;
