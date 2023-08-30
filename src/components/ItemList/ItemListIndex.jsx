import React, { useEffect, useState } from "react";
import Wrapper from "../../Wrapper/Wrapper";

import SearchForm from "./SearchForm";
import DataTable from "./DataTable";

const ItemList = () => {
  const [items, setItems] = useState([]); // store all the items.
  const [currentPage, setCurrentPage] = useState(1); // store current page for paginated data.
  const [loading, setLoading] = useState(true); // store loading state.
  const [formData, setFormData] = useState();

  // fetch all the items on page reload or on currentPage value change.
  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const parameters = new URLSearchParams(formData);
      const response = await fetch(
        `http://127.0.0.1:8000/api/search-items?${parameters}&&page=${currentPage}`
      );
      const responseData = await response.json();
      setItems(responseData.results);

      setLoading(false);
    };
    fetchResults();
  }, [currentPage, formData]);

  // change the currentPage value.
  const pageChangeHandler = (newPage) => {
    setCurrentPage(+newPage);
  };

  return (
    <Wrapper>
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Items List Page</h1>
      <p className="mb-4">
        Using Laravel API to search and fetch all the items.
      </p>

      <SearchForm searchItems={setFormData}></SearchForm>

      {/* <!-- DataTales Example --> */}
      <DataTable
        items={items}
        onPageChange={pageChangeHandler}
        loading={loading}
      ></DataTable>
    </Wrapper>
  );
};

export default ItemList;
