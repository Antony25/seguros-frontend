import Grid from '@mui/material/Unstable_Grid2'; // Grid version 1

import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { useNavigate } from "react-router-dom";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box, Button } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import { deleteBeneficiarie, deleteEmploye } from '../main/slice/thunks';
import { setBeneficiaryUpdate } from '../main/slice/BeneficiarieUpdateSlice';
import { setEmployeUpdate, setItemEmployeUpdate } from '../main/slice/EmployesUpdateSlice';

export const CardInfo = ({ info, employ }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showBeneficiaries = (event, id) => {
        console.log(id)
        navigate('beneficiarios/', { state: { employe_id: id }, replace: false });
    }
  
    const deleteElement= (event, id) => {
        if (employ){
            dispatch(deleteEmploye(id))
        }else{
            dispatch(deleteBeneficiarie(id))
        }

    }
    const setUpdate = (event, item) => {
        if( employ){        dispatch(setItemEmployeUpdate(item))}else{
            dispatch(setBeneficiaryUpdate(item))
        }
      };
    return (
        <>
            <Grid2
            container
                sx={{
                    width: '100%',
                }}
                justifyContent={"center"}
            >
                
                <Card
                    orientation="horizontal"
                    
                    sx={{
                        width: '95%',
                        m:1,
                        
               
                    }}
                >
                    
                    <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
                        <AccountCircleIcon/>
                    </AspectRatio>
                    <CardContent>
                        <Typography fontSize="xl" fontWeight="lg">
                            {info.nombre +" "+ info.apellidos}
                        </Typography>
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            {info.curp}
                        </Typography>
                        <Sheet
                            sx={{
                                bgcolor: 'background.level1',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                display: 'flex',
                                gap: 2,
                                '& > div': { flex: 1 },
                            }}
                        >
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    SSN
                                </Typography>
                                <Typography fontWeight="lg">{info.ssn}</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Fecha Nacimiento
                                </Typography>
                                <Typography fontWeight="lg">{info.fecha_nacimiento}</Typography>
                            </div>
                            <div style={{  display: !employ ? "none" : "block" }}>
                                
                                <Typography level="body-xs" fontWeight="lg">
                                    Numero Empleado
                                </Typography>
                                <Typography fontWeight="lg">{info.numero_empleado}</Typography>
                            </div>
                            <div style={{  display: employ ? "none" : "block" }}>
                                
                                <Typography level="body-xs" fontWeight="lg">
                                    Portcentaje
                                </Typography>
                                <Typography fontWeight="lg">{info.porcentaje}%</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Telefono
                                </Typography>
                                <Typography fontWeight="lg">{info.numero_telefono}</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Nacionalidad
                                </Typography>
                                <Typography fontWeight="lg">{info.nacionalidad}</Typography>
                            </div>
                        </Sheet>
                        <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                        <Button 
                        
                        variant="contained" color="primary"
                        style={{  display: !employ ? "none" : "block" }}
                        onClick={(e)=> showBeneficiaries(e, info.id)}
                        >
                                Ver Beneficiarios
                            </Button>
                            <Button startIcon={<BorderColorIcon></BorderColorIcon>} variant="contained" color="warning" 
                            onClick={setUpdate(info)}>
                                Actualizar
                            </Button>
                            <Button 
                                onClick={(e)=> deleteElement(e, info.id)}
                            startIcon={<DeleteIcon></DeleteIcon>} variant="contained" color="error">
                                Eliminar
                            </Button>

                        </Box>
                    </CardContent>
                </Card>
            </Grid2>
        </>)
}