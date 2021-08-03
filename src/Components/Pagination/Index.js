import React, { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/Product/ProductAction";

function Paginate() {
  const totalPage = 3;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleChangePage = (page) => {
    setPage(page);
  };
  const handleChangeNextPage = (page) => {
    if (page >= 1 && page < totalPage) {
      page = page + 1;
      setPage(page);
    } else {
      setPage(page);
    }
  };
  const handleChangePrevPage = (page) => {
    if (page > 1 && page <= totalPage) {
      page = page - 1;
      setPage(page);
    } else {
      setPage(1);
    }
  };
  useEffect(() => {
    fetchProduct(page)(dispatch);
    console.log("check", page);
  }, [page, dispatch]);
  return (
    <Container>
      <Pagination className="mb-3 justify-content-center">
        <Pagination.First
          disabled={page === 1}
          onClick={() => handleChangePage(1)}
        />
        <Pagination.Prev onClick={() => handleChangePrevPage(page)} />
        <Pagination.Item
          active={page === 1}
          onClick={() => handleChangePage(1)}
        >
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next onClick={() => handleChangeNextPage(page)} />
        <Pagination.Last
          disabled={page === totalPage}
          onClick={() => handleChangeNextPage(totalPage)}
        />
      </Pagination>
      <div>{page}</div>
    </Container>
  );
}

export default Paginate;
