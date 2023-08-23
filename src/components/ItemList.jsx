import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Stack, Skeleton } from "@chakra-ui/react";
import { TextField } from "@mui/material";

const ItemList = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/items");
      const responseData = await response.json();
      setResults(responseData.items);
      setLoading(false);
    };

    fetchResults();
  }, []);
  return (
    <Wrapper>
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Items List Page</h1>
      <p className="mb-4">
        Using Laravel API to search and fetch all the items.
      </p>

      <div className="row">
        <div className="col-2">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div className="col-2"></div>
        <div className="col-3"></div>
        <div className="col-3"></div>
        <div className="col-2"></div>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot>
              <tbody>
                {loading && (
                  <>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={6}>
                        <Stack>
                          <Skeleton height="20px" />
                        </Stack>
                      </td>
                    </tr>
                  </>
                )}
                {results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.item_id}</td>
                    <td>{result.item_code}</td>
                    <td>{result.item_name}</td>
                    <td>{result.description}</td>
                    <td>{result.created_at}</td>
                    <td>{result.updated_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ItemList;
