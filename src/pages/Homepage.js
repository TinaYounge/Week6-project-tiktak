import React from "react";
import SearchBox from "../Components/Searchbox/Index";
import HookProductCard from "../Components/HookProductCard/Index";
import NavbarTiktak from "../Components/Navbar/Index";
import Paginate from "../Components/Pagination/Index";

function Homepage() {
  return (
    <>
      <NavbarTiktak />
      <br />
      <SearchBox />
      <Paginate />
      <HookProductCard />
    </>
  );
}

export default Homepage;
