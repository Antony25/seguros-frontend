import { Alert, AppBar, Box, Button, Fab, IconButton, ListSubheader, Menu, MenuItem, Snackbar, Toolbar, Typography } from "@mui/material";
import * as React from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import List from '@mui/material/List';

import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEmployes } from "../slice/thunks";
import { logout } from "../../login/slice/authSlide";
import { CardInfo } from "../../global-ui/CardInfo";
import { AddInfo } from "../../global-ui/AddInfo";
import AddIcon from '@mui/icons-material/Add';
import { startForm } from "../slice/EmployesResponseSlice";
import { setEmployeUpdate } from "../slice/EmployesUpdateSlice";
import { UpdateInfo } from "../../global-ui/UpdateInfo ";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getEmployes())


  }, [])



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [create, setCreate] = React.useState(false);
  const { isLoading, options } = useSelector(state => state.Employes);
  const { isLoadingDelete, successDelete, errorMessageDelete, finishedDelete, visible } = useSelector(state => state.Employe);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logout({ errorMessage: "" }))
  };

  const addE = (event) => {
    dispatch(startForm())
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
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Empleados
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
            <Grid
              xs={12}
              sx={{ display: visible ? 'block' : 'none' }}
            >
              <AddInfo employ={true} />
            </Grid>
            <Grid
              xs={12}
              sx={{ display: false ? 'block' : 'none' }}
            >
              <UpdateInfo employ={true} />
            </Grid>
            <List

              sx={{ width: '100%', bgcolor: 'background.paper', display: !visible ? 'block' : 'none' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader  sx={{zIndex:1000}}component="div" id="nested-list-subheader">
                  Listado de Empleados            
                  <Fab variant="extended" color="success"
                  sx={{m:1}}
                  onClick={addE}
                  >
                    <AddIcon sx={{ mr: 1 }} />
                    Agregar Empleado
                  </Fab>
                </ListSubheader>
              }
            >

              {options.map((option, index) => {
                return (

                  <CardInfo key={index} info={option} employ={true} />

                );

              })}

            </List>

          </Grid>

        </Grid>
      </Box>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={finishedDelete}
          //onClose={handleClose}
          message=""
          autoHideDuration={600}


        >
          <Alert sx={{ width: '100%' }} severity={successDelete ? "success" : "error"}>{errorMessageDelete}</Alert>
        </Snackbar>
      </Box>

    </>
  )
}