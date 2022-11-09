import { Box, Button, Paper, styled, Switch, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../../store";
import {
  personsSelector,
  setPersonStatus,
  setUsers,
} from "../../../../store/slices/persons";
import { Rank_COLORS } from "../../../../types/mockData";
import { PersonType } from "../../../../types/main";
import GridHead from "./GridHead";
import BackDropLoading from "../../../../components/BackDropLoading";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PersonsContent = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const selectorState = useSelector(personsSelector);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://reqres.in/api/users?page=2`).then((res) => {
      const persons = res.data;
      dispatch(setUsers({ persons: persons.data }));
      setLoading(false);
    });
  }, [dispatch]);

  const handleChange = (event: any, person: PersonType) => {
    setChecked({ ...checked, [person.id]: event.target.checked[person.id] });
    dispatch(
      setPersonStatus({
        ...person,
        status: event.target.checked as boolean,
      })
    );
  };

  return (
    <>
      <Button sx={{ my: 2, textTransform: "capitalize" }}>
        <Typography variant="button" textTransform={"capitalize"}>
          + New
        </Typography>{" "}
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <GridHead />
          {loading ? (
            <BackDropLoading open={loading} />
          ) : (
            <TableBody>
              {selectorState.persons.map(
                (person: PersonType, index: number) => (
                  <StyledTableRow key={person.id}>
                    <TableCell sx={{ color: "info.main" }} align="center">
                      {person.id}
                    </TableCell>
                    <TableCell align="center">{person.email}</TableCell>
                    <TableCell align="center">{person.first_name}</TableCell>
                    <TableCell align="center">{person.last_name}</TableCell>
                    <TableCell align="center">
                      <Box
                        key={index}
                        sx={{
                          bgcolor: `${Rank_COLORS[index].value}`,
                          py: 1,
                          borderRadius: 2,
                        }}
                      >
                        {Rank_COLORS[index].type}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Switch
                        checked={
                          checked[person.id] ||
                          (selectorState.persons[index].status as boolean)
                        }
                        onChange={(e) => handleChange(e, person)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </TableCell>
                  </StyledTableRow>
                )
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default PersonsContent;
