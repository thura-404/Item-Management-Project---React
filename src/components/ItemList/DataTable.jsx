import React, { useEffect, useState } from "react";

//For table from Materiral UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// For Skeleton from Material UI
import Skeleton from "@mui/material/Skeleton";

// For pagination from Material UI
import { Pagination } from "@mui/material";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const DataTable = ({ items: data, onPageChange, loading }) => {
  let items = null;
  let lastPage = null;

  console.log("data", data);

  if (data.data) {
    items = data.data; // get all the items.
    lastPage = +data.last_page; // get the last page
  }

  // function to change the current page on pagination (underscore recieve an event function which we won't be using)
  const pageChangeHandler = (_, newPage) => {
    onPageChange(newPage);
    console.log("new Page: ", newPage);
  };

  let contents = [];
  for (let index = 0; index < 11; index++) {
    contents.push(
      <TableRow
        key={index}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" colSpan={7}>
          <Skeleton animation="wave" />
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary w-75">Items</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Code</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading && contents.map((content) => content)}
                {!loading &&
                  items.map((result, no) => (
                    <TableRow
                      key={result.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {no + 1}
                      </TableCell>
                      <TableCell align="right">{result.item_id}</TableCell>
                      <TableCell align="right">{result.item_code}</TableCell>
                      <TableCell align="right">{result.item_name}</TableCell>
                      <TableCell align="right">
                        {truncateText(result.description, 50)}
                      </TableCell>
                      <TableCell align="right">
                        {result.deleted_at ? "Inactive" : "Active"}
                      </TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {lastPage && (
            <Pagination
              count={lastPage}
              shape="rounded"
              className="mt-3 float-right"
              onChange={pageChangeHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
