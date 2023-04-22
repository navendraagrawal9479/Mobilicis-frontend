import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

const TableComponent = ({ endPoint, reqBody, columns }) => {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(10);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const fetchData = async (page) => {
    setIsLoading(true);
    const response = await fetch(`${BASE_URL}/${endPoint}?page=${page}`, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    setUsers(data?.users || data?.cities);
    setRowsPerPage(Number(data?.metaData?.items_per_page));
    setTotalItems(Number(data?.metaData?.totalItems));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(1);
  }, []);
  console.log(endPoint, users);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ minHeight: "80vh" }}>
        {isLoading ? (
          <Box
            width={"100%"}
            m='1rem auto'
            display='flex'
            alignItems={"center"}
            justifyContent={"center"}
            height={'80vh'}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {users?.map((user) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={user._id}>
                    {columns.map((column) => {
                      const value = user[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 550,
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {typeof value === "number"
                            ? value.toFixed(2)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component='div'
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={(event, newPage) => {
          setPage(newPage + 1);
          fetchData(newPage + 1);
        }}
        onRowsPerPageChange={() => {}}
      />
    </Paper>
  );
};

export default TableComponent;
