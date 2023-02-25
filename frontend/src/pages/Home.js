import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./style.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.data);
  console.log(users);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete the user ?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <>
      <button className="button2" variant="contained" onClick={() => navigate("/addUser")}>
        Add User
      </button>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">{user.email}</StyledTableCell>
                    <StyledTableCell align="center">{user.contact}</StyledTableCell>
                    <StyledTableCell align="center">{user.address}</StyledTableCell>
                    <StyledTableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button
                          style={{ marginRight: "10px" }}
                          color="secondary"
                          onClick={() => {
                            handleDelete(user._id);
                          }}>
                          Delete
                        </Button>
                        <Button color="primary" onClick={() => navigate(`/editUser/${user._id}`)}>
                          Edit
                        </Button>
                      </ButtonGroup>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Home;
