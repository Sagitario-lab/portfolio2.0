import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Contact.css";

export const Contact = () => {

  const sendEmail = (object) => {
    emailjs.send(
      "service_gtold88",
      "template_539ff3q",
      object,
      "PTT9fHfB9E9GhZ4j7"
    );
  };

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    email: yup.string("Enter your email").email().required("Email is required"),
    message: yup.string("Enter your message").required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendEmail(values);
      formik.resetForm();
    },
  });

  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={10}
      className='contact-container'
    >
      <form onSubmit={formik.handleSubmit} className='form-bg'>
        <h2>Contact Me!</h2>
        <TextField
          fullWidth
          id='name'
          name='name'
          label='Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className='textField'
        />

        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className='textField'
        />

        <TextField
          fullWidth
          id='message'
          name='message'
          label='Message'
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          className='textField'
        />

        <Button variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </Grid>
  );
};
