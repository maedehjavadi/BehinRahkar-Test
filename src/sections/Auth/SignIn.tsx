/* eslint-disable react-hooks/exhaustive-deps */
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { SignInDataType } from "../../types/auth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>();
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main", { replace: true });
    }
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<SignInDataType>({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
  });

  const onSubmit = async (data: SignInDataType) => {
    try {
      const { username, password } = data;
      await login(username, password);
      setTimeout(
        () =>
          navigate("/main", {
            replace: isAuthenticated ? true : false,
          }),
        1000
      );
    } catch (error: any) {
      setError("afterSubmit", {
        message: "Incorrect username or password",
      });
    }
  };

  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      {!isAuthenticated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={3}
            sx={{
              minWidth: "468px",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0px 0px 21px 0px rgba(0,0,0,0.75)",
              mt: 8,
            }}
          >
            <Typography
              variant="h5"
              color={(theme) => theme.palette.primary.dark}
              textAlign="center"
              fontFamily="Pacifico"
              textTransform={"capitalize"}
            >
              Sign in Form
            </Typography>
            {/* username Field */}
            <Stack spacing={0.5} justifyContent="space-between">
              <Typography>Username</Typography>
              <TextField
                helperText={
                  errors.username && (
                    <Typography
                      variant="body1"
                      color={(theme) => theme.palette.error.main}
                    >
                      {errors.username.message}
                    </Typography>
                  )
                }
                {...register("username", {
                  required: {
                    value: true,
                    message: "* This field is required",
                  },
                })}
                type="text"
                variant="standard"
              />
            </Stack>
            {/* password Field */}
            <Stack spacing={0.5} justifyContent="space-between">
              <Typography>Password</Typography>
              <TextField
                helperText={
                  errors.password && (
                    <Typography
                      variant="body1"
                      color={(theme) => theme.palette.error.main}
                    >
                      {errors.password.message}
                    </Typography>
                  )
                }
                {...register("password", {
                  required: {
                    value: true,
                    message: "* This field is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                type={!showPassword ? "password" : "text"}
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {!showPassword ? (
                          <RemoveRedEyeIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isValid || loading}
            >
              <Typography variant="button">Submit</Typography>
            </Button>
          </Stack>
        </form>
      )}
    </Stack>
  );
};

export default SignIn;
