import { AppBar, Avatar, Box, Button, FormControlLabel, FormGroup, IconButton, ListItemAvatar, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, Switch, Toolbar, Typography } from "@mui/material";
import * as React from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAccounts } from "../slice/thunks";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { logout } from "../../login/slice/authSlide";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export const Accounts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { uuid } = state;
  React.useEffect(() => {
    console.log(uuid)
    dispatch(getAccounts(uuid))


  }, [])



  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoading, options } = useSelector(state => state.Accounts);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logout({errorMessage:""}))
  };

  const toDetail = (event, balance, link, id) => {
    //const {success, errorMesage, data} =  getLinkUUIDService(name);

        console.log(balance)
        navigate('/details', {state:{balance:balance, link:link, account:id}})
      
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
                sx={{ mr: 2 }}
                onClick={Back}
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
            sx={{ backgroundColor: 'primary.main', minWidth: 500 }}
          >
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Cuentas
                </ListSubheader>
              }
            >
              {options.map((option) => {
                return (

                  <ListItemButton onClick={(e)=>toDetail(e, option.balance, option.link, option.id) }>
                    <ListItemAvatar>
                      <AccountBalanceWalletIcon />
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
                        ><Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Nombre: </Typography><ListItemText primary={option.name} /></Grid>
                        <Grid container
                          direction="row"
                          alignItems="center"
                          justifyContent="start"
                          xs={6}
                          md={4}><Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Tipo: </Typography><ListItemText primary={option.type} /></Grid>

                        <Grid container
                          direction="row"
                          alignItems="center"
                          justifyContent="start"
                          xs={6}
                          md={4}><Typography variant="body1" sx={{ fontWeight: "bold", pr: 1 }}>Categoria: </Typography><ListItemText primary={option.category} /></Grid>

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
                          xs={12}

                        ><Typography variant="body1" sx={{ fontWeight: "bold", pr: 2 }}>{option.public_identification_name}: </Typography><ListItemText primary={option.public_identification_value} /></Grid>


                      </Grid>
                    </Grid>
                  </ListItemButton>
                );

              })}

            </List>
          </Grid>

        </Grid>
      </Box>

    </>
  )
}