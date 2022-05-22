import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";
import { Password } from '@mui/icons-material';
import { useState } from 'react'
import Select from "react-select"
import React from "react"
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';


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

  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const userName = register("userName", { required: true, minLength: 5 });

  const onSignIn = async event => {

    // event.preventDefault()

    // const res = await fetch(

    //   'https://hooks.zapier.com/hooks/catch/123456/abcde',
    //   {
    //     body: JSON.stringify({
    //       name: event.target.name.value
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   }
    // )

    console.log(gender)

    // const result = await res.json()

    // result.user => 'Ada Lovelace'
  }

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')


  const genderData = [
    { 'value': 'male', 'label': 'Male' },
    { 'value': 'female', 'label': 'Female' }
  ]

  const handleDropdown = (e) => {
    setGender(e.value)
  }

  // const handleGenderChange = (selectedGender, values) => {
  //   setGender(selectedGender);
  // };

  return (
    <div style={{ paddingLeft: "400px", paddingRight: "400px", paddingTop: "20px" }}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          gender: ''
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          gender: Yup.string()
            .required('Gender is required'),
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label for="gender">Gender</label>
              <Select
                  placeholder=""
                  value={gender}
                  onChange={selectedOption => {
                    setGender(selectedOption)
                  }}
                  isSearchable={true}
                  options={genderData}
                  name="gender"
                  isLoading={false}
                  className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}
                />
              <ErrorMessage name="gender" component="div" className="invalid-feedback" />

            </div>

            <div className="form-group" style={{ paddingTop: "20px" }}>
              <button type="submit" className="btn btn-primary mr-2">Register</button>
              <button type="reset" className="btn btn-secondary" style={{ marginLeft: "10px" }}>Reset</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}

export default SignIn