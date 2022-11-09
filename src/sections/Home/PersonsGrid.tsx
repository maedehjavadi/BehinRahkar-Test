import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "../../store";
import {
  personsSelector,
  setPersonStatus,
  setUsers,
} from "../../store/slices/persons";
import { Paper, Switch } from "@mui/material";
import { PersonType } from "../../types/main";

const PersonsGrid = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const dispatch = useDispatch();
  const selectorState = useSelector(personsSelector);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=2`).then((res) => {
      const persons = res.data;
      dispatch(setUsers({ persons: persons.data }));
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">First name</TableCell>
              <TableCell align="center">Last name</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectorState.persons.map((person: PersonType) => (
              <TableRow
                key={person.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{person.id}</TableCell>
                <TableCell align="center">{person.email}</TableCell>
                <TableCell align="center">{person.first_name}</TableCell>
                <TableCell align="center">{person.last_name}</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={checked[person.id]}
                    onChange={(e) => handleChange(e, person)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PersonsGrid;
