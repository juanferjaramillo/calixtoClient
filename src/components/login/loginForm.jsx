import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser, getProdsUser } from "../../redux/actions";
import axios from "axios";

const validationSchema = Yup.object({
  email: Yup.string().required("The user is required."),
  password: Yup.string().required("The password is required."),
});

//======================Component===================
export default function LoginForm() {
  const [id, setId] = useState(localStorage.getItem("User"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
      email: id,
      password: "",
    };

//   useEffect(() => {
    //     setId(localStorage.getItem("User"));
    
//   }, []);

  const submitHandler = async ({ email, password }) => {

    try {
      dispatch(getAuthUser(email)); //brings the authUser to the state
      dispatch(getProdsUser(email)); //brings products and providers of that user to the state
      navigate("/products");
    } catch ({ response }) {
      alert("User or Password is Incorrect! Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        const { errors, touched, isSubmitting } = formik;
        return (
          <Form>
            <Box
              sx={{ display: "flex", flexDirection: "column", margin: "20px" }}
            >
              <Field
                sx={{ marginBottom: "20px" }}
                placeholder="E-mail"
                name="email"
                as={TextField}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <Field
                placeholder="Password"
                type="password"
                name="password"
                as={TextField}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <Typography
                onClick={() => {
                  navigate("/password-recovery");
                }}
                sx={{
                  cursor: "pointer",
                  marginBottom: "20px",
                  "&:hover": {
                    color: "blue",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot your password?
              </Typography>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Log In
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
}
