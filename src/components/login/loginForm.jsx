import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuthUser, getProdsUser } from "../../redux/actions";
import { Toaster, toast } from 'sonner';

const validationSchema = Yup.object({
  email: Yup.string().required("Por favor ingrese su indentificación"),
  password: Yup.string().required("Por favor ingrese su contraseña"),
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

  const submitHandler = async ({ email, password }) => {
    try {
      dispatch(getAuthUser(email)); //brings the authUser to the state
      dispatch(getProdsUser(email)); //brings products and providers of that user to the state
      navigate("/products");
    } catch ({ response }) {
      toast("La identificación o la contraseña son incorrectos 😳")
      //alert("La identificación o la contraseña son incorrectos 😳");
    }
  };

  return ( 
    <Box>
      <Toaster />
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
                placeholder="identificación"
                name="email"
                as={TextField}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <Field
                placeholder="Contraseña"
                type="password"
                name="password"
                as={TextField}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
              {/* <Typography
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
              </Typography> */}
              <Button type="submit" variant="contained" disabled={isSubmitting}
              sx={{mt: 3, backgroundColor: "purple"}}
              >
                Ingresar
              </Button>
            </Box>
          </Form>
        );
      }}
    </Formik>
    </Box>
  );
}
