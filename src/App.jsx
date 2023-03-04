import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button, CssBaseline } from '@mui/material';
import * as Yup from 'yup';

import Input from './Input';

function App() {
  return (
    <>
      <CssBaseline />
      <Formik
        initialValues={{ name: '', email: '', number: '' }}
        onSubmit={(e) => {
          console.log(e);
        }}
        validateOnBlur
        validationSchema={Yup.object({
          name: Yup.string().label('Name').max(15).required('Required'),
          number: Yup.string()
            .label('Phone number')
            .min(10)
            .max(12)
            .matches(/^\d+$/, 'Use only digits')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required')
        })}
      >
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
              '& > :not(style)': { m: 1 }
            }}
          >
            <Input name="name" label="Name" />
            <Input name="email" label="e-mail" variant="outlined" />
            <Input
              name="number"
              label="Phone-number"
              type="phone"
              InputLabelProps={{
                shrink: true
              }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  );
}

export default App;
