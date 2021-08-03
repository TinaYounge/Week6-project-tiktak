import React from "react";
import { useParams } from "react-router-dom";
import NavbarTiktak from "../Components/Navbar/Index";
import DetailProduct from "../Components/SingleProduct/Index";

function SingleProduct() {
  const { id } = useParams();

  return (
    <div>
      <NavbarTiktak />
      <DetailProduct id={id} />
    </div>
  );
}

export default SingleProduct;
