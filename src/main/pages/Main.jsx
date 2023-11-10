import { AppBar, Avatar, Box, IconButton, ListItemAvatar, ListItemButton, ListSubheader, Menu, MenuItem,  Toolbar, Typography } from "@mui/material";
import * as React from 'react';

import Grid from "@mui/material/Unstable_Grid2";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { AccountCircle } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { getLinkUUIDService } from "../api/providers";
import { useNavigate } from "react-router-dom";
import { getEmployes } from "../slice/thunks";
import { logout } from "../../login/slice/authSlide";
import { CardInfo } from "../../global-ui/CardInfo";

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
  const { isLoading, options } = useSelector(state => state.Employes);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(logout({errorMessage:""}))
  };
  const toAccounts = (event, name) => {
    console.log(name)
  
    getLinkUUIDService(name).then(({data, success, errorMessage})=> {
      if (success && data.length>0){
        console.log(data)
        navigate('/accounts', {state:{uuid:data[0].id}})
      }
      }
      
    )
    console.log("Post")
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
            sx={{  backgroundColor: 'primary.main', minWidth: 500 }}
          >
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Listado de Empleados
                </ListSubheader>
              }
            >
              {options.map((option) => {
                return (

                  <CardInfo description={option.nombre+' '+ option.apellidos}/>

                );

              })}
  
            </List>
          </Grid>

        </Grid>
      </Box>

    </>
  )
}