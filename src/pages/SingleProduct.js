import React from "react";
import { useParams } from "react-router-dom";
import DetailProduct from "../Components/SingleProduct/Index";

function SingleProduct() {
  const { id } = useParams();

  return (
    <div>
      <DetailProduct id={id} />
    </div>
  );
}

export default SingleProduct;
