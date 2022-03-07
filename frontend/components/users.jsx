import { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import myApi from "../api/api";
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUsers } from '../redux/slice/userSlice';

const Users = () => {

  const { users, loading, hasErrors } = useSelector(userSelector)
  const dispatch = useDispatch();

  /*
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const getData = async () => {
    const result = await myApi.getUserData()
    const data = await result.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])
  */

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (hasErrors) return <p>Error...</p>
  if (!users) return <p>No Users...</p>

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#1976d2',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#E0FFFF',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#ADD8E6',
      },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
    <div style={{marginTop: "50px"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((data, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="right">{data.email}</StyledTableCell>
              <StyledTableCell align="right">{data.age}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default Users