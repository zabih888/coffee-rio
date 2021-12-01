import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { ErrorHelper } from "../Global/ErrorHelper";

import { Form } from "./Signup_Login.style";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const submitForm = (data) => console.log(data);
  const submitForm = () => {};

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Form>
        <h2>ورود</h2>
        <Box component="form" onSubmit={handleSubmit(submitForm)}>
          <TextField
            className="input"
            error={errors.firstName ? true : false}
            id="firstName"
            label="نام"
            variant="outlined"
            {...register("firstName", {
              required: "نام کاربری نیاز است",
              minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
            })}
          />
          {errors.firstName && (
            <ErrorHelper>{errors.firstName.message}</ErrorHelper>
          )}

          <TextField
            className="input"
            error={errors.email ? true : false}
            id="email"
            label="ایمیل"
            type="email"
            variant="outlined"
            {...register("email", { required: "ایمیل نیاز است" })}
          />
          {errors.email && <ErrorHelper>{errors.email.message}</ErrorHelper>}

          <Button
            style={{ fontSize: "18px", marginTop: "1rem" }}
            variant="contained"
            fullWidth
            type="submit"
            disabled={
              errors.firstName ||
              errors.lastName ||
              errors.phoneNumber ||
              errors.email ||
              errors.password
                ? true
                : false
            }
          >
            ثبت نام
          </Button>
          <Link to="/signup">ثبت نام نکرده اید ؟</Link>
        </Box>
      </Form>
    </div>
  );
};

export default Login;
