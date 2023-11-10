import { Button,Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 1

import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { useNavigate } from "react-router-dom";


const statusStyle = {
    A: {
        icon: <EditIcon className="text-primary" />,
        classOption: 'bg-primary bg-opacity-50'
    },
    E: {
        icon: <AccessTimeOutlinedIcon className="text-warning"/>,
        classOption: 'bg-warning bg-opacity-50'
    },
    S: {
        icon: <DoneOutlineOutlinedIcon className="text-success"/>,
        classOption: 'bg-success bg-opacity-50'
    },
    undefined: {
        icon: null,
        classOption: 'bg-gentera-6'
    }
}
let styleButton;
export const CardInfo = ({ description, status, classColor, path,id }) => {
    const navigate = useNavigate();
    const handleToPath = (event, toPath) => {
        navigate(toPath, {state:{reset:true},  replace: false });
    }
    if (!status){
        styleButton  = statusStyle.undefined;
    }else {
        styleButton = statusStyle[status];
    }
    return (
        <>
            <Grid container
                className="box-shadow"
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"

                sx={{ backgroundColor: "#FFFFFF", padding: 0, borderRadius: 2, m: 2 }}

            >
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    className={classColor}
                    xs={2}
                    sx={{ height: 60, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }} >
                    < KeyboardDoubleArrowRightIcon sx={{ fontSize: 40 }} className="text-bold-white" />
                </Grid>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    sx={{ height: 60, p:1}}
                    className="bg-gentera-6" xs={8}>
                    <Typography>{description}</Typography>
                </Grid>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    sx={{ height: 60, borderTopRightRadius: 4, borderBottomRightRadius: 4 }}
                    className={styleButton.classOption} 
                    xs={2}>
                    <Button xs={12} sx={{height:60}} fullWidth disabled={!status} onClick={(e)=> handleToPath(e,path)}>{styleButton.icon}</Button>
                </Grid>



            </Grid>
        </>)
}