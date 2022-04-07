import { useEffect } from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUsers, deleteUsers } from '../redux/slice/userSlice';
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import styles from '../styles/Users.module.scss'

const Users = () => {

  const { getUserData, getUserLoading, getUserError } = useSelector(userSelector)
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

  const handleDelete = (data) => {
      dispatch(deleteUsers(data))
      dispatch(fetchUsers())
  }

  if (getUserLoading) return <p>Loading...</p>
  if (getUserError) return <p>Error...</p>
  if (!getUserData) return <p>No Users...</p>

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
      backgroundColor: '#FFFFFF',
    },
    '&:nth-of-type(even)': {
      backgroundColor: '#e6f2ff',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <div className={styles.root}>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Age</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getUserData.map((data, key) => (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {data.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{data.email}</StyledTableCell>
                    <StyledTableCell align="right">{data.age}</StyledTableCell>

                    <StyledTableCell align="right">
                      <Button className={styles.btnGap}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(data)}>
                        Delete
                      </Button>
                    </StyledTableCell>

                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>


        <div className={styles.btnAdd}>
          <Link href={'/userForm'}>
            <Button>
              Add User
            </Button>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Users