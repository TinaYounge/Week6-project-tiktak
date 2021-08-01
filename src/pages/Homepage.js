import React from "react";
import SearchBox from "../Components/Searchbox/Index";
import HookProductCard from "../Components/HookProductCard/Index";
import NavbarTiktak from "../Components/Navbar/Index";

function Homepage() {
  return (
    <>
      <NavbarTiktak />
      <br />
      <SearchBox />
      <HookProductCard />
    </>
  );
}

export default Homepage;
