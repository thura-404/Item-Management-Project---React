import React, { useEffect, useState } from "react";

const PageBody = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/items");
      const responseData = await response.json();
      setResults(responseData.items);
    };

    fetchResults();
  }, []);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>

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
    </div>
  );
};

export default PageBody;
