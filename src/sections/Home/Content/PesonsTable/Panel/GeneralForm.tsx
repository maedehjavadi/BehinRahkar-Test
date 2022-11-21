import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { GenderEnum, PersonGeneralData } from "../../../../../types/main";

const GeneralForm: FC<{
  setData: React.Dispatch<React.SetStateAction<PersonGeneralData | undefined>>;
  data: PersonGeneralData | undefined;
}> = (props) => {
  const { data, setData } = props;

  const methods = useForm<PersonGeneralData>({
    mode: "onChange",
    defaultValues: {
      ...data,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = async (data: PersonGeneralData) => {
    setData((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Stack
            spacing={1.5}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography variant="subtitle1">Name</Typography>
            <TextField
              fullWidth
              label="Name*"
              helperText={
                errors.name && (
                  <Typography
                    variant="body1"
                    color={(theme) => theme.palette.error.main}
                  >
                    {errors.name.message}
                  </Typography>
                )
              }
              {...register("name", {
                required: true,
                pattern: {
                  message: "Please enter valid name",
                  value:
                    /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
                },
              })}
              type="text"
            />
          </Stack>
          <Stack
            spacing={1.5}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1">Email</Typography>
            <TextField
              fullWidth
              label="Email*"
              helperText={
                errors.email && (
                  <Typography
                    variant="body1"
                    color={(theme) => theme.palette.error.main}
                  >
                    {errors.email.message}
                  </Typography>
                )
              }
              {...register("email", {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="text"
            />
          </Stack>
          <Stack
            spacing={1.5}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1">Gender</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender*</InputLabel>
              <Select
                {...register("gender", { required: true })}
                value={data?.gender}
                label="Gender"
                placeholder="select your gender"
                defaultValue=""
              >
                {Object.keys(GenderEnum).map((gnd, i) => (
                  <MenuItem key={i + 1} value={gnd || ""}>
                    {gnd}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={1.5} direction="row" justifyContent="space-between">
            <TextField
              fullWidth
              label="Description"
              placeholder="write some description..."
              multiline
              minRows={5}
              maxRows={10}
              {...register("description")}
            />
          </Stack>
          <Button type="submit" variant="contained" disabled={!isValid}>
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default GeneralForm;
