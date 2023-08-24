import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";

import SearchForm from "./SearchForm";
import DataTable from "./DataTable";

const ItemList = () => {
  const [searchResults, setSearchResults] = useState([]);

  const fetchSearchResults = async () => {
    const response = await fetch();
  };

  const searchHandler = () => {};

  return (
    <Wrapper>
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Items List Page</h1>
      <p className="mb-4">
        Using Laravel API to search and fetch all the items.
      </p>

      <SearchForm></SearchForm>

      {/* <!-- DataTales Example --> */}
      <DataTable></DataTable>
    </Wrapper>
  );
};

export default ItemList;
