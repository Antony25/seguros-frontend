import { Alert, Box, Button, TextField, Typography } from "@mui/material";

import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import logo from '../../logo.svg';
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUserPassword } from "../slice/thunks";
import { useMemo } from "react";

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, control, handleSubmit, reset, trigger, setError, formState: { errors }, clearErrors, watch } = useForm({});
    const { status, errorMessage } = useSelector(state => state.Auth)
    const isAuth = useMemo(() => status === 'checking', [status])
    const onLogin = (event) => {
        console.log('onRegister')


        console.log(event)
        navigate('/auth/login', { replace: true });
    };

    const onSubmit = (data) => {
        console.log('onSumbit')
        console.log(data)
        dispatch(registerUserPassword(data));

    };
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, minWidth: 500 }}
            >
                <Grid

                    className="box-shadow"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    xs={4}

                    sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, minWidth: 400, maxWidth: 800 }}
                >
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        sx={{ mt: 4, mb: 4 }}
                    >
                        <img
                            alt="Logo Gentera"
                            src={logo}
                            style={{

                                height: 150,
                            }}


                        >
                        </img>
                    </Grid>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            width: "100%",
                            pl: 0,
                            pt: 0,
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            xs={12}

                        >
                            <Grid container
                                xs={12}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                sx={{ mt: 2, }}>
                                <TextField
                                    label="Nombre"
                                    type="text"
                                    placeholder="Juan"
                                    {...register(`name`, {required: "Campo requerido"})}
                                    helperText={errors[`name`]  ? errors[`name`].message : ''}
                                    error={!!errors[`name`] }
                                    fullWidth
                                />
                            </Grid>
                            <Grid container
                                xs={12}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                sx={{ mt: 2, }}>
                                <TextField
                                    label="correo"
                                    type="mail"
                                    placeholder="test@gmail.com"
                                    fullWidth
                                    {...register(`mail`, {required: "Campo requerido"})}
                                    helperText={errors[`mail`]  ? errors[`mail`].message : ''}
                                    error={!!errors[`mail`] }
                                />
                            </Grid>
                            <Grid container xs={12} sx={{ mt: 2 }}>
                                <TextField
                                    label="Contraseña"
                                    type="password"
                                    placeholder="**********"
                                    {...register(`password`, {required: "Campo requerido"})}
                                    helperText={errors[`password`]  ? errors[`password`].message : ''}
                                    error={!!errors[`password`] }
                                    fullWidth
                                />
                            </Grid>
                            <Grid container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                xs={12}
                                sx={{}}
                                display={!!errorMessage?'':'none'}
                                >
                                    <Alert severity="error" >{errorMessage}</Alert>


                                </Grid>
                            <Grid container
                                spacing={4}
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                xs={12}
                                sx={{ mb: 4, mt: 4 }
                                }>
                                <Grid container
                                    spacing={0}

                                    xs={12}
                                    sm={6}
                                    md={6}
                                    sx={{ m: 0 }}>
                                    <Button 
                                    disabled={isAuth}
                                    variant="contained" password fullWidth type="submit"> <LockOpenTwoToneIcon /> <Typography sx={{ ml: 1 }}>Registrar</Typography></Button>
                                </Grid>
                                <Grid container
                                    spacing={0}

                                    xs={12}
                                    sm={6}
                                    md={6}
                                    sx={{ m: 0 }}
                                >
                                    <Button 
                                        variant="contained" 
                                        fullWidth 
                                        onClick={onLogin}
                                        disabled={isAuth}
                                        >
                                            <AppRegistrationSharpIcon />
                                            <Typography 
                                            sx={{ ml: 1 }}>
                                                Volver
                                            </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}