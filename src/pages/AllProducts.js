import React from "react";
import HookProductCard from "../Components/HookProductCard/Index";
import NavbarTiktak from "../Components/Navbar/Index";
import Paginate from "../Components/Pagination/Index";
function AllProducts() {
  return (
    <div>
      <NavbarTiktak />
      <br />
      <Paginate />
      <br />
      <HookProductCard />
    </div>
  );
}

export default AllProducts;
