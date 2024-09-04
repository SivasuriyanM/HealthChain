import React from "react";
import { FetchChain } from "../Context/context";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
function Login({ user, nameFun, addFun }) {
  const { setLoginStatus } = FetchChain();

  const { register, handleSubmit } = useForm();
  const handleClick = async (data) => {
    const contractName = await nameFun();
    const contractAdd = await addFun();
    const address = contractAdd.find((address) => address === data.address);

    const userName = contractName.find((names) => names === data.name);
    if (address && userName) setLoginStatus(user);
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleClick)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">{user} Login</Typography>
            <Typography variant="h6"></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Name" fullWidth {...register("name")} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Email" fullWidth {...register("address")} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Login;
