import Grid from '@mui/material/Unstable_Grid2'; // Grid version 1

import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { useNavigate } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { addBeneficiary, addEmploye } from '../main/slice/thunks';
import { endForm } from '../main/slice/EmployesResponseSlice';
import { endFormB } from '../main/slice/BeneficiarieResponseSlice';
import { useEffect } from 'react';


export const UpdateInfo = ({ employ, empleado  }) => {

    useEffect(() => {
        console.log(item)
    
    
      }, [])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleToPath = (event, toPath) => {
        navigate(toPath, { state: { reset: true }, replace: false });

    }
    const { item } = useSelector(state => state.EmployeUpdate);


    const { register, control, handleSubmit, reset, trigger, setError, formState: { errors }, clearErrors, watch } = useForm({});
    const onSubmit = (data) => {
        console.log('onSumbit')
        if (employ) {
            dispatch(addEmploye(data))
            
        } else {
            data = { ...data, empleado }
            dispatch(addBeneficiary(data))
        }
        console.log(data)

    };
    const cancel = (event) => {
        
        employ?dispatch(endForm()):dispatch(endFormB())
      };

    return (
        <>
            <Grid2
                container
                sx={{
                    width: '100%',
                }} 
                alignItems={"center"}
                justifyContent={"center"}
                justify="center"

            >

                <Card
                    orientation="horizontal"

                    sx={{
                        width: '80%',
                        m: 5,

                    }}
                >
                    <Box
                        component="form"
                        orientation="horizontal"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            width: "100%",
                            pl: 0,
                            pt: 0,
                        }}
                        noValidate
                        autoComplete="on"
                    >

                        <CardContent>
                            <Grid2 
                                container
                                orientation="horizontal"
                                xs={12}
                                spacing={2}
                            >
                                <Grid2
                                xs={6}
                                
                                >
                                <TextField
                                    fullWidth
                                    sx={{ mr: 1 }}
                                    size="small"
                                    variant='filled'
                                    value={item?.nombre}
                                    label="Nombre"
                                    {...register(`nombre`, { required: "Campo requerido" })}
                                    helperText={errors[`nombre`] ? errors[`nombre`].message : ''}
                                    error={!!errors[`nombre`]}
                                />
                                </Grid2>
                                <Grid2
                                xs={6}
                                
                                >
                                <TextField
                                fullWidth
                                    size="small"
                                    variant='filled'
                                    label="Apellidos"
                                    {...register(`apellidos`, { required: "Campo requerido" })}

                                    helperText={errors[`apellidos`] ? errors[`apellidos`].message : ''}
                                    error={!!errors[`apellidos`]}
                                />
                                </Grid2>
                            </Grid2>
                            <Grid2
                                xs={12}
                                sx={{pr:2}}
                                
                                >
   
                            <TextField
                            fullWidth
                                size="small"
                                variant='filled'
                                label="CURP"m
                                {...register(`curp`, { required: "Campo requerido" })}
                                helperText={errors[`curp`] ? errors[`curp`].message : ''}
                                error={!!errors[`curp`]}

                            />
                            </Grid2>
                            <Sheet
                                sx={{
                                    bgcolor: 'background.level1',
                                    borderRadius: 'sm',
                                    p: 1.5,
                                    my: 1.5,
                                    display: 'flex',
                                    gap: 2,
                                    '& > Grid2 xs={2}': { flex: 1 },
                                }}
                            >
                                <Grid2 container
                                xs={12}
                                justifyContent={'space-between'}
                                >
                                <Grid2 xs={2}>

                                    <TextField size="small" variant='filled' label="SSN" fullWidth
                                        {...register(`ssn`, { required: "Campo requerido" })}
                                        helperText={errors[`ssn`] ? errors[`ssn`].message : ''}
                                        error={!!errors[`ssn`]}

                                    />
                                </Grid2 >
                                <Grid2 xs={2}>
                                    <TextField
                                        size="small"
                                        variant='filled'
                                        label="Fecha Nacimiento"
                                        type='date'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth

                                        {...register(`fecha_nacimiento`, { required: "Campo requerido" })}
                                        helperText={errors[`fecha_nacimiento`] ? errors[`fecha_nacimiento`].message : ''}
                                        error={!!errors[`fecha_nacimiento`]}

                                    />
                                </Grid2 >
                                <Grid2 xs={2} style={{ display: !employ ? "none" : "block" }}>
                                    <TextField
                                        size="small"
                                        variant='filled'
                                        label="Numero de Empleado"
                                        type="number"
                                        {...register(`numero_empleado`, { required: employ ? "Campo requerido" : null })}
                                        helperText={errors[`numero_empleado`] ? errors[`numero_empleado`].message : ''}
                                        error={!!errors[`numero_empleado`]}

                                        fullWidth />
                                </Grid2>
                                <Grid2 xs={2} style={{ display: employ ? "none" : "block" }}>
                                    <TextField
                                        size="small"
                                        variant='filled'
                                        label="porcentaje"
                                        type="number"
                                        {...register(`porcentaje`, { required: !employ ? "Campo requerido" : null })}
                                        helperText={errors[`porcentaje`] ? errors[`porcentaje`].message : ''}
                                        error={!!errors[`porcentaje`]}

                                        fullWidth />
                                </Grid2>
                                <Grid2 xs={2}>
                                    <TextField

                                        size="small"
                                        variant='filled'
                                        label="Telefono"
                                        fullWidth
                                        {...register(`numero_telefono`, { required: "Campo requerido" })}
                                        helperText={errors[`numero_telefono`] ? errors[`numero_telefono`].message : ''}
                                        error={!!errors[`numero_telefono`]}

                                    />
                                </Grid2>
                                <Grid2 xs={2}>
                                    <TextField
                                        size="small"
                                        variant='filled'
                                        label="Nacionalidad"
                                        fullWidth
                                        {...register(`nacionalidad`, { required: "Campo requerido" })}
                                        helperText={errors[`nacionalidad`] ? errors[`nacionalidad`].message : ''}
                                        error={!!errors[`nacionalidad`]}

                                    />
                                </Grid2>
                                </Grid2>
                            </Sheet>
                            <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                                <Button type='submit' variant="solid" color="success">
                                    Guardar
                                </Button>
                                <Button variant="outlined" color="danger" onClick={cancel}>
                                    Cancelar
                                </Button>

                            </Box>
                        </CardContent>
                    </Box>
                </Card>
            </Grid2>
        </>)
}