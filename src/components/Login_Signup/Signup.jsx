import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Alert,
} from "@mui/material";
import { ErrorHelper } from "../Global/ErrorHelper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form } from "./Signup_Login.style";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/signupService";

const Signup = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (values) => {
    try {
      const { data } = await signupUser(values);
      console.log(values);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Form>
        <h2>ثبت نام</h2>
        <Box component="form" onSubmit={handleSubmit(submitForm)}>
          <TextField
            name="firstName"
            className="input"
            error={errors.firstName ? true : false}
            id="firstName"
            label="نام"
            variant="outlined"
            {...register("firstName", {
              required: "نام نیاز است",
              minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
            })}
          />
          {errors.firstName && (
            <ErrorHelper>{errors.firstName.message}</ErrorHelper>
          )}

          <TextField
            name="lastName"
            className="input"
            error={errors.lastName ? true : false}
            id="lastName"
            label="نام خانوادگی"
            variant="outlined"
            {...register("lastName", {
              required: "نام خانوادگی نیاز است",
              minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
            })}
          />
          {errors.lastName && (
            <ErrorHelper>{errors.lastName.message}</ErrorHelper>
          )}

          <TextField
            name="userName"
            className="input"
            error={errors.userName ? true : false}
            id="userName"
            label="نام کاربری"
            variant="outlined"
            {...register("userName", {
              required: "نام کاربری نیاز است",
              minLength: { value: 3, message: "حداقل 3 کاراکتر وارد کنید" },
            })}
          />
          {errors.userName && (
            <ErrorHelper>{errors.userName.message}</ErrorHelper>
          )}

          <TextField
            name="email"
            className="input"
            error={errors.email ? true : false}
            id="email"
            label="ایمیل"
            type="email"
            variant="outlined"
            {...register("email", { required: "ایمیل نیاز است" })}
          />
          {errors.email && <ErrorHelper>{errors.email.message}</ErrorHelper>}

          <TextField
            name="phoneNumber"
            className="input"
            error={errors.phoneNumber ? true : false}
            id="phoneNumber"
            label="تلفن"
            variant="outlined"
            type="tel"
            {...register("phoneNumber", { required: "شماره تلفن نیاز است" })}
          />
          {errors.phoneNumber && (
            <ErrorHelper>{errors.phoneNumber.message}</ErrorHelper>
          )}

          <FormControl
            className="input"
            variant="outlined"
            error={errors.password ? true : false}
          >
            <InputLabel htmlFor="password">رمز کاربری</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="رمز کاربری"
              {...register("password", { required: "رمز کابری نیاز است" })}
            />
            {errors.password && (
              <ErrorHelper>{errors.password.message}</ErrorHelper>
            )}
          </FormControl>

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
          {error && <Alert color="error">{error}</Alert>}
          <Link to="/login">قبلا ثبت نام کرده اید</Link>
        </Box>
      </Form>
    </div>
  );
};

export default Signup;
