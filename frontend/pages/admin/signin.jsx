import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";
import { Password } from '@mui/icons-material';
import { InputLabel } from '@mui/material';
import { useState } from 'react'
import Select from "react-select"
import React from "react"
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';


const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const SignIn = () => {


  const initialValues = { userName: '', password: '', gender: '' }
  const [formValues, setFormValues] = useState(initialValues)

  const gender = ['', 'Male', 'Female']

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      gender: gender[0]
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .label('User Name')
        .required(),
      password: Yup.string()
        .label('Password')
        .required(),
      gender: Yup.string()
        .label('Gender')
        .required()
    }),
    onSubmit: function (values) {
      setFormValues(values)
    },

  })

  console.log('12', formValues)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>

            <TextField
              type="text" name="userName" id="userName"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.userName && formik.errors.userName ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName && (
              <div style={{ color: 'red' }}>{formik.errors.userName}</div>
            )}

            <TextField
              type="text" name="password" id="password"
              className={`block w-full rounded border py-1 px-2 ${formik.touched.password && formik.errors.password ? 'border-red-400' : 'border-gray-300'}`}
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            )}

            <div>
              <select name="gender" id="gender"
                className={`block w-full rounded border py-1 px-2 ${formik.touched.gender && formik.errors.gender ? 'border-red-400' : 'border-gray-300'}`}
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} >
                {gender.map((gender, index) => (
                  <option value={gender} key={index}>{gender}</option>
                ))}
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <div style={{ color: 'red' }}>{formik.errors.gender}</div>
              )}
            </div>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn