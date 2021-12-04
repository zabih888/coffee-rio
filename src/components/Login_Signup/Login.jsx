import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ErrorHelper } from "../Global/ErrorHelper";
import { Form } from "./Signup_Login.style";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../../context/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const Login = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const setAuth = useAuthActions();
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);

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
      const { data } = await loginUser(values);
      setAuth(data);
      navigate(redirect)
    } catch (error) {
      console.log(error.response.data.massage);
      setError(error.response.data.massage);
    }
  };

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
            ورود
          </Button>
          {error ? <Alert color="error">{error}</Alert> : undefined}
          <Link to={`/signup?redirect=${redirect}`}>ثبت نام نکرده اید ؟</Link>
        </Box>
      </Form>
    </div>
  );
};

export default Login;
