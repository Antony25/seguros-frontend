import { Alert, AppBar, Avatar, Box, Button, CircularProgress, FormControlLabel, FormGroup, IconButton, ListItemAvatar, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, Snackbar, Switch, Toolbar, Typography } from "@mui/material";
import * as React from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { AccountCircle } from "@mui/icons-material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetails } from "../slice/thunks";

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { restartInfo } from "../slice/DetailsSlice";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { logout } from "../../login/slice/authSlide";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { balance, link, account } = state;
  React.useEffect(() => {
    console.log(balance)
    dispatch(restartInfo())
    dispatch(getDetails(link, account))



  }, [])



  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoading, options, success, finished } = useSelector(state => state.Details);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logout({errorMessage:""}))
  };

  const Back = (event) => {
    navigate(-1)
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>

        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={Back}
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                WPA
              </Typography>

              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
               
                  <MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
                </Menu>
              </div>

            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Grid container


          xs={12}
          alignContent="center"
          alignItems="top"
          direction="row"
          justifyContent="center"
          sx={{ pb: 4 }}
          spacing={0}
        >
          <Grid
            container
            xs={12}
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="top"
            sx={{ minWidth: 500 }}
          >

            <Card sx={{ minWidth: 275, width: "95%", m: 5 }}>
              <CardContent>

                <Typography variant="h4" component="div">
                  Saldo
                </Typography>
                <Typography variant="h6" >
                  {balance?.current}
                </Typography>
                <Typography variant="h4" component="div">
                  Disponible
                </Typography>
                <Typography variant="h6" >
                  {balance?.available}
                </Typography>
              </CardContent>

            </Card>
            <Box sx={{ display: isLoading ? 'flex' : 'none', pt: 10 }} >
              <CircularProgress size={200} />
            </Box>

            <List
              sx={{ width: '100%', bgcolor: 'background.paper', display: !isLoading ? '' : 'none' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Movimientos
                </ListSubheader>
              }
            >
              {options.map((option) => {
                return (
                  <>

                    <ListItemButton key={option.id}>
                      <ListItemAvatar>
                        <AttachMoneyIcon />
                      </ListItemAvatar>
                      <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="start"
                        xs={12}
                        sx={{ mb: 0, mt: 0 }
                        }>
                        <Grid container
                          spacing={0}
                          direction="row"
                          alignItems="center"
                          justifyContent="start"
                          xs={12}
                          sx={{ mb: 0, mt: 0 }
                          }>
                          <Grid container
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            xs={6}
                            md={4}
                          ><Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Descripcion: </Typography><ListItemText primary={option.description} /></Grid>
                          <Grid container
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            xs={4}
                            md={2}>
                            <Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Estatus: </Typography>
                            <Typography color={option.status === 'PENDING' ? "error" : "green"} variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>{option.status} </Typography>
                          </Grid>

                          <Grid container
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            xs={4}
                            md={2}><Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Categoria: </Typography><ListItemText primary={option.category} /></Grid>

                        </Grid>
                        <Grid container
                          spacing={0}
                          direction="row"
                          alignItems="center"
                          justifyContent="start"
                          xs={12}
                          sx={{ mb: 0, mt: 0 }
                          }>
                          <Grid container
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            xs={4}

                          ><Typography variant="body1" sx={{ fontWeight: "bold", pr: 2 }}>Monto: </Typography><ListItemText primary={option.amount} /></Grid>

                          <Grid container
                            direction="row"
                            alignItems="center"
                            justifyContent="start"
                            xs={4}

                          ><Typography variant="body1" sx={{ fontWeight: "bold", pr: 2 }}>Fecha: </Typography><ListItemText primary={option.created_at} /></Grid>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                  </>
                );

              })}

            </List>
          </Grid>

        </Grid>
      </Box>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={options.length < 1 && finished}
          //onClose={handleClose}
          message=""
          autoHideDuration={6000}


        >
          <Alert sx={{ width: '100%' }} severity={"error"}>No hay registos</Alert>
        </Snackbar>
      </Box>

    </>
  )
}