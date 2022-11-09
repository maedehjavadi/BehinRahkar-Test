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
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { SignInDataType } from "../../types/auth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>();
  const { login, isAuthenticated, loading } = useAuth();

  useLayoutEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const navigate = useNavigate();

  const defaultValues = {
    username: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInDataType>({
    defaultValues,
    mode: "onChange",
  });

  console.log(isAuthenticated);

  const onSubmit = async (data: SignInDataType) => {
    // console.log("data", data);
    console.log(isAuthenticated);

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
    <Stack
      // maxWidth={480}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      {!isAuthenticated && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={3}
            sx={{
              minWidth: "500px",
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
            >
              Sign in Form
            </Typography>
            <Stack spacing={1} justifyContent="flex-start">
              <Stack spacing={0.5} justifyContent="space-between">
                <Typography>Username</Typography>
                <TextField
                  {...register("username", { required: true })}
                  type="text"
                  variant="standard"
                />
              </Stack>
              {errors.username && (
                <Typography
                  variant="body1"
                  color={(theme) => theme.palette.error.main}
                >
                  * This field is required
                </Typography>
              )}
            </Stack>
            <Stack spacing={1} justifyContent="flex-start">
              <Stack spacing={0.5} justifyContent="space-between">
                <Typography>Password</Typography>
                <TextField
                  {...register("password", { required: true })}
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
              {errors.password && (
                <Typography
                  variant="body1"
                  color={(theme) => theme.palette.error.main}
                >
                  * This field is required
                </Typography>
              )}
            </Stack>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
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
